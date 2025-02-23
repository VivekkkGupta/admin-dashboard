import React from "react";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useAppContext } from "../../contexts/AppContext";

ChartJs.register(ArcElement,Tooltip,Legend);

function PieChartCard() {
    const {dbData} = useAppContext();
  return (
    <div className="bg-white rounded-md shadow-md flex items-center justify-center h-40  md:h-full">
        <Pie data={dbData.pieChartData}  options={{ responsive: true, maintainAspectRatio: false }}/>
    </div>
  );
}

export default PieChartCard;
