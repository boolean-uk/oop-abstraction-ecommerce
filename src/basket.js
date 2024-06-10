import Order from './order.js';

export default class Basket {
    constructor() {
        this.products = {};
    }

    addProduct(product, quantity) {
        if (product.availableQuantity < quantity) {
            console.log(`Cannot add ${quantity} of ${product.name}. Only ${product.availableQuantity} available.`);
            return;
        }

        if (this.products[product.name]) {
            this.products[product.name].quantity += quantity;
        } else {
            this.products[product.name] = { product: product, quantity: quantity };
        }
        product.availableQuantity -= quantity;
    }

    removeProduct(product, quantity) {
        if (this.products[product.name]) {
            if (this.products[product.name].quantity <= quantity) {
                product.availableQuantity += this.products[product.name].quantity;
                delete this.products[product.name];
            } else {
                this.products[product.name].quantity -= quantity;
                product.availableQuantity += quantity;
            }
        }
    }

    generateOrder() {
        return new Order(this.products);
    }
}
