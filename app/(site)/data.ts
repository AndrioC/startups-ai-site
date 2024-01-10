export interface StartupProps {
  id?: number;
  startup_name: string;
  logo: string;
  foundation_year: number;
  value_proposal: string;
  sgl_label: string;
  last_update: string;
  vertical: string;
  business_model: string;
  country: string;
  flag: string;
}

type StartupFlags = {
  [key: string]: string;
};

export const startupsList: StartupProps[] = [
  {
    id: 1,
    startup_name: "Vaca Roxa",
    foundation_year: 2022,
    value_proposal: "",
    sgl_label: "junior",
    last_update: "10/01/2024",
    vertical: "AgriTech",
    business_model: "B2B2C",
    country: "Brasil",
    logo: "/assets/startups/logos/01_vaca_roxa.jpg",
    flag: "brazil",
  },
  {
    id: 2,
    startup_name: "Grupo Gestão Saúde",
    foundation_year: 2023,
    value_proposal: "",
    sgl_label: "junior",
    last_update: "10/01/2024",
    vertical: "SaaS",
    business_model: "B2B",
    country: "Brasil",
    logo: "/assets/startups/logos/02_grupo_gestao_saude.png",
    flag: "brazil",
  },
  {
    id: 3,
    startup_name: "DS7 BANK",
    foundation_year: 2021,
    value_proposal: "",
    sgl_label: "junior",
    last_update: "10/01/2024",
    vertical: "Fintech",
    business_model: "B2B2C",
    country: "Brasil",
    logo: "/assets/startups/logos/03_ds7_bank.png",
    flag: "brazil",
  },
  {
    id: 4,
    startup_name: "mub",
    foundation_year: 2020,
    value_proposal: "",
    sgl_label: "junior",
    last_update: "10/01/2024",
    vertical: "SaaS",
    business_model: "B2B",
    country: "Brasil",
    logo: "/assets/startups/logos/04_mub.png",
    flag: "brazil",
  },
  {
    id: 5,
    startup_name: "Meister Safe System",
    foundation_year: 2020,
    value_proposal: "",
    sgl_label: "junior",
    last_update: "10/01/2024",
    vertical: "Healthtech",
    business_model: "B2B e B2C",
    country: "Brasil",
    logo: "/assets/startups/logos/05_meister_safe.jpg",
    flag: "brazil",
  },
];

export const startupFlags: StartupFlags = {
  brazil: "/assets/startups/flags/brazil.svg",
  india: "/assets/startups/flags/india.svg",
};
