import React from "react";
import { FiMaximize2 } from "react-icons/fi"; // Expand-style icon

export default function ImageGallery({ images }) {
  if (!images || images.length < 5) return null;

  return (
    <section className="h-[82vh] w-full overflow-hidden">
      <div className="flex flex-col md:flex-row h-full gap-4 p-2 md:p-4">
        {/* Left: Large image */}
        <div className="md:w-1/2 h-1/2 md:h-full">
          <img
            src={images[0]}
            alt="Main property view"
            className="rounded-l-xl w-full h-full object-cover shadow-sm"
          />
        </div>

        {/* Right: 2x2 grid */}
        <div className="md:w-1/2 grid grid-cols-2 grid-rows-2 gap-4 h-1/2 md:h-full">
          {images.slice(1, 5).map((img, i) => {
            const isLast = i === 3;
            return (
              <div key={i} className="relative h-full">
                <img
                  src={img}
                  alt={`Property image ${i + 2}`}
                  className=" w-full h-full object-cover shadow-sm"
                />
                {isLast && (
                  <button
                    className="absolute bottom-3 right-3 bg-white text-gray-800 px-3 py-1.5 rounded-md shadow-md flex items-center gap-2 hover:bg-gray-100 transition"
                    onClick={() => console.log("Open gallery")}
                  >
                    <FiMaximize2 className="text-lg" />
                    <span className="text-sm font-medium">View all photos</span>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
