class Order {
    constructor() {
        this.order = []
        this.orderTotal = 0
    }

    generateOrder(basketContents) {
        basketContents.forEach((item) => {
            let line = new OrderLine(item.name, item.quantityInBasket, item.subTotal)
            this.orderTotal += item.subTotal
            this.order.push(line)
        })

        this.order.push(this.orderTotal)
        return this.order
    }
}

class OrderLine {

    constructor(productName, quantity, subTotal) {
        this.productName = productName
        this.quantity = quantity
        this.subTotal = subTotal
    }
}

export default Order