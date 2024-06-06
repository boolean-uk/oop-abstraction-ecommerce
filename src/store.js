import Product from "./product.js";

export default class Store {
  #id;
  #products;

  constructor() {
    this.#id = 0;
    this.#products = [];
  }

  addProduct(name, price, description) {
    this.#id++;
    this.#products.push(new Product(name, price, description, this.#id));
  }

  removeProduct(id) {
    this.#products = this.#products.filter(
      (product) => product.id !== this.findProduct(this.#products, id).id
    );
  }

  get products() {
    return structuredClone(this.#products);
  }

  setPrice(id, price) {
    this.findProduct(this.#products, id).setPrice(price);
  }

  getDetails(id) {
    return this.findProduct(this.#products, id).getDetails();
  }

  findProduct(array, id) {
    const product = array.find((product) => product.id === Number(id));

    if (!product) throw new Error(`The product with ID ${id} is not found!`);

    return product;
  }
}

export const store = new Store();
store.addProduct("banana", "0.5", "fresh");
store.addProduct("orange", "0.4", "fresh");
store.addProduct("avocado", "1.3", "fresh");
store.addProduct("banana", "0.35", "fresh");
store.addProduct("mango", "0.9", "fresh");
store.addProduct("grapes", "0.85", "fresh");
