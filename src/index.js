class Basket {
    constructor() {
        this.products = []
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