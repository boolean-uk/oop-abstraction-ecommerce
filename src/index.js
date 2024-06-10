class Basket {
    constructor() {
        this.products = [];
      }
    
      add(product) {
        this.products.push(product);
      }
      remove(productName) {
        let updatedProducts = this.products.filter(
          (product) => product.name !== productName
        );
        this.products = updatedProducts;
        return this.products;
      }

}

export class Product {
    constructor(name, price, description) {
      if (name === undefined || name === null || name.trim() === "")
        throw "name is required";
  
      if (price === undefined || price === null || price === NaN)
        throw "price is required";
  
      if (
        description === undefined ||
        description === null ||
        description.trim() === ""
      )
        throw "description is required";
  
      this.name = name;
      this.price = price;
      this.description = description;
    }
}  


export default Basket