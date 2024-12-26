import { env } from "@/lib/env.mjs";
import { defineConfig } from 'drizzle-kit';


export default defineConfig({
  schema: "./src/db/schema",
  dialect: "turso",
  out: "./src/db/migrations",
  dbCredentials: {
    url: env.DATABASE_URL,
    authToken: env.DATABASE_AUTH_TOKEN,
  }
})