import React from "react";

const getMoodEmoji = (mood) => {
  const moodEmojis = ["😡", "😠", "😤", "😞", "😐", "🙂", "😊", "😁", "😃", "🤩"];
  return moodEmojis[mood - 1];
};

function EmojiBar({ mood }) {
  return (
    <div className="relative w-full bg-gray-300 rounded-xl py-2 mt-[0.4rem]">
      <span
        className="absolute text-xl -top-[50%] transition-all duration-300"
        style={{
          left: `${((mood-1) * 10) + 5}%`,
          transform: "translateX(-50%)",
        }}
      >
        {getMoodEmoji(mood)}
      </span>
    </div>
  );
}

export default EmojiBar;
