class Product {
  constructor(name, price, description, stock) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.stock = stock;
  }

  reduceStockByOne() {
    this.stock--;
  }

  hasStock() {
    return this.stock > 0;
  }
}

export default Product;
