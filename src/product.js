class Product {
  constructor(name, price, description, stock) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.stock = stock;
    this.quantityInBasket = 0
  }

  reduceStock(quantity) {
    this.stock -= quantity;
  }

  hasStock() {
    return this.stock > 0;
  }

  increaseQuantityInBasket(quantity) {
    this.quantityInBasket+=quantity
  }
}

export default Product;
