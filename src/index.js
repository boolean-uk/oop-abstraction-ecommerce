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

        if (foundIndex >= 0 && foundProduct.quantity === 1) {
            this.products.splice(foundIndex, 1)
        } else if (foundIndex >= 0 && foundProduct.quantity > 1) {
            foundProduct.quantity--
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
}

export default Basket
export { Product }