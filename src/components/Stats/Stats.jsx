import React from "react";
import { useAppContext } from "../../contexts/AppContext";
import { LayoutGrid, CheckCircle, Hourglass, AlertTriangle, Users } from "lucide-react";

const iconMap = {
  "Total Projects": <LayoutGrid className="w-6 h-6 text-gray-600" />,
  "Completed": <CheckCircle className="w-6 h-6 text-green-500" />,
  "Ongoing": <Hourglass className="w-6 h-6 text-blue-500" />,
  "Delayed": <AlertTriangle className="w-6 h-6 text-red-800" />,
  "Employees": <Users className="w-6 h-6 text-purple-500" />,
};

function Stats() {
  const { dbData } = useAppContext();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
      {dbData.stats.map((stat, index) => (
        <div
          key={index}
          className={`relative p-6 rounded-md shadow-md text-center 
    ${stat.label === "Delayed" ? "bg-red-500 text-white" : "bg-white"}
  `}
        >
          <div className="absolute top-4 left-4">{iconMap[stat.label]}</div>

          <p className="text-3xl font-bold mt-6">{stat.value}</p>
          <p className={`${stat.label === "Delayed" ? "text-white" : "text-gray-600"}`}>{stat.label}</p>
        </div>
      ))}
      
    </div>
  );
}

export default Stats;
