class Product {
	#name
	#price
	#description
	#qty

	constructor(name, price, description, qty = 1) {
		if (typeof name !== "string") {
			throw new TypeError("Name must be a string")
		}
		if (typeof price !== "number") {
			throw new TypeError("Price must be a number")
		}
		if (typeof description !== "string") {
			throw new TypeError("Description must be a string")
		}
		this.#name = name
		this.#price = price
		this.#description = description
		this.#qty = qty
	}

	qtyIncr() {
		this.#qty += 1
	}
	qtyDecr() {
		this.#qty -= 1
	}

	getProduct() {
		return `Name: ${this.#name}\n Cost: €${
			this.#price
		}\n Description: ${this.#description}`
	}

	get name() {
		return this.#name
	}

	get price() {
		return this.#price
	}

	get description() {
		return this.#description
	}

	get qty() {
		return this.#qty
	}
}

export default Product
