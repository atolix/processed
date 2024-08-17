import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "processed" ?? "",
  apiKey: process.env.API_KEY ?? "",
})
