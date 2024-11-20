"use client";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qqhbpmldduthzbqzpjyv.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const GetCountries = () => {
  const supabase = createClient(supabaseUrl, supabaseKey);
  const { data: countries } = supabase.from("countries").select("name");
  return <pre>{JSON.stringify(countries, null, 2)}</pre>;
};

export default GetCountries;
