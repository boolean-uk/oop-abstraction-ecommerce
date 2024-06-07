class Product {
    #details
    constructor(name, price, description) {
        if (typeof name !== "string" || typeof price !== "string" || typeof description !== "string") {
            throw "Product must have a name, price and description all as string data types"
        }
        this.#details = {name: name, price: price, description: description}
    }
    info() {
        return `This is an ${this.#details.name}; it cost: ${this.#details.price} and is ${this.#details.description}`
    }
    name() {
        return this.#details.name
    }
}

class Basket {
    #items
    #menu
    constructor() {
        this.#items = []
        this.#menu = [new Product("apple", "£0.42", "a red shiny fruit"), new Product("spanner", "£5.75", "a tool used to adjust a nut"), new Product("the blood of a goat", "£6.66", "strangly appetising")]

    }
    get cart() {
        return [...this.#items]
    }

    menu() {
        const names = []
        this.#menu.forEach((item) => {
            names.push(item.name())
        })
        return names
    }
}

export { Basket, Product}