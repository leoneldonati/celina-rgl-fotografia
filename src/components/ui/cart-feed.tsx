import { PHONE_NUMBER } from "@constants";
import { useCartStore } from "@stores/cart";
import { createMessage } from "@utils/msg";

export default function CartFeed() {
  const { list, getLength, getFinalPrice, quiteOne } = useCartStore();
  return (
    <section>
      <div className="flex items-center justify-center gap-4">
        <p>
          <strong>{getLength()}</strong> productos.
        </p>

        <strong>${getFinalPrice()}</strong>
        <a
          href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${createMessage(
            list
          )}`}
          hidden={getLength() === 0}
          className="transition-colors hover:bg-brand-1 hover:text-white hover:font-bold px-4 py-2 rounded-md outline outline-brand-1"
        >
          Enviar pedido
        </a>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {list.map((prod) => (
          <article key={prod._id} className="flex flex-col gap-2">
            <img
              src={`/products/${prod.assetPath}`}
              alt={prod.description}
              loading="lazy"
              className="aspect-square object-cover rounded "
            />
            <p className="text-2xl">{prod.name}</p>

            <strong>Cantidad: {prod.quantity}</strong>

            <strong>Precio: ${prod.price}</strong>

            <button
              onClick={() => quiteOne(prod._id)}
              className="bg-brand-1 px-4 py-2 rounded-md font-bold text-white"
            >
              QUITAR DEL CARRO
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
