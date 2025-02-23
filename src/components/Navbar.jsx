import { Bell, ChevronDown } from "lucide-react";
import React from "react";

function Navbar() {
  return (
    <div className="w-full h-[60px] bg-slate-600 text-white flex items-center justify-between px-10">
      {/* Logos */}
      <div className="logo">Hours</div>

      {/* nav links */}
      <div className="navlinks ">
        <ul className="flex items-center gap-8 list-none no-underline">
          <li className="border-b">Dashboard</li>
          <li className="">Projects</li>
          <li>Team</li>
          <li>Client</li>
          <li>Time</li>
          <li>Reports</li>
        </ul>
      </div>

      {/* profile */}
      <div className="profile flex items-center cursor-pointer gap-4">
        <div>
          <Bell />
        </div>
        <div className="flex items-center justify-center">
          Admin name
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
