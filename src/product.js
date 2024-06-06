export default class Product {
  constructor(name, price, description, id) {
    this.name = String(name);
    this.price = Number(price);
    this.description = String(description);
    this.id = id;
  }

  getDetails() {
    return `The ${this.name} product is ${this.description} and costs €${this.price}!`;
  }

  setPrice(price) {
    this.price = Number(price);
  }
}
