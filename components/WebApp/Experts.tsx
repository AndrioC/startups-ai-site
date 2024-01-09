import { IoWalletOutline } from "react-icons/io5";
export default function Experts() {
  return (
    <div className="bg-gray-100 min-h-screen px-20">
      <div className="flex p-4"></div>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 items-center justify-between cursor-pointer">
            <span>Name</span>
            <span className="hidden lg:grid">E-mail</span>
            <span>Expertise</span>
            <span className="hidden md:grid">País</span>
          </div>
          <ul>
            {experts.map((expert) => (
              <li
                key={expert.id}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <div className="flex">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <IoWalletOutline className="text-purple-800" />
                  </div>
                  <div className="pl-4">
                    <p className="text-gray-800">{expert.name}</p>
                  </div>
                </div>
                <p className="hidden lg:flex">{expert.email}</p>
                <p>{expert.expertise}</p>
                <p className="hidden md:flex">{expert.country}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const experts = [
  {
    id: 1,
    name: "John Smith",
    email: "johnsmith@gmail.com",
    expertise: "Edtech",
    country: "Brazil",
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    email: "maria.rodriguez@example.com",
    expertise: "Healthcare",
    country: "Mexico",
  },
  {
    id: 3,
    name: "Hans Müller",
    email: "hans.mueller@example.com",
    expertise: "Automotive",
    country: "Germany",
  },
  {
    id: 4,
    name: "Aya Takahashi",
    email: "aya.takahashi@example.com",
    expertise: "Robotics",
    country: "Japan",
  },
  {
    id: 5,
    name: "Isabella Rossi",
    email: "isabella.rossi@example.com",
    expertise: "Fashion Design",
    country: "Italy",
  },
  {
    id: 6,
    name: "Miguel Hernandez",
    email: "miguel.hernandez@example.com",
    expertise: "Renewable Energy",
    country: "Spain",
  },
  {
    id: 7,
    name: "Olga Petrova",
    email: "olga.petrova@example.com",
    expertise: "Space Exploration",
    country: "Russia",
  },
  {
    id: 8,
    name: "Chen Li",
    email: "chen.li@example.com",
    expertise: "Artificial Intelligence",
    country: "China",
  },
  {
    id: 9,
    name: "Emmanuel Okafor",
    email: "emmanuel.okafor@example.com",
    expertise: "Agriculture",
    country: "Nigeria",
  },
  {
    id: 10,
    name: "Sophie Dubois",
    email: "sophie.dubois@example.com",
    expertise: "Culinary Arts",
    country: "France",
  },
];
