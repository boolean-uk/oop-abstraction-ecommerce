import Basket, { Product } from "../src/index.js";

describe('Core Criteria', () => {
    let basket
    beforeEach(() => {
      basket = new Basket();
    })

    it("should be able to add products", () => {
        let product = new Product("bananas", 2.5, "fresh yellow bananas");
        expect(basket.products.length).toBe(0);
        basket.add(product);
        expect(basket.products.length).toBe(1);
      });
      it("should be able to remove products", () => {
        expect(basket.products.length).toBe(0);
        basket.add(new Product("bananas", 2.7, "fresh yellow bananas"));
        basket.add(new Product("coca cola", 35.7, "zero sugar content"));
        basket.add(new Product("popcorn", 13.99, "low salt content"));
        basket.add(new Product("yoghurt", 23.7, "no added sugar"));
        expect(basket.products.length).toBe(4);
        basket.remove("popcorn");
        expect(basket.products.length).toBe(3);
      });
      it("product should have a name, price and description", () => {
        expect(() => {
          new Product();
        }).toThrow("name is required");
        expect(() => {
          new Product("Sandals");
        }).toThrow("price is required");
        expect(() => {
          new Product("Sandals", 56);
        }).toThrow("description is required");
    
        let product;
        expect(() => {
          product = new Product("Sandals", 56, "african leather craftwork");
        }).not.toThrow();
        expect(product).toBeInstanceOf(Product);
      });      
      it("product should have a name, price and description", () => {
        expect(() => {
          new Product();
        }).toThrow("name is required");
        expect(() => {
          new Product("Sandals");
        }).toThrow("price is required");
        expect(() => {
          new Product("Sandals", 56);
        }).toThrow("description is required");
    
        let product;
        expect(() => {
          product = new Product("Sandals", 56, "african leather craftwork");
        }).not.toThrow();
        expect(product).toBeInstanceOf(Product);
      });
    

})
