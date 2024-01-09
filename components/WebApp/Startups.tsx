import { BsPersonFill } from "react-icons/bs";

export default function Startups() {
  return (
    <div className="bg-gray-100 min-h-screen px-20">
      <div className="flex p-4"></div>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>Nome</span>
            <span className="sm:text-left text-right">Vertical</span>
            <span className="hidden md:grid">Fundação</span>
            <span className="hidden sm:grid">País</span>
          </div>
          <ul>
            {startups.map((startup) => (
              <li
                key={startup.id}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <BsPersonFill className="text-purple-800" />
                  </div>
                  <p className="pl-4">{startup.name}</p>
                </div>
                <p className="text-gray-600 sm:text-left text-right">
                  {startup.vertical}
                </p>
                <p className="hidden md:flex">{startup.foundation}</p>
                <div className="sm:flex hidden justify-between items-center">
                  <p>{startup.country}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const startups = [
  {
    id: 1,
    name: "Agrocamp",
    vertical: "Fintech",
    foundation: "2021",
    country: "Brazil",
  },
  {
    id: 2,
    name: "TechVista",
    vertical: "Healthtech",
    foundation: "2020",
    country: "United States",
  },
  {
    id: 3,
    name: "GreenHarbor",
    vertical: "Cleantech",
    foundation: "2019",
    country: "Canada",
  },
  {
    id: 4,
    name: "ByteSprint",
    vertical: "Edtech",
    foundation: "2022",
    country: "India",
  },
  {
    id: 5,
    name: "NexGen Labs",
    vertical: "Biotech",
    foundation: "2018",
    country: "Germany",
  },
  {
    id: 6,
    name: "SolarX",
    vertical: "Energy",
    foundation: "2017",
    country: "Australia",
  },
  {
    id: 7,
    name: "AquaInnovate",
    vertical: "Watertech",
    foundation: "2020",
    country: "Netherlands",
  },
  {
    id: 8,
    name: "RoboPulse",
    vertical: "Robotics",
    foundation: "2016",
    country: "Japan",
  },
  {
    id: 9,
    name: "FoodFusion",
    vertical: "Foodtech",
    foundation: "2019",
    country: "France",
  },
  {
    id: 10,
    name: "MediConnect",
    vertical: "Medtech",
    foundation: "2021",
    country: "United Kingdom",
  },
];
