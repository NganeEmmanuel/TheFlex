import React from "react";

export default function LocationMap() {
  return (
    <section className="mt-8 shadow-lg p-5 bg-white rounded-lg">
      <h1 className="text-xl font-bold mb-4 py-3">Location</h1>
      <div className="rounded overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!..."
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Property Location"
        ></iframe>
      </div>
    </section>
  );
}
