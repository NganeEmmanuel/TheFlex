import React from "react";
import { FiClock, FiXCircle, FiShield, FiCalendar } from "react-icons/fi";
import { PiProhibit } from "react-icons/pi";
import { LuPawPrint, LuCalendarClock } from "react-icons/lu";
import { MdOutlineCelebration } from "react-icons/md";

export default function StayPolicies() {
  return (
    <section className="mt-10">
      <div className="bg-white shadow-md rounded-xl p-6 space-y-6">
        {/* Section Title */}
        <h2 className="text-xl font-semibold text-[#123730]">Stay Policies</h2>

        {/* Check-in & Check-out */}
        <div className="bg-[#f1f3ee] rounded-lg p-4 space-y-4">
            <div className="flex items-center gap-5 p-2">
                <FiClock color="#284e4c" opacity={.3} size={20}/>
                <h3 className="text-lg font-medium text-black tracking-wide">Check-in & Check-out</h3>
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white rounded-md shadow-sm p-3 items-center gap-3">
                <p className="text-sm text-gray-700">Check-in Time:</p>
                <p className="text-lg text-gray-700 bold font-medium"> 3:00 PM</p>
            </div>
            <div className="bg-white rounded-md shadow-sm p-3 items-center gap-3">
              <p className="text-sm text-gray-700">Check-out Time:</p>
              <p className="text-lg text-gray-700 bold font-medium">  10:00 AM</p>
            </div>
          </div>
        </div>

        {/* House Rules */}
        <div className="bg-[#f1f3ee] rounded-lg p-4 space-y-4">
            <div className="flex items-center gap-5 p-2">
                <FiShield color="#284e4c" opacity={.3} size={20}/>
                <h3 className="text-lg font-medium text-black tracking-wide">House Rules</h3>
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white rounded-md shadow-sm p-5 flex items-center gap-3">
              <PiProhibit className="text-[#284e4c] text-lg" />
              <span className="text-sm text-gray-700">No smoking</span>
            </div>
            <div className="bg-white rounded-md shadow-sm p-5 flex items-center gap-3">
              <LuPawPrint className="text-[#284e4c] text-lg" />
              <span className="text-sm text-gray-700">No pets</span>
            </div>
            <div className="bg-white rounded-md shadow-sm p-5 flex items-center gap-3">
              <MdOutlineCelebration className="text-[#284e4c] text-lg" />
              <span className="text-sm text-gray-700">No parties or events</span>
            </div>
            <div className="bg-white rounded-md shadow-sm p-5 flex items-center gap-3">
              <FiShield className="text-[#284e4c] text-lg" />
              <span className="text-sm text-gray-700">Security deposit required</span>
            </div>
          </div>
        </div>

        {/* Cancellation Policy */}
        <div className="bg-[#f1f3ee] rounded-lg p-4 space-y-4">
            <div className="flex items-center gap-5 p-2">
                <LuCalendarClock color="#284e4c" opacity={.3} size={20}/>
                <h3 className="text-lg font-medium text-black tracking-wide">Cancellation Policy</h3>
            </div>
          <div className="space-y-4 text-lg text-gray-700">
            <div className="bg-white rounded-md shadow-sm p-4 flex gap-4 items-start">
              <div>
                <p className="font-medium text-md">For stays less than 28 days:</p>
                <ul className="list-disc list-inside space-y-1 mt-1">
                  <li>Full refund up to 14 days before check-in</li>
                  <li>No refund for bookings less than 14 days before check-in</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-sm p-4 flex gap-4 items-start">
              <div>
                <p className="font-medium text-md">For stays of 28 days or more:</p>
                <ul className="list-disc list-inside space-y-1 mt-1">
                  <li>Full refund up to 30 days before check-in</li>
                  <li>No refund for bookings less than 30 days before check-in</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
