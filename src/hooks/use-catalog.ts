import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/services/categories";
import { getProduct, getProducts, getProductsByIds } from "@/services/products";
import { getProductOptions } from "@/services/options";
export const useCategories=()=>useQuery({queryKey:["categories"],queryFn:getCategories});
export const useProducts=(categorySlug?:string)=>useQuery({queryKey:["products",categorySlug??"all"],queryFn:()=>getProducts(categorySlug)});
export const useProduct=(id:string)=>useQuery({queryKey:["product",id],queryFn:()=>getProduct(id),enabled:Boolean(id)});
export const useProductsByIds=(ids:string[])=>useQuery({queryKey:["products-by-id",...ids.slice().sort()],queryFn:()=>getProductsByIds(ids),enabled:ids.length>0});
export const useProductOptions=(productId:string)=>useQuery({queryKey:["product-options",productId],queryFn:()=>getProductOptions(productId),enabled:Boolean(productId)});