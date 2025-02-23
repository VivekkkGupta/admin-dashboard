import React, { useEffect } from "react";
import { useAppContext } from "../../contexts/AppContext";
import TeamMemberCard from "./TeamMemberCard";

function TeamMood() {
  const { dbData } = useAppContext();
//   console.log(dbData.teamMembers);

  if (!dbData.teamMembers || dbData.teamMembers.length === 0) {
    return <p>No team members found.</p>;
  }  

  return (
    <div className="w-full lg:w-1/4 bg-white rounded-md shadow-md flex flex-col lg:h-full p-4">
      <h3 className="text-lg font-semibold text-center mb-3">Team Mood</h3>
      
      {dbData.teamMembers.map((member) => (
        <TeamMemberCard key={member.id} memberdata={member} />
      ))}
    </div>
  );
}

export default TeamMood;
