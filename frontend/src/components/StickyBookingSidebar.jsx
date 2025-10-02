import React, { useState } from "react";
import { FiCalendar, FiUsers, FiMessageSquare, FiShield } from "react-icons/fi";

export default function StickyBookingSidebar() {
  const [dates, setDates] = useState("");
  const [guests, setGuests] = useState(1);

  return (
    <aside className="sticky top-10 mt-10 w-full max-w-sm rounded-xl overflow-hidden shadow-lg">
      {/* Header */}
      <div className="bg-[#123730] text-white px-5 py-4">
        <h2 className="text-lg font-semibold">Book Your Stay</h2>
        <p className="text-sm text-[#d2dada] mt-1">Select dates to see prices</p>
      </div>

      {/* Body */}
      <div className="bg-white px-5 py-6 space-y-4">
        {/* Date + Guests side-by-side */}
        <div className="flex gap-3">
          {/* Select Dates (2/3) */}
          <div className="w-2/3">
            <label className="block text-xs text-gray-600 mb-1">Select Dates</label>
            <div className="flex items-center border rounded-md px-3 py-2">
              <FiCalendar className="text-gray-400 mr-2" />
              <input
                type="date"
                value={dates}
                onChange={e => setDates(e.target.value)}
                className="w-full outline-none text-sm text-gray-700"
              />
            </div>
          </div>

          {/* Guests (1/3) */}
          <div className="w-1/3">
            <label className="block text-xs text-gray-600 mb-1">Guests</label>
            <div className="flex items-center border rounded-md px-3 py-2">
              <FiUsers className="text-gray-400 mr-2" />
              <input
                type="number"
                min={1}
                value={guests}
                onChange={e => setGuests(e.target.value)}
                className="w-full outline-none text-sm text-gray-700"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <button className="w-full bg-[#284e4c] text-white py-2 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-green-200 transition inactive">
          <FiCalendar className="text-lg" />
          Check Availability
        </button>
        <button className="w-full border border-green-900 text-green-900 py-2 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-green-50 transition">
          <FiMessageSquare className="text-lg" />
          Send Inquiry
        </button>

        {/* Instant Booking Note (Centered) */}
        <div className="flex items-center justify-center gap-2 mt-2 text-gray-600 text-sm">
          <FiShield className="text-base" />
          <span>Instant booking confirmation</span>
        </div>
      </div>
    </aside>
  );
}
