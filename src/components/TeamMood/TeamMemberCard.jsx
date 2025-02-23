import React from 'react'
import EmojiBar from './EmojiBar';

function TeamMemberCard({memberdata}) {

  return (
    <div className="border-b">
      <p className="text-gray-800 font-semibold">{memberdata.name}</p>
      <p className="text-sm text-gray-500">{memberdata.role}</p>
      <EmojiBar mood={memberdata.mood}/>
    </div>
  )
}

export default TeamMemberCard