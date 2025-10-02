export default function ReviewCard({ review }) {
  return (
    <div className="p-4 border rounded-lg shadow">
      <p className="font-semibold">{review.guest}</p>
      <p className="italic">{review.text}</p>
      <p className="text-sm text-gray-500">Rating: {review.rating ?? "N/A"}</p>
    </div>
  );
}
