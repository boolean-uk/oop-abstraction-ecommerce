import { store } from "./store.js";

export default class Basket {
  #basket;

  constructor() {
    this.#basket = [];
  }

  add(id) {
    this.#basket.push(store.findProduct(store.products, id));
  }

  remove(id) {
    this.#basket = this.#basket.filter(
      (product) => product.id !== store.findProduct(this.#basket, id).id
    );
  }

  get basket() {
    return structuredClone(this.#basket);
  }

  getDetails(id) {
    return store.getDetails(id);
  }
}
