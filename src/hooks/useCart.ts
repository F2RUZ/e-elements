"use client";

import { useState, useEffect } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const addItem = (item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      let newItems;
      if (existing) {
        newItems = prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      } else {
        newItems = [...prev, { ...item, quantity: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(newItems));
      return newItems;
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => {
      const newItems = prev.filter((i) => i.id !== id);
      localStorage.setItem("cart", JSON.stringify(newItems));
      return newItems;
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    setItems((prev) => {
      const newItems = prev.map((i) => (i.id === id ? { ...i, quantity } : i));
      localStorage.setItem("cart", JSON.stringify(newItems));
      return newItems;
    });
  };

  const clearCart = () => {
    setItems([]);
    localStorage.removeItem("cart");
  };

  return {
    items,
    totalItems,
    totalPrice,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };
}
