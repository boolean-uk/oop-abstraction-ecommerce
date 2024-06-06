import Product from "../src/product.js"
import Basket from "../src/index.js"

describe("Product", () => {
	let np

	beforeEach(() => {
		np = new Product("Eggs", 3, "A dozen of eggs")
	})

	it("should exist", () => {
		expect(np).toBeInstanceOf(Product)
	})
	it("should have a way to output its details name, price and description", () => {
		expect(np.getProduct()).toBe("Eggs Cost: €3 Description: A dozen of eggs")		
	})
})

describe('Basket', () => {
    let nb
    beforeEach(() => {
        np = new Basket()
    })
})
