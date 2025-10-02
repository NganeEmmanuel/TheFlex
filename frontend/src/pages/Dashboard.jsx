// src/pages/dashboard.jsx
import React, { useEffect, useState } from "react";
import { getReviews } from "../api/api";
import ReviewTable from "../components/ReviewTable";
import Layout from "../components/Layout";
import { DateRange } from "react-date-range";
import DashboardCards from "../components/DashboardCards";
import TrendsChart from "../components/TrendsChart";
import PropertyChart from "../components/PropertyChart";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function Dashboard() {
  const [reviews, setReviews] = useState([]);
  const [activeTab, setActiveTab] = useState("new");
  const [selected, setSelected] = useState([]);

  // filters
  const [searchTerm, setSearchTerm] = useState("");
  const [ratingFilter, setRatingFilter] = useState("all");
  const [propertyFilter, setPropertyFilter] = useState("all");
  const [dateRange, setDateRange] = useState([
    { startDate: null, endDate: null, key: "selection" },
  ]);
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    getReviews().then(setReviews).catch( err => {
      console.log(err)
    });
    
  }, []);

  const properties = [...new Set(reviews.map(r => r.property))];

  // Filtering
  const filteredReviews = reviews.filter(r => {
    if (activeTab === "new" && r.status !== "published" ) return false;
    if (activeTab === "accepted" && r.status !== "approved") return false;
    if (activeTab === "declined" && r.status !== "declined") return false;

    if (searchTerm.trim()) {
      const text = `${r.guest} ${r.property} ${r.text}`.toLowerCase();
      if (!text.includes(searchTerm.toLowerCase())) return false;
    }

    if (ratingFilter !== "all" && String(r.rating) !== ratingFilter) {
      return false;
    }

    if (propertyFilter !== "all" && r.property !== propertyFilter) {
      return false;
    }

    if (dateRange[0].startDate && dateRange[0].endDate) {
      const submitted = new Date(r.submittedAt);
      if (
        submitted < dateRange[0].startDate ||
        submitted > dateRange[0].endDate
      ) {
        return false;
      }
    }

    return true;
  });

  const handleBulkAction = (action) => {
    setReviews(prev =>
      prev.map(r =>
        selected.includes(r.id) ? { ...r, status: action } : r
      )
    );
    setSelected([]);
  };

  const handleSearchKey = (e) => {
    if (e.key === "Enter") {
      setSearchTerm(e.target.value);
    }
  };

  return (
    <Layout>
      <div className="py-15 px-35 bg-[#fffdf6]">
        <h1 className="text-2xl font-bold mb-6">Reviews Dashboard</h1>

        {/* Dashboard summary cards */}
        <DashboardCards reviews={reviews} />

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 bg-white px-3 py-5 rounded-lg shadow-md">
          <PropertyChart reviews={reviews} />
          <TrendsChart reviews={reviews} />
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b">
          {["new", "accepted", "declined"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-4 font-medium ${
                activeTab === tab
                  ? "border-b-2 border-[#123730] text-[#123730]"
                  : "text-[#123730]-300 hover:text-[#123730]"
              }`}
            >
              {tab === "new" && "New Reviews"}
              {tab === "accepted" && "Accepted"}
              {tab === "declined" && "Declined"}
            </button>
          ))}
        </div>

        {/* Filters + Bulk */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4 shadow-md px-2 py-2 bg-white">
          <div className="flex items-center gap-3 flex-wrap">
            {/* search */}
            <input
              type="text"
              placeholder="Search reviews..."
              className="p-2 rounded bg-white text-[#123730]"
              onKeyDown={handleSearchKey}
            />

            {/* date range */}
            <div className="relative">
              <button
                onClick={() => setShowDatePicker(prev => !prev)}
                className="p-2 rounded bg-white border text-[#123730]"
              >
                {dateRange[0].startDate
                  ? `${dateRange[0].startDate.toLocaleDateString()} - ${dateRange[0].endDate?.toLocaleDateString()}`
                  : "Select Date Range"}
              </button>
              {showDatePicker && (
                <div className="absolute z-50 bg-white shadow-lg mt-2">
                  <DateRange
                    ranges={dateRange}
                    onChange={(item) => setDateRange([item.selection])}
                    moveRangeOnFirstSelection={false}
                  />
                </div>
              )}
            </div>

            {/* rating */}
            <select
              className="p-2 rounded bg-white text-[#123730]"
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
            >
              <option value="all">All Ratings</option>
              {[1,2,3,4,5,6,7,8,9,10].map(r => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>

            {/* property */}
            <select
              className="p-2 rounded bg-white text-[#123730]"
              value={propertyFilter}
              onChange={(e) => setPropertyFilter(e.target.value)}
            >
              <option value="all">All Properties</option>
              {properties.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          {/* bulk actions */}
          <div className="flex gap-2">
            <button
              onClick={() => handleBulkAction("approved")}
              className="bg-[#124A45] text-white px-4 py-2 rounded"
            >
              Accept
            </button>
            <button
              onClick={() => handleBulkAction("declined")}
              className="bg-red-700 text-white px-4 py-2 rounded"
            >
              Decline
            </button>
            <button
              onClick={() => handleBulkAction("published")}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Table */}
        <ReviewTable
          reviews={filteredReviews}
          activeTab={activeTab}
          selected={selected}
          setSelected={setSelected}
          setReviews={setReviews}
        />
      </div>
    </Layout>
  );
}
