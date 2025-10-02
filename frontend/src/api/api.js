import axios from "axios";
import { data } from "react-router-dom";

const API_URL = "https://theflex.onrender.com/api";

export const getReviews = async () => {
  const res = await axios.get(`${API_URL}/reviews/hostaway`);
  return res.data;
};

export const publicGetReviews = async () => {
  const res = await axios.get(`${API_URL}/reviews/public`);
  return res.data;
};

export const toggleApprove = async (id) => {
  const res = await axios.patch(`${API_URL}/reviews/${id}/approve`);
  return res.data.review;
};
