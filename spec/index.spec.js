import Basket, { Product } from '../src/index.js'

describe('basket', () => {
    let basket

    beforeEach(() => {
        basket = new Basket()
    })

    it('contents should be an empty array', () => {
        expect(basket.displayContents().length).toBe(0)
    })

    it('succesfully adds a product to the basket', () => {
        const product = {
            name: "Apple",
            description: "Fruit",
            price:0.65
        }

        basket.addProduct(product)

        expect(basket.displayContents()[0]).toBeInstanceOf(Product)
        expect(basket.displayContents()[0].name).toBe(product.name)
    })

    it('succesfully removes a product from the basket', () => {
        const product = {
            name: "Apple",
            description: "Fruit",
            price:0.65
        }

        const product2 = {
            name: "Pear",
            description: "Fruit",
            price:0.95
        }

        basket.addProduct(product)
        basket.addProduct(product2)

        expect(basket.displayContents()[1].name).toBe(product2.name)

        basket.removeProduct(product2)

        expect(basket.displayContents().length).toBe(1)
        expect(() => {basket.displayContents()[1].name}).toThrow()
    })
})
