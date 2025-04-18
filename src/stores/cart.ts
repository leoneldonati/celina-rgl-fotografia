import { create } from "zustand";
import { persist } from "zustand/middleware";
interface CartStore {
  list: ProductInCart[];
  getLength: () => number;
}
export const useCartStore = create(
  persist<CartStore>(
    (set, get) => ({
      list: [],
      getLength: () => get().list.length,
    }),
    { name: "rgl-cart" }
  )
);
