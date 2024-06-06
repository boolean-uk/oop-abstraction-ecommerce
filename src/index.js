class Basket {
    constructor() {
        this.products = []
        this.total = 0
    }

    addProduct(product) {
        const foundProduct = this.products.find((item) => item === product)

        if(!foundProduct) {
            product.quantity = 1
            this.products.push(product)
        }

        if(foundProduct) {
            product.quantity++
        }

        this.total += product.price
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