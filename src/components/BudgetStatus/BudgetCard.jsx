import React from "react";
import { CheckCircle, AlertTriangle } from "lucide-react"; // Using Lucide icons

const getStatusStyles = (status) => {
  switch (status) {
    case "Over Budget":
      return {
        bg: "bg-red-100",
        text: "text-red-600",
        border: "border-red-500",
        icon: <AlertTriangle className="text-red-600 w-4 h-4" />,
      };
    case "On Track":
      return {
        bg: "bg-green-100",
        text: "text-green-600",
        border: "border-green-500",
        icon: <CheckCircle className="text-green-600 w-4 h-4" />,
      };
    case "Sold Hours":
      return {
        bg: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-500",
        icon: <CheckCircle className="text-blue-600 w-4 h-4" />,
      };
    default:
      return {
        bg: "bg-gray-100",
        text: "text-gray-600",
        border: "border-gray-500",
        icon: <AlertTriangle className="text-gray-600 w-4 h-4" />,
      };
  }
};

function BudgetCard({ projectdata: project }) {
  const { bg, text, border, icon } = getStatusStyles(project.status);

  return (
    <div className="bg-white p-6 rounded-md shadow-md border border-gray-200 w-full max-w-[280px]">
      {/* Project Name */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div> {/* Placeholder for image */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
          <p className="text-sm text-gray-500">Company Name</p>
        </div>
      </div>

      {/* Budget Details */}
      <div className="mt-4 text-sm text-gray-600">
        <p>
          <span className="font-medium text-gray-700">Total Budget:</span> €{project.budget.toLocaleString()}
        </p>
        <p>
          <span className="font-medium text-gray-700">Profitability:</span> {project.profitability}%
        </p>
      </div>

      {/* Status Bar */}
      <div className={`w-full h-2 rounded-full mt-3 ${bg}`}>
        <div className={`${border} h-2 rounded-full w-${project.actual_hours / 20}`}></div>
      </div>

      {/* Actual Hours & Status */}
      <div className="mt-4 flex justify-between items-center">
        <p className="text-sm text-gray-500">Actual Hours: {project.actual_hours} hrs</p>
        <span className={`flex items-center gap-1 px-3 py-1 text-xs font-semibold border rounded-full ${bg} ${text}`}>
          {icon} {project.status}
        </span>
      </div>
    </div>
  );
}

export default BudgetCard;
