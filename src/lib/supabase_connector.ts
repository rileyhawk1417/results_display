import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase";
const dbUrl = process.env.DB_URL as string;
const dbKey = process.env.DB_KEY as string;
const supabase = createClient(
  dbUrl,
  dbKey,
  {
    auth: { persistSession: false },
  },
);
export default supabase;
