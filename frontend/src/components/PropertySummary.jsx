import React from "react";
import { LuUsers, LuBedDouble, LuBath, LuBed, LuHouse } from "react-icons/lu";
import { PiDoorOpenLight } from "react-icons/pi";

export default function PropertySummary({ title, guests, bedrooms, beds, bathrooms, description }) {
  return (
    <section className="mt-8 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>

      {/* Property Stats */}
      <div className="flex flex-wrap gap-x-15 gap-y-4 text-gray-700">
        <div className="flex items-center gap-2">
          <LuUsers className="text-gray-400 text-2xl" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-center">{guests}</span>
            <span className="text-sm">Guests</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <LuBed className="text-gray-400 text-2xl" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-center">{bedrooms}</span>
            <span className="text-sm">Bedrooms</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <LuBath className="text-gray-400 text-2xl" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-center">{bathrooms}</span>
            <span className="text-sm">Bathroom{bathrooms > 1 ? "s" : ""}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <LuHouse className="text-gray-400 text-2xl" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-center">{beds}</span>
            <span className="text-sm">Beds</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed whitespace-pre-line text-[15px]">
        {description}
      </p>
    </section>
  );
}
