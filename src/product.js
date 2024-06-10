export default class Product {
    constructor(name, price, description, availableQuantity) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.availableQuantity = availableQuantity;
    }

    details() {
        return `${this.name} - $${this.price.toFixed(2)}: ${this.description} (Available: ${this.availableQuantity})`;
    }
}
