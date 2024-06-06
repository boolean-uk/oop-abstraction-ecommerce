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

    get price() {
        return this.#price
    }

    get name() {
        return this.#name
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

    removeProduct(productName) {
        this.#products = this.#products.filter(product => product.name !== productName)
    }

    get products() {
        return this.#products
    }

    getTotalBasketPrice() {
        return this.#products.reduce((total, product) => total + product.price, 0)
    }
}

export { Product, Basket }
