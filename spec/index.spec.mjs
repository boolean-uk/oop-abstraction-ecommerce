import Product from "../src/product.js";
import Basket from "../src/basket.js";

describe("E-commerce Application", () => {
    it("should correctly add and remove products from the basket", () => {
        let product1 = new Product("Widget", 19.99, "A useful widget", 10);
        let product2 = new Product("Gadget", 29.99, "An awesome gadget", 5);

        let basket = new Basket();
        basket.addProduct(product1, 3);
        basket.addProduct(product2, 2);

        expect(basket.products["Widget"].quantity).toBe(3);
        expect(basket.products["Gadget"].quantity).toBe(2);

        basket.removeProduct(product1, 1);
        expect(basket.products["Widget"].quantity).toBe(2);
    });

    it("should not add more products than available quantity", () => {
        let product = new Product("Gadget", 29.99, "An awesome gadget", 5);

        let basket = new Basket();

        const originalLog = console.log;
        console.log = function() {};

        basket.addProduct(product, 6);

        console.log = originalLog;

        expect(basket.products["Gadget"]).toBeUndefined();
        expect(product.availableQuantity).toBe(5);
    });

    it("should generate correct order and receipt", () => {
        let product1 = new Product("Widget", 19.99, "A useful widget", 10);
        let product2 = new Product("Gadget", 29.99, "An awesome gadget", 5);

        let basket = new Basket();
        basket.addProduct(product1, 3);
        basket.addProduct(product2, 2);

        let order = basket.generateOrder();
        let receipt = order.generateReceipt("Tech Store", "123-456-7890", "VAT12345");

        expect(receipt).toContain("Tech Store");
        expect(receipt).toContain("123-456-7890");
        expect(receipt).toContain("VAT12345");
        expect(receipt).toContain("Widget - $19.99 x 3 = $59.97");
        expect(receipt).toContain("Gadget - $29.99 x 2 = $59.98");
        expect(receipt).toContain("Total: $119.95");
    });
});
