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


class Order {
    constructor() {
        this.order = []
        this.orderTotal = 0
    }

    generateOrder(basketContents) {
        basketContents.forEach((item) => {
            let line = new OrderLine(item.name, item.quantityInBasket, item.subTotal)
            this.orderTotal += item.subTotal
            this.order.push(line)
        })

        this.order.push(this.orderTotal)
        return this.order
    }
}

class OrderLine {

    constructor(productName, quantity, subTotal) {
        this.productName = productName
        this.quantity = quantity
        this.subTotal = subTotal
    }
}

export default Basket;
