class Product {
    constructor(name, price, description) {
      this.name = name;
      this.price = price
      this.description = description;
      this.quantity = 1;
    }
  
    checkQuantity() {
      return this.quantity++;
    }
  
    productDetails() {
      return console.log(`£${this.price}, ${this.name}, ${this.description}`);
    }
  }

  export default Product