const { Basket, Product } = require("../src/index");

describe("basket", () => {
	it("should add an item", () => {
		const basket = new Basket();
		basket.add(new Product("Oranges", 12, "theyre orange"));
		expect(basket.products.length).toBe(1);
	});

	it("should remove an item", () => {
		const basket = new Basket();
		basket.add(new Product("Oranges", 12, "theyre orange"));
		basket.remove(new Product("Oranges", 12, "theyre orange"));
		expect(basket.products.length).toBe(0);
	});
});
