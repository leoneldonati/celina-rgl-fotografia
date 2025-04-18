import { useCartStore } from "@stores/cart";
import toast from "react-hot-toast";

interface Props {
  product: Product;
}
export default function AddToCartButton({ product }: Props) {
  const { addOne, findById } = useCartStore();

  return (
    <button
      className="px-4 py-2 rounded-md bg-brand-1 text-white font-bold"
      onClick={() => {
        if (!findById(product._id)) {
          toast.success(`${product.name} añadido al carro!`);
        }

        if (findById(product._id)) {
          toast.success(`${product.name} quitado del carro!`);
        }
        addOne({ ...product, quantity: 1 });
      }}
    >
      {findById(product._id) ? "QUITAR DEL CARRO" : "AÑADIR AL CARRO"}
    </button>
  );
}
