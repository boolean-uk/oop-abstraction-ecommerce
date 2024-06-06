class Order {
    constructor() {
        this.orderSummary = []
        this.orderTotal = 0
    }

    generateOrder(basketContents) {
        basketContents.forEach((item) => {
            let line = new OrderLine(item.name, item.quantityInBasket, item.subTotal)
            this.orderTotal += item.subTotal
            this.orderSummary.push(line)
        })

        this.orderSummary.push(this.orderTotal)
        return this.orderSummary
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