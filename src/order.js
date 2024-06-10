export default class Order {
    constructor(products) {
        this.products = products;
    }

    generateReceipt(businessName, phoneNumber, vatNumber) {
        let receipt = `Receipt for ${businessName}\nPhone: ${phoneNumber}\nVAT: ${vatNumber}\n\nItems:\n`;
        let total = 0;
        for (let productName in this.products) {
            let product = this.products[productName].product;
            let quantity = this.products[productName].quantity;
            let subtotal = product.price * quantity;
            total += subtotal;
            receipt += `${product.name} - $${product.price.toFixed(2)} x ${quantity} = $${subtotal.toFixed(2)}\n`;
        }
        receipt += `\nTotal: $${total.toFixed(2)}`;
        return receipt;
    }
}
