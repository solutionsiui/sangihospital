export type HospitalLocation = {
  id: string;
  name: string;
  city: string;
  address: string;
  image: string;
  href: string;
};

export type HospitalState = {
  id: string;
  label: string;
  hospitals: HospitalLocation[];
};

export type HospitalRegion = {
  id: string;
  label: string;
  states: HospitalState[];
};

export const hospitalsMegaMenu = {
  viewAllHref: "/hospitals",
  regions: [
    {
      id: "north",
      label: "North India",
      states: [
        {
          id: "uttar-pradesh",
          label: "Uttar Pradesh",
          hospitals: [
            {
              id: "aligarh",
              name: "Sangi Hospital, Aligarh",
              city: "Aligarh",
              address: "Civil Lines, Aligarh, Uttar Pradesh",
              image: "/assets/images/home/20240920064059.jpg",
              href: "/hospitals/aligarh",
            },
            {
              id: "baghpat",
              name: "Sangi Hospital, Baghpat",
              city: "Baghpat",
              address: "Baraut Road, Baghpat, Uttar Pradesh",
              image: "/assets/images/home/20250310083759.jpg",
              href: "/hospitals/baghpat",
            },
            {
              id: "mainpuri",
              name: "Sangi Hospital, Mainpuri",
              city: "Mainpuri",
              address: "Station Road, Mainpuri, Uttar Pradesh",
              image: "/assets/images/home/20250612045907.jpg",
              href: "/hospitals/mainpuri",
            },
            {
              id: "shikohabad",
              name: "Sangi Hospital, Shikohabad",
              city: "Shikohabad",
              address: "Firozabad Road, Shikohabad, Uttar Pradesh",
              image: "/assets/images/home/20251125052239.jpg",
              href: "/hospitals/shikohabad",
            },
            {
              id: "raya",
              name: "Sangi Hospital, Raya",
              city: "Raya",
              address: "Mathura Road, Raya, Mathura, Uttar Pradesh",
              image: "/assets/images/home/hero_bg_1.jpeg",
              href: "/hospitals/raya",
            },
            {
              id: "laxmi-nagar",
              name: "Sangi Hospital, Laxmi Nagar",
              city: "Laxmi Nagar",
              address: "Laxmi Nagar, Mathura, Uttar Pradesh",
              image: "/assets/images/home/servicehome.png",
              href: "/hospitals/laxmi-nagar",
            },
          ],
        },
        {
          id: "delhi-ncr",
          label: "Delhi NCR",
          hospitals: [],
        },
        {
          id: "punjab",
          label: "Punjab",
          hospitals: [],
        },
        {
          id: "haryana",
          label: "Haryana",
          hospitals: [],
        },
        {
          id: "rajasthan",
          label: "Rajasthan",
          hospitals: [],
        },
      ],
    },
    {
      id: "east",
      label: "East India",
      states: [
        {
          id: "west-bengal",
          label: "West Bengal",
          hospitals: [],
        },
        {
          id: "bihar",
          label: "Bihar",
          hospitals: [],
        },
      ],
    },
    {
      id: "south",
      label: "South India",
      states: [
        {
          id: "karnataka",
          label: "Karnataka",
          hospitals: [],
        },
        {
          id: "telangana",
          label: "Telangana",
          hospitals: [],
        },
      ],
    },
    {
      id: "west",
      label: "West India",
      states: [
        {
          id: "maharashtra",
          label: "Maharashtra",
          hospitals: [],
        },
        {
          id: "gujarat",
          label: "Gujarat",
          hospitals: [],
        },
      ],
    },
  ] satisfies HospitalRegion[],
} as const;

export function getDefaultStateForRegion(region: HospitalRegion): HospitalState {
  return (
    region.states.find((state) => state.hospitals.length > 0) ?? region.states[0]
  );
}
