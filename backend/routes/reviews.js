import express from "express";
import fs from "fs";
import { fetchReviews } from "../services/hostawayService.js";

const router = express.Router();
let mockReviews = JSON.parse(fs.readFileSync("./reviews.json", "utf8"));

// Normalize
function normalizeReviews(data) {
  return data.map(r => ({
    id: r.id,
    status: r.status,
    property: r.listingName,
    guest: r.guestName,
    rating: r.rating ?? null,
    categories: r.reviewCategory || [],
    channel: r.type,
    text: r.publicReview,
    submittedAt: r.submittedAt,
    approved: r.approved || false,
  }));
}

// GET reviews
router.get("/hostaway", async (req, res) => {
  try {
    const reviews = await fetchReviews();
    let normalized = normalizeReviews(reviews);

    // filters
    const { rating, channel } = req.query;
    if (rating) normalized = normalized.filter(r => r.rating >= parseInt(rating));
    if (channel) normalized = normalized.filter(r => r.channel === channel);

    res.json(normalized.length ? normalized : normalizeReviews(mockReviews));
  } catch {
    res.json(normalizeReviews(mockReviews)); // fallback
  }
});


router.get("/public", async (req, res) => {
  try {
    const reviews = await fetchReviews();
    let normalized = normalizeReviews(reviews);

    // filters
    const { rating, channel } = req.query;
    if (rating) normalized = normalized.filter(r => r.rating >= parseInt(rating));
    if (channel) normalized = normalized.filter(r => r.channel === channel);
    if(normalized.length){
        let approvedReviews = normalized.filter(r => r.status === "approved");
        res.json(approvedReviews);
    }
    normalized = normalizeReviews(mockReviews)
    console.log(normalized)
    let approvedReviews = normalized.filter(r => r.status === "approved");
    res.json(approvedReviews);
  } catch {
    let normalized = normalizeReviews(mockReviews)
    let approvedReviews = normalized.filter(r => r.status === "approved");
    res.json(approvedReviews);
  }
});

// PATCH approve toggle
router.patch("/:id/approve", (req, res) => {
  const { id } = req.params;
  const idx = mockReviews.findIndex(r => r.id == id);
  if (idx === -1) return res.status(404).json({ error: "Review not found" });

  mockReviews[idx].approved = !mockReviews[idx].approved;
  res.json({ success: true, review: mockReviews[idx] });
});

export default router;
