class Basket {
    #contents

    constructor() {
        this.#contents = []
    }

    addProduct(product) {
        const newProduct = new Product(product)
        
        this.#contents.push(newProduct)
        return this.displayContents()
    }

    removeProduct(product) {
        this.#contents = this.#contents.filter((element) => {
            return element.name !== product.name
        })
        return this.displayContents()
    }

    displayContents() {
        return [...this.#contents]
    }
}

class Product {
    #name
    #price
    #description

    constructor(product) {

        const {name, price, description} = product
        this.#name = name
        this.#description = description
        this.#price = price
    }

    get name() {
        return this.#name
    }

    get description() {
        return this.#description
    }

    get price() {
        return this.#price
    }
}

export default Basket

export { Product }
