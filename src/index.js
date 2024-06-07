class Basket {
  constructor(products = items) {
    this.products = products;
  }
  addProduct(newItem) {
    this.products.unshift(newItem);
  }
  removeProduct() {
    return items.shift();
  }
  displayProducts() {
    return this.products.map((item) => ({
      name: item.name,
      price: item.price,
      description: item.description,
    }));
  }
}

const items = [
  {
    name: "Avocado",
    price: "50p",
    description: "you either love it or you hate it",
  },
  {
    name: "Ankle Weights",
    price: "20 squid ones",
    description: "lock in",
  },
];

module.exports = Basket;
