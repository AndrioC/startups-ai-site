import BarChart from "@/components/WebApp/Charts/BarChart";
import DashCards from "@/components/WebApp/DashCardsList";

export default function WebApp() {
  return (
    <>
      <DashCards />
      <div className="px-20 p-10 grid md:grid-cols-3 grid-cols-1 gap-4">
        <BarChart />
      </div>
    </>
  );
}
