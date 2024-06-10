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
    

})
