import { config } from "dotenv";
import postgres from "postgres";
import * as schema from "./schema";
import { drizzle } from "drizzle-orm/postgres-js";

config({ path: ".env" });

const dbUrl = process.env.DB_URL;

if (!dbUrl) {
  throw new Error("DB_URL not set");
}

export const client = postgres(dbUrl);

export const db = drizzle(client, { schema });