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

  getReceipt() {
    let receipt = ''
    const orderSummary = this.getOrder()
    orderSummary.forEach((line) => {
        if (orderSummary.indexOf(line) === orderSummary.length - 1) {
            receipt += `Total: ${line}\n Telephone: 01818118181 \n Will's Gubbins Shop \n VAT No.: 2534694645`
        } else {
        receipt += `${line.productName} ${line.quantity} ${line.subTotal}\n`
        }
    })
    return receipt
  }

  get productsAdded() {
    return this.#productsAdded;
  }

  get contents() {
    return [...this.#contents];
  }
}




export default Basket;
