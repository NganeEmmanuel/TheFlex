import React from "react";

export default function DashboardCards({ reviews }) {
  const total = reviews.length;
  const avgRating = total ? (reviews.reduce((a, r) => a + r.rating, 0) / total).toFixed(1) : 0;
  const accepted = reviews.filter(r => r.status === "accepted").length;
  const declined = reviews.filter(r => r.status === "declined").length;

  // find top/bottom property by avg rating
  const propertyStats = {};
  reviews.forEach(r => {
    if (!propertyStats[r.property]) propertyStats[r.property] = { total: 0, sum: 0 };
    propertyStats[r.property].total += 1;
    propertyStats[r.property].sum += r.rating;
  });

  let topProperty = null, bottomProperty = null;
  Object.entries(propertyStats).forEach(([prop, { total, sum }]) => {
    const avg = sum / total;
    if (!topProperty || avg > topProperty.avg) topProperty = { prop, avg };
    if (!bottomProperty || avg < bottomProperty.avg) bottomProperty = { prop, avg };
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="bg-[#123730] shadow rounded-lg p-4 text-center text-white">
        <h3 className="text-lg font-semibold">Total Reviews</h3>
        <p className="text-2xl">{total}</p>
      </div>
      <div className="bg-[#123730] shadow rounded-lg p-4 text-center text-white">
        <h3 className="text-lg font-semibold">Avg Rating</h3>
        <p className="text-2xl">{avgRating}</p>
      </div>
      <div className="bg-[#123730] shadow rounded-lg p-4 text-center text-white">
        <h3 className="text-lg font-semibold">Top Property</h3>
        <p className="text-xl">{topProperty ? `${topProperty.prop} (${topProperty.avg.toFixed(1)})` : "-"}</p>
      </div>
      <div className="bg-[#123730] shadow rounded-lg p-4 text-center text-white">
        <h3 className="text-lg font-semibold">Lowest Property</h3>
        <p className="text-xl">{bottomProperty ? `${bottomProperty.prop} (${bottomProperty.avg.toFixed(1)})` : "-"}</p>
      </div>
    </div>
  );
}
