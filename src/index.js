// class Product {
// 	name
// 	price
// 	description

// 	constructor(name, price, description) {
// 		if (typeof name !== "string") {
// 			throw new TypeError("Name must be a string")
// 		}
// 		if (typeof price !== "number") {
// 			throw new TypeError("Price must be a number")
// 		}
// 		if (typeof description !== "string") {
// 			throw new TypeError("Description must be a string")
// 		}
// 		this.name = name
// 		this.price = price
// 		this.description = description
// 	}

// 	getProduct() {
// 		return `${this.name}\nCost: €${this.price}\nDescription: ${this.description}`
// 	}
// }

import Product from "./product.js"

class Basket {
	products
	constructor() {
		this.products = []
	}

	addProduct(name, price, description) {
		const newProduct = new Product(name, price, description)
		this.products.push(newProduct)
	}

	removeProduct(name) {
		const productToRemove = this.products.findIndex(
			(prd) => prd.name === name
		)
		if (productToRemove !== -1) {
			this.products.splice(productToRemove, 1)
		} else {
			throw new Error(
				`There is no product named ${name} in the basket`
			)
		}
	}

	showProduct(name) {
		const productToShow = this.products.find(
			(prd) => prd.name === name
		)
		if (productToShow) {
			return productToShow.getProduct(name)
		} else {
			throw new Error(`There is no product named ${name}`)
		}
	}
}

// const np = new Product("a product", 12, "a fantastic product")
// const np = new Product()
// np.name = "a product"
// np.price = 12
// np.description = "a fantastic product"
// console.log(np.product)
// console.log(typeof np)

// const nb = new Basket()
// nb.addProduct("3", 3, "3")
// nb.addProduct("5", 5, "5")
// nb.showProduct('5')
// // console.log(nb.products)
// // nb.removeProduct('3')
// console.log(nb.showProduct("5"))

// export { Product }
export default Basket
