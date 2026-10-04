import categorySheet from "@/assets/category-sheet.jpg";
import productSheet1 from "@/assets/product-sheet-1.jpg";
import productSheet2 from "@/assets/product-sheet-2.jpg";

export type CategorySlug = "sushi" | "burritos" | "salads" | "bowls" | "quesadillas";

export type Product = {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  category: CategorySlug;
  categoryLabel: string;
  bestseller?: boolean;
  image: string;
  imagePosition: string;
};

// Stage 1 demo catalog. Replace this module's exports with cloud-backed data in Stage 2.
export const products: Product[] = [
  { id: "chipotle-chicken-burrito", name: "Chipotle Chicken Burrito", description: "Пилешко, ориз, зеленчук и chipotle сос.", ingredients: ["Пилешко", "басмати ориз", "црн грав", "пченка", "гвакамоле", "chipotle сос"], price: 390, category: "burritos", categoryLabel: "Бурито", bestseller: true, image: productSheet1, imagePosition: "0% 0%" },
  { id: "wasabi-burrito", name: "Wasabi Burrito", description: "Пилешко, авокадо, wasabi мајонез и свеж зеленчук.", ingredients: ["Пилешко", "ориз", "авокадо", "зелка", "морков", "wasabi мајонез"], price: 410, category: "burritos", categoryLabel: "Бурито", bestseller: true, image: productSheet1, imagePosition: "100% 0%" },
  { id: "asian-salad", name: "Asian Salad", description: "Крцкав зеленчук, едамаме, сусам и citrus дресинг.", ingredients: ["Зелена салата", "зелка", "морков", "едамаме", "сусам", "citrus дресинг"], price: 310, category: "salads", categoryLabel: "Салата", image: productSheet1, imagePosition: "0% 100%" },
  { id: "chipotle-bowl", name: "Chipotle Bowl", description: "Пилешко, ориз, грав, пченка и свежо гвакамоле.", ingredients: ["Пилешко", "ориз", "црн грав", "пченка", "салса", "гвакамоле"], price: 420, category: "bowls", categoryLabel: "Bowl", bestseller: true, image: productSheet1, imagePosition: "100% 100%" },
  { id: "teriyaki-bowl", name: "Teriyaki Bowl", description: "Лосос, ориз, едамаме и teriyaki глазура.", ingredients: ["Лосос", "ориз", "едамаме", "краставица", "авокадо", "teriyaki"], price: 450, category: "bowls", categoryLabel: "Bowl", image: productSheet2, imagePosition: "0% 0%" },
  { id: "tre-formaggi-quesadilla", name: "Tre Formaggi Quesadilla", description: "Три вида сирење, пченка и свежа доматна салса.", ingredients: ["Тортиља", "моцарела", "чедар", "гауда", "пченка", "салса"], price: 340, category: "quesadillas", categoryLabel: "Quesadilla", image: productSheet2, imagePosition: "100% 0%" },
  { id: "summer-rolls", name: "Summer Rolls", description: "Оризова хартија, ракчиња, зеленчук и кикирики сос.", ingredients: ["Ракчиња", "оризови нудли", "краставица", "морков", "нане", "кикирики сос"], price: 290, category: "salads", categoryLabel: "Summer Rolls", image: productSheet2, imagePosition: "0% 100%" },
  { id: "salmon-avocado-roll", name: "Salmon Avocado Roll", description: "Свеж лосос, авокадо, ориз и препечен сусам.", ingredients: ["Лосос", "авокадо", "суши ориз", "нори", "сусам"], price: 430, category: "sushi", categoryLabel: "Суши", bestseller: true, image: productSheet2, imagePosition: "100% 100%" },
];

export const categories = [
  { slug: "sushi" as const, label: "Суши", count: 18, image: categorySheet, imagePosition: "0% 0%" },
  { slug: "burritos" as const, label: "Бурито", count: 12, image: categorySheet, imagePosition: "100% 0%" },
  { slug: "bowls" as const, label: "Bowls", count: 9, image: categorySheet, imagePosition: "0% 100%" },
  { slug: "salads" as const, label: "Салати", count: 7, image: categorySheet, imagePosition: "100% 100%" },
  { slug: "quesadillas" as const, label: "Quesadillas", count: 6, image: productSheet2, imagePosition: "100% 0%" },
];

export const addOns = [
  { id: "extra-cheese", label: "Екстра сирење", price: 30 },
  { id: "guacamole", label: "Гвакамоле", price: 50 },
  { id: "extra-chicken", label: "Екстра пилешко", price: 80 },
];

export const formatPrice = (price: number) => `${price.toLocaleString("mk-MK")} ден`;
