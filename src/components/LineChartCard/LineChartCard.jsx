import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import { useAppContext } from "../../contexts/AppContext";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function LineChartCard() {
    const {dbData} = useAppContext()

  return (
    <div className="bg-white rounded-md shadow-md p-4 flex items-center justify-center h-40 md:h-full">
      <Line data={dbData.lineChartData} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
}

export default LineChartCard;