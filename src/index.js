class Basket {
    constructor() {
        this.products = []
        this.total = 0
    }

    addProduct(product) {
        this.products.push(product)
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