import React from "react";
import {
  LuTv,
  LuWifi,
  LuNetwork,
  LuWashingMachine,
  LuArrowDownUp ,
  LuThermometer,
  LuAlarmSmoke,
} from "react-icons/lu";
import { GiKnifeFork } from "react-icons/gi";
import { PiWindDuotone } from "react-icons/pi";

const iconMap = {
  "Cable TV": LuTv,
  "Internet": LuNetwork,
  "Wireless": LuWifi,
  "Kitchen": GiKnifeFork,
  "Washing Machine": LuWashingMachine,
  "Elevator": LuArrowDownUp ,
  "Hair Dryer": PiWindDuotone,
  "Heating": LuThermometer,
  "Smoke Detector": LuAlarmSmoke,
};

export default function Amenities({ amenities }) {
  return (
    <section className="mt-10 px-4 shadow-lg rounded-lg p-5 bg-white">
      {/* Header row */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold text-gray-900">Amenities</h1>
        <button className="text-sm text-[#b7cecd] hover:bg-[#e1efee] font-medium p-2 rounded-md shadow-sm">
          View all amenities
        </button>
      </div>

      {/* Amenities grid */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10 text-gray-700">
        {amenities.map((label, i) => {
          const Icon = iconMap[label];
          return (
            <li key={i} className="flex items-center gap-3">
              {Icon ? <Icon className="text-gray-400 text-lg" /> : <span className="text-gray-400">•</span>}
              <span className="text-sm">{label}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
