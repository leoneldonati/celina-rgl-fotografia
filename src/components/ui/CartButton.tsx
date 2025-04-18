import ShoppingCart from "@assets/svg/shopping-cart.svg";
import { useCartStore } from "@stores/cart";
export default function CartButton() {
  const { getLength } = useCartStore();
  return (
    <a href="/cart" className="flex items-center gap-1 p-1 rounded-full">
      <img src={ShoppingCart.src} />
      <span>{getLength()}</span>
    </a>
  );
}
