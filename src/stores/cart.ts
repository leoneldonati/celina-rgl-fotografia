import { create } from "zustand";
import { persist } from "zustand/middleware";
interface CartStore {
  list: ProductInCart[];
  getLength: () => number;
  getProductCount: (id: string) => number;
  action: (id: string, op: (quantity: number) => number) => void;
  addOne: (product: ProductInCart) => void;
}
export const useCartStore = create(
  persist<CartStore>(
    (set, get) => ({
      list: [],
      getLength: () => get().list.length,
      getProductCount: (id) => {
        const { list } = get();

        const prod = list.find((prod) => prod._id === id);

        if (!prod) return 0;

        return prod.quantity;
      },
      action: (id, op) => {
        const { list } = get();

        const updatedList = list.map((prod) => {
          if (prod._id === id) {
            const operation = op(prod?.quantity ?? 0);

            const updatedProd = { ...prod, quantity: operation };

            return updatedProd;
          }
          return prod;
        });

        set({ list: updatedList });
      },
      addOne: (prod) => {
        const { list } = get();

        const newList = [prod, ...list];

        set({ list: newList });
      },
    }),
    { name: "rgl-cart" }
  )
);
