class Basket {
    constructor() {
        this.products = []
        this.total = 0
    }

    addProduct(product) {
        const foundProduct = this.findProduct(product)

        if(!foundProduct) {
            product.quantity = 1
            this.products.push(product)
        }

        if(foundProduct) {
            product.quantity++
        }

        this.total += product.price
    }

    findProduct(product) {
        return this.products.find((item) => item === product)
    }

    removeProduct(product) {
        const foundProduct = this.findProduct(product)
        const foundIndex = this.products.indexOf(foundProduct)

        if (foundProduct.quantity === 1) {
            this.products.splice(foundIndex, 1)
        }

        if (foundProduct.quantity > 1) {
            foundProduct.quantity--
        }

        if (!foundProduct) {
            throw 'product not found in basket'
        }

        this.total -= foundProduct.price

        return foundProduct
    }
}

class Product {
    constructor(name, price, description) {
        this.name = name
        this.price = price
        this.description = description
    }

    details() {
        return `this product is: ${this.name}, it's price is: $${this.price.toFixed(2)} and extra information is: ${this.description}`
    }
}

export default Basket
export { Product }