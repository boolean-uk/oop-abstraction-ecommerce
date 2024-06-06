class Product {
	name
	price
	description

	constructor(name, price, description) {
		if (typeof name !== "string") {
			throw new TypeError("Name must be a string")
		}
		if (typeof price !== "number") {
			throw new TypeError("Price must be a number")
		}
		if (typeof description !== "string") {
			throw new TypeError("Description must be a string")
		}
		this.name = name
		this.price = price
		this.description = description
	}

	getProduct() {
		return `${this.name} Cost: €${this.price} Description: ${this.description}`
	}
}

export default Product

// const np = new Product("Eggs", 3, "A dozen of eggs")
// const test = np.getProduct("Egg")
// console.log(np);
// console.log(typeof test);
// console.log(np.getProduct('Egg'));