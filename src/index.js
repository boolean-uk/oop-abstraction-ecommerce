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
	basket
	constructor() {
		this.basket = []
	}

    addProduct(name, price, description) {
        // const isInBasket = 
        
        
        const newProduct = new Product(name, price, description)
			this.basket.push(newProduct)
	}

	removeProduct(name) {
		const productToRemove = this.basket.findIndex(
			(prd) => prd.name === name
		)
		if (productToRemove !== -1) {
			this.basket.splice(productToRemove, 1)
		} else {
			throw new Error(
				`There is no product named ${name} in the basket`
			)
		}
	}

	showProduct(name) {
		const productToShow = this.basket.find(
			(prd) => prd.name === name
		)
		if (productToShow) {
			return productToShow.getProduct(name)
		} else {
			throw new Error(`There is no product named ${name}`)
		}
	}
}

export default Basket

const nb = new Basket()

nb.addProduct("Eggs", 3, "A dozen of eggs")
nb.addProduct("Eggs", 3, "A dozen of eggs")
console.log(nb.basket)
