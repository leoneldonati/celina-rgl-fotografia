import { useCartStore } from "@stores/cart";

interface Props {
  product: Product;
}
export default function AddToCartButton({ product }: Props) {
  const { addOne } = useCartStore();

  return (
    <button
      className="px-4 py-2 rounded-md bg-brand-1 text-white font-bold"
      onClick={() => addOne({ ...product, quantity: 1 })}
    >
      AÑADIR AL CARRO
    </button>
  );
}
