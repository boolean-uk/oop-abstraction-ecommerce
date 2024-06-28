class Basket {
	constructor(...products) {
		this.products = products;
	}

	add(p) {
		this.products.push(p);
	}
	remove(p) {
		this.products.splice(
			this.products.findIndex((e) => e.name === p.name),
			1
		);
	}
}

class Product {
	constructor(name, price, description) {
		this.name = name;
		this.price = price;
		this.description = description;
	}

	toString() {
		return `${this.name} - ${this.description}: ${this.price}`;
	}
}

module.exports = { Basket, Product };
