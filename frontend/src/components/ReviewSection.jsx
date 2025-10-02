import React from "react";
import { FiStar } from "react-icons/fi";
import ReviewCard from "./PublicReviewCard";

export default function ReviewSection({ reviews, averageRating, totalReviews }) {
  return (
    <section className="mt-10 px-4 space-y-6 bg-white p-3 shadow-lg rounded-lg">
      {/* Section Title */}
      <h2 className="text-xl font-semibold text-[#123730]">Guest Reviews</h2>

      {/* Rating Summary + CTA */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[#284e4c] font-medium">
          <div className="bg-[#284e4c] text-white rounded-full w-6 h-6 flex items-center justify-center">
            <FiStar className="text-sm" />
          </div>
          <span>{averageRating} • {totalReviews} reviews</span>
        </div>
        <button className="text-sm border border-[#284e4c] cursor-pointer text-[#284e4c] px-3 py-1 rounded-md hover:bg-[#f2f7f6] transition">
          Write a review
        </button>
      </div>

      {/* Review Cards */}
      <div className="space-y-4">
        {reviews.map((r, i) => (
          <ReviewCard
            key={i}
            name={r.name}
            date={r.date}
            rating={r.rating}
            text={r.text}
            avatar={r.avatar}
          />
        ))}
      </div>

      {/* View All Link */}
      <div>
        <button className="text-sm text-[#284e4c] hover:underline font-medium">
          View all {totalReviews} reviews
        </button>
      </div>
    </section>
  );
}
