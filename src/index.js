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

export { Product }
