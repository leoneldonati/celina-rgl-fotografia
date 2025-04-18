interface Product {
  _id: string;
  name: string;
  price: number;
  size: string;
  brightness: string;
  description: string;
}

interface ProductInCart extends Product {
  quantity: number;
}
