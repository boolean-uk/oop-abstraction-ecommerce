class Product {
    #name
    #price
    #description

    constructor(name, price, description) {
        this.#name = name
        this.#price = price
        this.#description = description
    }

    getProductDetails() {
        return `${this.#name}: $${this.#price} - ${this.#description}`
    }
}

class Basket {
    #products

    constructor() {
        this.#products = []
    }

    addProduct(product) {
        this.#products.push(product)
    }

    get products() {
        return this.#products
    }
}

export { Product, Basket }
