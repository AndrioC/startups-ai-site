import { RxDashboard } from "react-icons/rx";

import DashCard from "./DashCard";
export default function DashCardsList() {
  return (
    <div>
      <div className="p-10 px-20">
        <h1 className="text-2xl font-normal">IFIA - ABIPIR PROGRAM</h1>
        <h2 className="text-lg font-normal">ESTATÍSTICAS DO PROGRAMA</h2>
      </div>
      <div className="grid lg:grid-cols-4 gap-4 p-10 px-20 md:grid-cols-2">
        <DashCard
          icon={<RxDashboard />}
          title="Startups"
          value={24}
          bgClassName="bg-purple-200"
          iconClassName="text-purple-500"
        />
        <DashCard
          icon={<RxDashboard />}
          title="Experts"
          value={4}
          bgClassName="bg-green-200"
          iconClassName="text-green-500"
        />
        <DashCard
          icon={<RxDashboard />}
          title="Investidores"
          value={28}
          bgClassName="bg-yellow-200"
          iconClassName="text-yellow-500"
        />
        <DashCard
          icon={<RxDashboard />}
          title="Empresas"
          value={28}
          bgClassName="bg-blue-200"
          iconClassName="text-blue-500"
        />
      </div>
    </div>
  );
}
