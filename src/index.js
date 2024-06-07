import Product from "./product.js"

class Basket {
	basket
	constructor() {
		this.basket = []
	}

	addProduct(name, price, description) {
		const isInBasket = this.basket.find((prd) => prd.name === name)

		if (isInBasket) {
			isInBasket.qtyIncr()
		} else {
			const newProduct = new Product(name, price, description)
			this.basket.push(newProduct)
		}
	}

	removeProduct(name) {
		const productToRemove = this.basket.findIndex(
			(prd) => prd.name === name
		)
		if (productToRemove !== -1) {
            const product = this.basket[productToRemove]
			if (product.qty > 1) {
				product.qtyDecr()
			} else {
				this.basket.splice(productToRemove, 1)
			}
		} else {
			throw new Error(`There is no product named ${name} in the basket`)
		}
	}

	showProduct(name) {
		const productToShow = this.basket.find((prd) => prd.name === name)
		if (productToShow) {
			return productToShow.getProduct(name)
		} else {
			throw new Error(
				`There is no product named ${name} in the basket`
			)
		}
	}
}

export default Basket

const nb = new Basket()

