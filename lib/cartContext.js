import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "tt-cart";

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch (e) {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {}
  }, [items]);

  const add = (book, qty = 1) => {
    setItems((cur) => {
      const found = cur.find((i) => i.id === book.id);
      if (found)
        return cur.map((i) =>
          i.id === book.id ? { ...i, qty: i.qty + qty } : i
        );
      return [...cur, { ...book, qty }];
    });
  };

  const remove = (id) => setItems((cur) => cur.filter((i) => i.id !== id));
  const updateQty = (id, qty) =>
    setItems((cur) => cur.map((i) => (i.id === id ? { ...i, qty } : i)));
  const clear = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, add, remove, updateQty, clear }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
