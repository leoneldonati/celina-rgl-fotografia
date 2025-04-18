import { useCartStore } from "@stores/cart";
import MinusIcon from "@assets/svg/minus.svg";
import PlusIcon from "@assets/svg/plus.svg";
interface Props {
  prodId: string;
}
export default function Counter({ prodId }: Props) {
  const { getProductCount, action } = useCartStore();

  const handleSum = () => action(prodId, (q) => q + 1);
  const handleQuite = () => action(prodId, (q) => q - 1);
  return (
    <div className="flex flex-col items-center">
      <span>{getProductCount(prodId)}</span>

      <div className="flex items-center gap-2 [&>button:hover]:scale-105 [&>button:active]:scale-95">
        <button onClick={handleQuite}>
          <img src={MinusIcon.src} />
        </button>
        <button onClick={handleSum}>
          <img src={PlusIcon.src} />
        </button>
      </div>
    </div>
  );
}
