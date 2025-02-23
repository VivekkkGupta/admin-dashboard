import React from "react";
import Stats from "../components/Stats/Stats";
import TeamMood from "../components/TeamMood/TeamMood";
import LineChartCard from "../components/Linechartcard/LineChartCard";
import PieChartCard from "../components/PieChartCard/PieChartCard";
import BudgetStatus from "../components/BudgetStatus/BudgetStatus";

const stats = [
  { label: "Total Projects", value: 5 },
  { label: "Completed", value: 1 },
  { label: "Ongoing", value: 3 },
  { label: "Delayed", value: 1 },
  { label: "Employees", value: 5 },
];

function Dashboard() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-300">
        
        {/* Top Dashboard - Stats, Charts , Team Mood*/}
        <div className="flex flex-col lg:flex-row gap-5 h-auto lg:h-[500px] p-5">
          
          {/* Stats & Charts */}
          <div className="w-full h-full lg:w-3/4">
            {/* Stats */}
            <Stats/>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto lg:h-[300px]">
              
              {/* Line Chart */}
              <LineChartCard />

              {/* Pie Chart */}
              <PieChartCard/>

            </div>
          </div>

          {/* Team Mood */}
          <TeamMood/>

        </div>

        {/* Bottom Dashboard - Budget Status */}
        <div className=" w-full h-auto px-5 pb-5">
            <BudgetStatus/>
        </div>

      </div>
    </>
  );
}

export default Dashboard;
