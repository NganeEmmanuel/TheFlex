import React from "react";
import { FiStar } from "react-icons/fi";
import { FaStar } from "react-icons/fa";


export default function PublicReviewCard({ name, date, rating, text, avatar }) {
  return (
    <div className="bg-[#f2f7f6] rounded-lg shadow-sm p-4 flex flex-col gap-2">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-[#284e4c]">{name}</h4>
        {avatar && (
          <img
            src={avatar}
            alt={`${name}'s avatar`}
            className="w-8 h-8 rounded-full object-cover"
          />
        )}
      </div>

      {/* Rating + Date */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <div className="flex gap-1 text-[#284e4c]">
          {Array.from({ length: rating }, (_, i) => (
            <FaStar key={i} className="text-sm" color="#123730" />
          ))}
        </div>
        <span className="text-xs text-gray-500">{date}</span>
      </div>

      {/* Review Text */}
      <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
}
