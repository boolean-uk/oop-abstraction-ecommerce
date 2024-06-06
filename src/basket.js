class Basket {
  #contents;
  #productsAdded;

  constructor() {
    this.#contents = [];
    this.#productsAdded = 0;
  }

  addProduct(product) {
    if (!product.hasStock()) {
      throw new Error("No stock");
    }
    this.#contents.push(product);
    product.reduceStock(1);
    this.#productsAdded++;
  }

  removeProduct(productName) {
    const productToRemove = this.#contents.find(
      (product) => product.name === productName
    );

    if (!productToRemove) {
      throw new Error("That product is not in the basket");
    }

    const index = this.#contents.indexOf(productToRemove);
    this.#contents.splice(index, 1);
    return productToRemove;
  }

  get productsAdded() {
    return this.#productsAdded;
  }

  get contents() {
    return [...this.#contents];
  }
}

export default Basket;
