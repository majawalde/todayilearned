import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://szmvziunffxuejmzrtue.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6bXZ6aXVuZmZ4dWVqbXpydHVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk0MjU1MDIsImV4cCI6MjAwNTAwMTUwMn0.4U_jfaOSQe4gJhZEXtVsPRztMG_Opkbta50VeZX1AM4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
