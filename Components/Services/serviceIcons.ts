import {
  Activity,
  Ambulance,
  BedDouble,
  Building2,
  Droplets,
  HeartPulse,
  Microscope,
  Pill,
  Scan,
  Scissors,
  Siren,
  Stethoscope,
  TestTube2,
  Utensils,
  Waves,
  type LucideIcon,
} from "lucide-react";

export const serviceIconMap: Record<string, LucideIcon> = {
  "blood-bank": Droplets,
  "emergency-services": Siren,
  "icu-nicu-hdu": HeartPulse,
  laboratory: TestTube2,
  pharmacy: Pill,
  ambulance: Ambulance,
  "digital-x-ray": Scan,
  "ct-scan": Scan,
  ultrasonography: Waves,
  "labour-room": HeartPulse,
  "ot-services": Scissors,
  "dietitian-nutritionist": Utensils,
  physiotherapy: Activity,
  "eeg-examination": Activity,
  echocardiography: HeartPulse,
  "treadmill-tmt": Activity,
  "color-doppler": Waves,
  spirometry: Activity,
  pathology: Microscope,
  dialysis: Droplets,
  "deluxe-room": BedDouble,
  "private-room": BedDouble,
  "semi-private-room": Building2,
  "general-ward": Building2,
};

export function getServiceIcon(id: string): LucideIcon {
  return serviceIconMap[id] ?? Stethoscope;
}
