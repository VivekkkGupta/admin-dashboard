export const data = {
    users: [
      { id: 1, name: "Mario", role: "Admin", avatar: "mario.png" }
    ],
    teamMembers: [
      { id: 1, name: "Andrea", role: "UX Junior", mood: 3 },
      { id: 2, name: "Alvaro", role: "Back-end Dev", mood: 10 },
      { id: 3, name: "Juan", role: "UX Senior", mood: 8 },
      { id: 4, name: "Jose", role: "Marketing", mood: 1 },
      { id: 5, name: "Maria", role: "UX Junior", mood: 5 }
    ],
    projects: [
      { id: 101, name: "Insurance App", budget: 70000, profitability: 100, actual_hours: 1100, status: "Over Budget" },
      { id: 102, name: "Neo",         budget: 70000, profitability: 100, actual_hours: 1000, status: "Over Budget" },
      { id: 103, name: "VR Website", budget: 70000, profitability: 100, actual_hours: 2000, status: "On Track" },
      { id: 104, name: "VR Website", budget: 70000, profitability: 100, actual_hours: 1100, status: "Sold Hours" },
      { id: 105, name: "VR Website", budget: 70000, profitability: 100, actual_hours: 1100, status: "Sold Hours" }
    ],
    reports: [
      { id: 201, type: "Revenue", date: "2025-02-20", amount: 6000 }
    ],
    stats : [
      { label: "Total Projects", value: 5 },
      { label: "Completed", value: 1 },
      { label: "Ongoing", value: 3 },
      { label: "Delayed", value: 1 },
      { label: "Employees", value: 5 },
    ],
    lineChartData :{
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Projects Completed",
          data: [2, 5, 3, 7, 6, 4, 8, 9, 7, 5, 6, 10], 
          borderColor: "#4F46E5", 
          backgroundColor: "rgba(79, 70, 229, 0.2)",
          tension: 0.3,
        },
      ],
    },
    pieChartData: {
      labels: ["Completed", "Ongoing", "Delayed"],
      datasets: [
        {
          label: "Project Status",
          data: [1, 3, 1], // Values from the stats array
          backgroundColor: ["#10B981", "#3B82F6", "#EF4444"], // Green, Blue, Red
          hoverOffset: 4,
        },
      ],
    }    
  };
  