import Product from "../src/product.js"
import Basket from "../src/index.js"

describe("Product", () => {
	let np

	beforeEach(() => {
		np = new Product("Eggs", 3, "A dozen of eggs")
	})

	it("should exist as an instance of Product", () => {
		expect(np).toBeInstanceOf(Product)
	})
	it("should have a way to output its details name, price and description", () => {
		expect(np.getProduct()).toBe(
			"Name: Eggs\n Cost: €3\n Description: A dozen of eggs"
		)
	})
})

describe("Basket", () => {
	let nb
	beforeEach(() => {
		nb = new Basket()
	})

	it("should exist as an instance of Basket", () => {
		expect(nb).toBeInstanceOf(Basket)
	})

	it("should be able to add products", () => {
		nb.addProduct("Eggs", 3, "A dozen of eggs")
		expect(nb.basket.length).toBe(1)
		expect(nb.basket[0].name).toBe("Eggs")
		expect(nb.basket[0].price).toBe(3)
	})

	it("should throw an error if product name is not a string, price is not a number and description is not a string", () => {
		expect(() =>
			nb.addProduct("Eggs", "3", "A dozen of eggs")
		).toThrowError("Price must be a number")
		expect(() => nb.addProduct(5, 3, "A dozen of eggs")).toThrowError(
			"Name must be a string"
		)
	})

	it("should be able to remove products", () => {
		nb.addProduct("Banana", 4, "A bunch of bananas")
		nb.addProduct("Eggs", 3, "A dozen of eggs")
		expect(nb.basket.length).toBe(2)

		nb.removeProduct("Eggs")
		expect(nb.basket.length).toBe(1)
		expect(nb.basket[0].name).toBe("Banana")
	})

	it("should throw an error if trying to remove non-existing product", () => {
		nb.addProduct("Banana", 4, "A bunch of bananas")
		nb.addProduct("Eggs", 3, "A dozen of eggs")
		expect(nb.basket.length).toBe(2)

		expect(() => nb.removeProduct("Egs")).toThrowError(
			`There is no product named Egs in the basket`
		)
	})

	it(`should be able to provide a string with a product's description`, () => {
		nb.addProduct("Banana", 4, "A bunch of bananas")

		expect(nb.showProduct("Banana")).toBe(
			"Name: Banana\n Cost: €4\n Description: A bunch of bananas"
		)
    })
    
    it('should keep track of added pruducts quantity', () => {
        nb.addProduct("Banana", 4, "A bunch of bananas")
        nb.addProduct("Banana", 4, "A bunch of bananas")

        expect(nb.basket.length).toBe(1)
    })
})
