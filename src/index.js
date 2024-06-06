import ProductList from "./productList.js"

class Basket {
  #basket;
  constructor() {
    this.#basket = [];
  }

  add(product) {
    this.#basket.push(product);
  }

  remove(product) {
    if (!this.find(product)) {
      throw "Product cannot be removed, product not found";
    }
    const index = this.#basket.indexOf(product);
    const newBasket = this.#basket.splice(index, 1);
    return newBasket;
  }

  find(product) {
    const found = this.#basket.find((p) => p.name === product.name);
    if (!found) {
      throw "Product not found";
    }
    return found;
  }

  get basket() {
    return [...this.#basket];
  }
}

export default Basket

const productList = new ProductList()
const watch = productList.getProduct('Garmin')
const basket = new Basket();
basket.add(watch)
basket.remove(watch)


