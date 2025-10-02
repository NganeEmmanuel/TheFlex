import axios from "axios";
import fs from "fs";
import { HOSTAWAY_BASE_URL, ACCOUNT_ID, CLIENT_SECRET } from "../config.js";

let accessToken = null;
let tokenExpiry = null;

// Authenticate and store token
async function authenticate() {
  try {
    console.log("ACCOUNT_ID: ", ACCOUNT_ID)
    const data = `grant_type=client_credentials&client_id=${ACCOUNT_ID}&client_secret=${CLIENT_SECRET}&scope=general`;

    const res = await axios.post(`${HOSTAWAY_BASE_URL}/accessTokens`, data, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    accessToken = res.data.access_token;
    tokenExpiry = Date.now() + res.data.expires_in * 1000;

    console.log("✅ Hostaway authenticated, token acquired");
    return accessToken;
  } catch (err) {
    console.error("❌ Hostaway auth failed:", err.message);
    throw err;
  }
}

// Get valid token (refresh if expired)
async function getToken() {
  if (!accessToken || Date.now() > tokenExpiry) {
    return await authenticate();
  }
  return accessToken;
}

// Fetch reviews
export async function fetchReviews() {
  try {
    const token = await getToken();

    const res = await axios.get(`${HOSTAWAY_BASE_URL}/reviews`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Cache-Control": "no-cache",
      },
    });

    return res.data.result || [];
  } catch (err) {
    console.error("⚠️ Failed to fetch Hostaway reviews:", err.message);
    throw err;
  }
}


