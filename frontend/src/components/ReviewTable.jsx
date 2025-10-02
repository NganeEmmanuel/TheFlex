import { FaCheckCircle, FaTimesCircle, FaUndo } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export default function ReviewTable({ reviews, activeTab, selected, setSelected, setReviews }) {
  const headerCheckboxRef = useRef(null);
  const [hoveredId, setHoveredId] = useState(null); // track which row is hovered

  // Update header checkbox indeterminate state
  useEffect(() => {
    if (!headerCheckboxRef.current) return;
    if (selected.length === 0) {
      headerCheckboxRef.current.indeterminate = false;
      headerCheckboxRef.current.checked = false;
    } else if (selected.length === reviews.length) {
      headerCheckboxRef.current.indeterminate = false;
      headerCheckboxRef.current.checked = true;
    } else {
      headerCheckboxRef.current.indeterminate = true;
    }
  }, [selected, reviews]);

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selected.length === reviews.length) {
      setSelected([]);
    } else {
      setSelected(reviews.map((r) => r.id));
    }
  };

  const handleAction = (id, action) => {
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: action } : r))
    );
  };

  return (
    <div className="overflow-x-auto rounded-lg shadow bg-white text-[#123730] relative">
      <table className="w-full text-sm overflow-visible">
        <thead className="bg-white text-left">
          <tr>
            <th className="p-3">
              <input
                type="checkbox"
                ref={headerCheckboxRef}
                onChange={toggleSelectAll}
              />
            </th>
            <th className="p-3">Date</th>
            <th className="p-3">Guest</th>
            <th className="p-3">Property</th>
            <th className="p-3">Rating</th>
            <th className="p-3">Review</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody className="overflow-visible">
          {reviews.map((r) => (
            <tr
              key={r.id}
              className="border-t border-gray-700 hover:bg-green-400/10 relative"
            >
              <td className="p-3">
                <input
                  type="checkbox"
                  checked={selected.includes(r.id)}
                  onChange={() => toggleSelect(r.id)}
                />
              </td>
              <td className="p-3">{r.submittedAt}</td>
              <td className="p-3">{r.guest}</td>
              <td className="p-3">{r.property}</td>
              <td className="p-3">{r.rating ?? "N/A"}</td>

              {/* Review text with hover tooltip */}
              <td
                className="p-3 truncate max-w-xs cursor-pointer relative"
                onMouseEnter={() => setHoveredId(r.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {r.text}
                {hoveredId === r.id && (
                  <div className="absolute left-0 top-full mt-1 w-72 bg-white border border-gray-300 shadow-lg rounded p-2 text-sm z-50 whitespace-normal">
                    {r.text}
                  </div>
                )}
              </td>


              <td className="p-3 flex gap-2">
                {activeTab === "new" && (
                  <>
                    <FaCheckCircle
                      className="text-green-500 cursor-pointer"
                      onClick={() => handleAction(r.id, "approved")}
                    />
                    <FaTimesCircle
                      className="text-red-500 cursor-pointer"
                      onClick={() => handleAction(r.id, "declined")}
                    />
                  </>
                )}
                {activeTab === "accepted" && (
                  <>
                    <FaUndo
                      className="text-gray-400 cursor-pointer"
                      onClick={() => handleAction(r.id, "published")}
                    />
                    <FaTimesCircle
                      className="text-red-500 cursor-pointer"
                      onClick={() => handleAction(r.id, "declined")}
                    />
                  </>
                )}
                {activeTab === "declined" && (
                  <>
                    <FaCheckCircle
                      className="text-green-500 cursor-pointer"
                      onClick={() => handleAction(r.id, "approved")}
                    />
                    <FaUndo
                      className="text-gray-400 cursor-pointer"
                      onClick={() => handleAction(r.id, "published")}
                    />
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
