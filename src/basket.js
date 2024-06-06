import Order from './order.js'

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
    if (!product.isInBasket()) {
      this.#contents.push(product);
    }
    product.increaseQuantityInBasket(1);
    product.reduceStock(1);
    product.updateSubTotal()
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

  getOrder() {
    const thisOrder = new Order
    return thisOrder.generateOrder([...this.#contents])
  }

  get productsAdded() {
    return this.#productsAdded;
  }

  get contents() {
    return [...this.#contents];
  }
}


export default Basket;
