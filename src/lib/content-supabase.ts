import { createClient } from "@supabase/supabase-js";

// Separate Supabase project — marketing/blog content only.
// Do NOT import this alongside `./supabase` (the patient-data client) in the
// same file, and never import `./supabase` from a blog route.
const contentSupabaseUrl = import.meta.env.VITE_CONTENT_SUPABASE_URL;
const contentSupabaseAnonKey = import.meta.env.VITE_CONTENT_SUPABASE_ANON_KEY;

export const contentSupabase = createClient(contentSupabaseUrl, contentSupabaseAnonKey);
