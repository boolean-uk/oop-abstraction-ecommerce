class Basket {
    #contents

    constructor() {
        this.#contents = []
    }

    addProduct(product) {
        const foundProduct = this.productSearch(product)

        if (foundProduct) {
            foundProduct.quantity++
            return this.displayContents()
        }

        const newProduct = { product: new Product(product), quantity: 1 }

        this.#contents.push(newProduct)
        return this.displayContents()
    }

    removeProduct(product) {
        const foundProduct = this.productSearch(product)

        if (!foundProduct) {
            throw Error('Product not found')
        }

        foundProduct.quantity--

        if (foundProduct.quantity < 1) {
            this.#contents = this.#contents.filter((element) => {
                return element.product.name !== product.name
            })
        }

        return this.displayContents()
    }

    displayContents() {
        return [...this.#contents]
    }

    productSearch(product) {
        const foundProduct = this.#contents.find((element) => {
            const isFound = element.product.name === product.name
            return isFound
        })

        return foundProduct
    }

    generateOrder() {
        const orderData = []
        let totalOrderPrice = 0

        this.#contents.forEach((element) => {
            const totalLinePrice = (
                element.product.price * element.quantity
            )

            totalOrderPrice += totalLinePrice


            orderData.push({
                name: element.product.name,
                quantity: element.quantity,
                price: totalLinePrice.toFixed(2),
            })
        })

        totalOrderPrice = totalOrderPrice.toFixed(2)

        return { lineItems: orderData, totalOrderPrice}
    }

    displayOrder() {
        const orderData = this.generateOrder()
        
        let orderBuilder = 'Order Details\n'
        

        orderData.lineItems.forEach((element) => {
            orderBuilder += `\n ${element.name} x${element.quantity} : £${element.price}`
        })

        orderBuilder += `\n TOTAL: £${orderData.totalOrderPrice}`

        console.log(orderBuilder)

        return orderBuilder
    }
}

class Product {
    #name
    #price
    #description

    constructor(product) {
        const { name, price, description } = product
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

    displayDetails() {
        return `Name: ${this.#name}
        Description: ${this.#description}
        Price: ${this.#price.toFixed(2)}`
    }
}

export default Basket

export { Product }
