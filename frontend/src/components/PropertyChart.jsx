import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function PropertyChart({ reviews }) {
  const data = [];
  const grouped = {};

  reviews.forEach(r => {
    if (!grouped[r.property]) grouped[r.property] = { count: 0, sum: 0 };
    grouped[r.property].count += 1;
    grouped[r.property].sum += r.rating;
  });

  for (let prop in grouped) {
    data.push({
      property: prop,
      avg: grouped[prop].sum / grouped[prop].count,
    });
  }

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Per Property Performance</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="property" />
          <YAxis domain={[0, 10]} />
          <Tooltip />
          <Bar dataKey="avg" fill="#124A45" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
