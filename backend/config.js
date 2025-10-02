// config.js
import dotenv from "dotenv";
dotenv.config();

export const HOSTAWAY_BASE_URL = "https://api.hostaway.com/v1";
export const ACCOUNT_ID = process.env.HOSTAWAY_ACCOUNT_ID;
export const CLIENT_SECRET = process.env.HOSTAWAY_CLIENT_SECRET;

console.log("ENV loaded:", process.env.HOSTAWAY_ACCOUNT_ID, process.env.HOSTAWAY_CLIENT_SECRET);

