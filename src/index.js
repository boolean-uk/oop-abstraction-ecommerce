import { store } from "./store.js";

export default class Basket {
  #basket;

  constructor() {
    this.#basket = [];
  }

  add(id) {
    this.#basket.push(store.findProduct(id));
  }

  remove(id) {
    this.#basket = this.#basket.filter(
      (product) => product.id !== this.findProduct(id).id
    );
  }

  get basket() {
    return structuredClone(this.#basket);
  }

  getDetails(id) {
    return store.getDetails(id);
  }

  findProduct(id) {
    const product = this.#basket.find((product) => product.id === Number(id));

    if (!product) throw new Error(`The product with ID ${id} is not found!`);

    return product;
  }
}
