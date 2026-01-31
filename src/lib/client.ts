import { treaty } from "@elysiajs/eden";
import type { app } from "../app/api/[[...slugs]]/route";

const baseUrl =
  typeof window === "undefined"
    ? process.env.NEXT_PUBLIC_BASE_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
    : window.location.origin;

// .api to enter /api prefix
export const client = treaty<typeof app>(baseUrl).api;
