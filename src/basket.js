class Basket {
  #contents;

  constructor() {
    this.#contents = [];
  }

  addProduct(product) {
    if (!product.hasStock()) {
      throw new Error("No stock");
    }
    this.#contents.push(product);
    product.reduceStockByOne();
  }

  get contents() {
    return [...this.#contents];
  }
}

export default Basket;
