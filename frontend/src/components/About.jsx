import React, { useState } from "react";
import Separator from "./Separator";

export default function About({ description }) {
  const [expanded, setExpanded] = useState(false);

  // Truncate logic
  const shouldTruncate = description.length > 300;
  const previewText = description.slice(0, 300) + "...";

  return (
    <section className="mt-10 space-y-4 bg-white rounded-lg shadow-lg p-5">
      <h2 className="text-2xl font-semibold text-gray-900">About this property</h2>
      <Separator className="my-2" />

      <div className="text-gray-700 leading-relaxed text-[15px] whitespace-pre-line">
        {expanded || !shouldTruncate ? description : previewText}
      </div>

      {shouldTruncate && (
        <button
          onClick={() => setExpanded(prev => !prev)}
          className="text-grey-500 text-sm font-small hover:text-[#123730] cursor-pointer transition"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </section>
  );
}
