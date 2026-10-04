import { supabase } from "@/lib/supabase";
import type { Category } from "./catalog-types";
export async function getCategories(): Promise<Category[]> { const { data, error } = await supabase.from("categories").select("id,name_mk,name_en,slug,description_mk,image_url,sort_order").eq("active", true).order("sort_order"); if (error) throw error; return data; }
