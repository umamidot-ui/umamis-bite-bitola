import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Product } from "@/lib/catalog";

export type CartLine = { key: string; product: Product; quantity: number; addOns: { id: string; label: string; price: number }[] };
type CartContextValue = { lines: CartLine[]; count: number; total: number; addItem: (product: Product, quantity?: number, addOns?: CartLine["addOns"]) => void; updateQuantity: (key: string, quantity: number) => void; removeItem: (key: string) => void };
const CartContext = createContext<CartContextValue | undefined>(undefined);
const STORAGE_KEY = "umami-stage-one-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);
  useEffect(() => { try { const saved = sessionStorage.getItem(STORAGE_KEY); if (saved) setLines(JSON.parse(saved) as CartLine[]); } catch { /* session storage can be unavailable */ } setReady(true); }, []);
  useEffect(() => { if (ready) sessionStorage.setItem(STORAGE_KEY, JSON.stringify(lines)); }, [lines, ready]);
  const addItem = (product: Product, quantity = 1, selected: CartLine["addOns"] = []) => {
    const key = `${product.id}:${selected.map((a) => a.id).sort().join(",")}`;
    setLines((current) => current.some((line) => line.key === key) ? current.map((line) => line.key === key ? { ...line, quantity: line.quantity + quantity } : line) : [...current, { key, product, quantity, addOns: selected }]);
  };
  const updateQuantity = (key: string, quantity: number) => setLines((current) => quantity < 1 ? current.filter((line) => line.key !== key) : current.map((line) => line.key === key ? { ...line, quantity } : line));
  const removeItem = (key: string) => setLines((current) => current.filter((line) => line.key !== key));
  const value = useMemo(() => ({ lines, count: lines.reduce((sum, line) => sum + line.quantity, 0), total: lines.reduce((sum, line) => sum + (line.product.price + line.addOns.reduce((n, a) => n + a.price, 0)) * line.quantity, 0), addItem, updateQuantity, removeItem }), [lines]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() { const value = useContext(CartContext); if (!value) throw new Error("useCart must be used inside CartProvider"); return value; }
