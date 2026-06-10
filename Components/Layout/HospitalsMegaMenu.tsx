"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { useMemo, useState } from "react";
import {
  getDefaultStateForRegion,
  hospitalsMegaMenu,
  type HospitalLocation,
  type HospitalRegion,
  type HospitalState,
} from "@/lib/hospitals";

export default function HospitalsMegaMenu() {
  const { regions, viewAllHref } = hospitalsMegaMenu;
  const [activeRegionId, setActiveRegionId] = useState(regions[0].id);
  const [activeStateId, setActiveStateId] = useState(
    getDefaultStateForRegion(regions[0]).id,
  );
  const [hoveredHospitalId, setHoveredHospitalId] = useState<string>(
    getDefaultStateForRegion(regions[0]).hospitals[0]?.id ?? "",
  );

  const activeRegion = useMemo(
    () => regions.find((region) => region.id === activeRegionId) ?? regions[0],
    [activeRegionId, regions],
  );

  const activeState = useMemo(
    () =>
      activeRegion.states.find((state) => state.id === activeStateId) ??
      getDefaultStateForRegion(activeRegion),
    [activeRegion, activeStateId],
  );

  const previewHospital = useMemo(() => {
    return (
      activeState.hospitals.find(
        (hospital) => hospital.id === hoveredHospitalId,
      ) ??
      activeState.hospitals[0] ??
      null
    );
  }, [activeState.hospitals, hoveredHospitalId]);

  const handleRegionChange = (region: HospitalRegion) => {
    const nextState = getDefaultStateForRegion(region);
    setActiveRegionId(region.id);
    setActiveStateId(nextState.id);
    setHoveredHospitalId(nextState.hospitals[0]?.id ?? "");
  };

  const handleStateChange = (state: HospitalState) => {
    setActiveStateId(state.id);
    setHoveredHospitalId(state.hospitals[0]?.id ?? "");
  };

  const handleHospitalHover = (hospitalId: string) => {
    setHoveredHospitalId(hospitalId);
  };

  return (
    <div className="header-mega header-mega--hospitals">
      <div className="header-hospitals-mega__panel">
        <div className="header-hospitals-mega__tabs" role="tablist" aria-label="Regions">
          {regions.map((region) => (
            <button
              key={region.id}
              type="button"
              role="tab"
              aria-selected={activeRegionId === region.id}
              className={`header-hospitals-mega__tab${
                activeRegionId === region.id ? " is-active" : ""
              }`}
              onMouseEnter={() => handleRegionChange(region)}
              onFocus={() => handleRegionChange(region)}
            >
              {region.label}
            </button>
          ))}
        </div>

        <div className="header-hospitals-mega__body">
          <aside className="header-hospitals-mega__sidebar">
            {activeRegion.states.map((state) => (
              <button
                key={state.id}
                type="button"
                className={`header-hospitals-mega__state${
                  activeStateId === state.id ? " is-active" : ""
                }`}
                onMouseEnter={() => handleStateChange(state)}
                onFocus={() => handleStateChange(state)}
              >
                {state.label}
              </button>
            ))}
          </aside>

          <div className="header-hospitals-mega__content">
            {activeState.hospitals.length > 0 ? (
              <>
                <ul
                  className="header-hospitals-mega__list"
                  onMouseLeave={() =>
                    setHoveredHospitalId(activeState.hospitals[0]?.id ?? "")
                  }
                >
                  {activeState.hospitals.map((hospital) => (
                    <li
                      key={hospital.id}
                      onMouseEnter={() => handleHospitalHover(hospital.id)}
                      onFocus={() => handleHospitalHover(hospital.id)}
                    >
                      <Link
                        href={hospital.href}
                        className={`header-hospitals-mega__link${
                          previewHospital?.id === hospital.id ? " is-hovered" : ""
                        }`}
                        tabIndex={0}
                      >
                        {hospital.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="header-hospitals-mega__preview">
                  <HospitalPreview
                    hospitals={activeState.hospitals}
                    activeHospitalId={previewHospital?.id ?? ""}
                  />
                </div>
              </>
            ) : (
              <div className="header-hospitals-mega__empty">
                <p className="header-hospitals-mega__empty-title">
                  Expanding Our Network
                </p>
                <p className="header-hospitals-mega__empty-text">
                  Sangi Hospital is growing across India. New locations in{" "}
                  {activeState.label} will be announced soon.
                </p>
                <Link href={viewAllHref} className="header-hospitals-mega__cta">
                  View Current Locations
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="header-hospitals-mega__footer">
          <Link href={viewAllHref} className="header-hospitals-mega__footer-link">
            Find Hospital Near You
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function HospitalPreview({
  hospitals,
  activeHospitalId,
}: {
  hospitals: HospitalLocation[];
  activeHospitalId: string;
}) {
  if (hospitals.length === 0) return null;

  return (
    <div className="header-hospitals-mega__preview-card">
      <div className="header-hospitals-mega__preview-image-wrap">
        {hospitals.map((hospital) => (
          <div
            key={hospital.id}
            className={`header-hospitals-mega__preview-slide${
              hospital.id === activeHospitalId ? " is-active" : ""
            }`}
            style={{ position: "absolute", inset: 0 }}
          >
            <Image
              src={hospital.image}
              alt={hospital.name}
              fill
              sizes="320px"
              className="header-hospitals-mega__preview-image"
            />
          </div>
        ))}
      </div>

      <div className="header-hospitals-mega__preview-body">
        {hospitals.map((hospital) => (
          <div
            key={hospital.id}
            className={`header-hospitals-mega__preview-info${
              hospital.id === activeHospitalId ? " is-active" : ""
            }`}
          >
            <p className="header-hospitals-mega__preview-name">{hospital.name}</p>
            <p className="header-hospitals-mega__preview-address">
              <MapPin size={14} aria-hidden="true" />
              {hospital.address}
            </p>
            <Link href={hospital.href} className="header-hospitals-mega__preview-link">
              View Hospital
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
