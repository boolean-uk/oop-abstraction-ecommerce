class Basket {
    constructor() {
        this.products = []
    }

    addProduct(product) {
        this.products.push(product)
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