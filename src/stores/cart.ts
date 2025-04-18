import { create } from "zustand";
import { persist } from "zustand/middleware";
interface CartStore {
  list: ProductInCart[];
  getLength: () => number;
  getProductCount: (id: string) => number;
  action: (id: string, op: (quantity: number) => number) => void;
  addOne: (product: ProductInCart) => void;
  findById: (id: string) => boolean;
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
        const { list, findById } = get();

        if (findById(prod._id)) {
          const filtered = list.filter((p) => p._id !== prod._id);

          set({ list: filtered });

          return;
        }
        const newList = [prod, ...list];

        set({ list: newList });
      },
      findById: (id) => {
        const { list } = get();

        return list.find((prod) => prod._id === id) !== undefined;
      },
    }),
    { name: "rgl-cart" }
  )
);
