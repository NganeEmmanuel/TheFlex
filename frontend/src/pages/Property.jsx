import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { publicGetReviews } from "../api/api";
import Layout from "../components/Layout";
import ImageGallery from "../components/ImageGallery";
import PropertySummary from "../components/PropertySummary";
import StickyBookingSidebar from "../components/StickyBookingSidebar";
import Amenities from "../components/Amenities";
import StayPolicies from "../components/StayPolicies";
import LocationMap from "../components/LocationMap";
import Separator from "../components/Separator";
import Img1 from "../assets/img1.jpeg"
import Img2 from "../assets/img2.jpeg"
import Img3 from "../assets/img3.jpeg"
import Img4 from "../assets/img4.jpeg"
import Img5 from "../assets/img5.jpeg"
import About from "../components/About";
import ReviewSection from "../components/ReviewSection";

export default function Property() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  const mockData = {
  title: "Peaceful 2 Bed Flat in Islington",
  guests: 5,
  bedrooms: 2,
  beds: 3,
  bathrooms: 1,
  description:
    `
Located in vibrant Islington, this apartment gives you the perfect spot to enjoy all that London has to offer. The space is roomy and well-lit, with everything you’ll need for a comfortable stay.

From the cozy bedrooms to the fully-equipped kitchen, I’ve paid attention to all the details to ensure you have a great experience. The area is well-connected, with plenty of local attractions and easy transport options nearby. You’ll love the peaceful feel of the apartment with the convenience of being close to the action.

Your comfort is really important to me, so if there's anything you need or If I can help with anything, just let me know - I'm always happy to assist!

Located in the heart of Islington, you’ll find yourself in one of London’s most sought-after areas. The neighborhood has everything you need – from fantastic dining options to quirky shops and cozy pubs. You’re also close to transport links, making it easy to get around the city. Whether you’re strolling along Upper Street or exploring nearby green spaces, there’s always something happening here. I’ve always enjoyed how central and lively the area feels, but still with a relaxed, friendly atmosphere. It’s a great place to call home during your stay!

Alcedo Bistro & Bar - 9 minute walk
Amor Gastronomia - 11 minute walk
Holloway Road Station (Stop SY) - 8 minute walk
    `,
  images: [Img1, Img2, Img3, Img4, Img5],
  amenities: ["Cable TV", "Kitchen", "Washing Machine", "Internet", "Elevator", "Hair Dryer", "Heating", "Wireless", "Smoke Detector" ],
};

  useEffect(() => {
    const loadReviews = async () => {
      const reviews = await publicGetReviews();
      setReviews(reviews);
    };
    loadReviews();
  }, []);


  return (
    <Layout>
      <div className="p-6 px-35 bg-[#fffdf6]">
        <ImageGallery images={mockData.images} />
        <PropertySummary
              title={mockData.title}
              guests={mockData.guests}
              bedrooms={mockData.bedrooms}
              bathrooms={mockData.bathrooms}
              beds={mockData.beds}
            />
            <Separator />
        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          <div className="flex-1 space-y-6">
            <About description={mockData.description}/>
            <Amenities amenities={mockData.amenities} />
            <StayPolicies />
            <LocationMap />
            <ReviewSection
              reviews={reviews.map(r => ({
                name: r.guest,
                date: new Date(r.submittedAt).toLocaleDateString(),
                rating: Math.round(r.rating / 2), // Hostaway uses 10-point scale, you want 5 stars
                text: r.text,
                avatar: null // if Hostaway gives avatars, map here
              }))}
              averageRating={(reviews.reduce((a, b) => a + b.rating, 0) / reviews.length).toFixed(1)}
              totalReviews={reviews.length}
            />

            {/* <ReviewSection reviews={sampleReviews} averageRating={4.8} totalReviews={128} /> */}
          </div>
          <div className="lg:w-1/3">
            <StickyBookingSidebar />
          </div>
        </div>
        {/* <div className="grid gap-4">
          {reviews.length === 0 ? (
            <p>No approved reviews yet.</p>
          ) : (
            reviews.map(r => <ReviewCard key={r.id} review={r} />)
          )}
        </div> */}
      </div>
    </Layout>
  );
}
