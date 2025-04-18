const createMessage = (products: ProductInCart[]) => {
  const finalPrice = products.reduce(
    (acc, value) => acc + value.price * value.quantity,
    0
  );
  const productNames = products
    .map((prod) => `${prod.name} ${prod.quantity}`)
    .join("\n");

  const message = `
    Hola Celina! 📷. \n
    *Quiero realizar este pedido:*
    _${productNames}_ \n
    *PRECIO FINAL: $${finalPrice}*
    ¡Muchas gracias!
  `;

  return encodeURIComponent(message);
};

export { createMessage };
