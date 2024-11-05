export interface TeamProps {
  id: number;
  name: string;
  linkedin: string;
  position_pt: string;
  position_en: string;
  photo: string;
}

export const teamList: TeamProps[] = [
  {
    id: 2,
    name: "Rodrigo Grossi",
    linkedin: "https://www.linkedin.com/in/rodrigogrossi/",
    position_pt: "CEO",
    position_en: "CEO",
    photo: "/assets/team/02_rodrigo.jpeg",
  },
  {
    id: 3,
    name: "Andrio Corrêa",
    linkedin: "https://www.linkedin.com/in/andriocorrea/",
    position_pt: "CTO",
    position_en: "CTO",
    photo: "/assets/team/03_andrio.jpg",
  },
  {
    id: 1,
    name: "Marcelo Vivacqua",
    linkedin: "https://www.linkedin.com/in/marcelo-vivacqua-phd-b92b7620/",
    position_pt: "Advisor de Internacionalização",
    position_en: "Internationalization Advisor",
    photo: "/assets/team/01_marcelo.jpeg",
  },
  {
    id: 5,
    name: "Mário Alex",
    linkedin: "https://www.linkedin.com/in/marioalexsantos/",
    position_pt: "Advisor de Gestão de Projetos e Experiência do Cliente",
    position_en: "Project Management and Customer Experience Advisor",
    photo: "/assets/team/05_mario.jpeg",
  },
  {
    id: 7,
    name: "Marcos Tito",
    linkedin: "https://www.linkedin.com/in/mrctito/",
    position_pt: "Advisor de IA",
    position_en: "AI Advisor",
    photo: "/assets/team/07_marcos.jpeg",
  },
  {
    id: 9,
    name: "Marco de Biasi",
    linkedin: "https://www.linkedin.com/in/debiasimarco/",
    position_pt: "Advisor de Investimentos",
    position_en: "Investment Advisor",
    photo: "/assets/team/09_marco.jpeg",
  },
];
