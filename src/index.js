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
        product.productQuantity--
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
        product.productQuantity++

        return foundProduct
    }

    order() {
        function getItem(item) {
            return `${item.name}    ${item.quantity}    $${(item.price * item.quantity).toFixed(2)} \n`
        }

        let allItems = this.products.map((product) => getItem(product))
        allItems = allItems.join('')

        return `-------- \n ${allItems} \n total: $${this.total.toFixed(2)} \n --------`
    }

    receipt() {
        const order = this.order()
        const receipt = `Bob's grocery store \n ${order} \n +31207714089 \n VAT: NL123456789B01`

        return receipt
    }
}

class Product {
    constructor(name, price, description, productQuantity) {
        this.name = name
        this.price = price
        this.description = description
        this.productQuantity = productQuantity
    }

    details() {
        return `this product is: ${this.name}, it's price is: $${this.price.toFixed(2)} and extra information is: ${this.description}`
    }
}

export default Basket
export { Product }