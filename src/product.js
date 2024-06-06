class Product {
    #subTotal
    #quantityInBasket
    #stock


  constructor(name, price, description, stock) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.#stock = stock;
    this.#quantityInBasket = 0;
    this.#subTotal = 0
  }

  reduceStock(quantity) {
    this.#stock -= quantity;
  }

  hasStock() {
    return this.#stock > 0;
  }

  increaseQuantityInBasket(quantity) {
    this.#quantityInBasket += quantity;
  }

  isInBasket() {
    return this.#quantityInBasket > 0;
  }

  updateSubTotal() {
    this.#subTotal = this.quantityInBasket * this.price
  }

  getInfo() {
    return `${this.name} - ${this.description} - £${this.price}`
  }

  get quantityInBasket() {
    return this.#quantityInBasket
  }

  get subTotal() {
    return structuredClone(this.#subTotal)
  }

}

export default Product;
