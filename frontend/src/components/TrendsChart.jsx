import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function TrendsChart({ reviews }) {
  const grouped = {};

  reviews.forEach(r => {
    const month = new Date(r.submittedAt).toLocaleString("default", { month: "short", year: "numeric" });
    if (!grouped[month]) grouped[month] = { month, count: 0, sum: 0 };
    grouped[month].count += 1;
    grouped[month].sum += r.rating;
  });

  const data = Object.values(grouped).map(d => ({
    month: d.month,
    avg: d.sum / d.count,
    count: d.count,
  }));

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Trends Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[0, 10]} />
          <Tooltip />
          <Line type="monotone" dataKey="avg" stroke="#124A45" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
