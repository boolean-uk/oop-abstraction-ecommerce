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
            name: 'Apple',
            description: 'Fruit',
            price: 0.65,
        }

        basket.addProduct(product)

        expect(basket.displayContents()[0].product).toBeInstanceOf(Product)
        expect(basket.displayContents()[0].product.name).toBe(product.name)
    })

    it('succesfully removes a product from the basket', () => {
        const product = {
            name: 'Apple',
            description: 'Fruit',
            price: 0.65,
        }

        const product2 = {
            name: 'Pear',
            description: 'Fruit',
            price: 0.95,
        }

        basket.addProduct(product)
        basket.addProduct(product2)

        expect(basket.displayContents()[1].product.name).toBe(product2.name)

        basket.removeProduct(product2)

        expect(basket.displayContents().length).toBe(1)
        expect(() => {
            basket.displayContents()[1].product.name
        }).toThrow()
    })

    it('displays the details of the product in a well formatted string', () => {
        const product = {
            name: 'Apple',
            description: 'Fruit',
            price: 0.65,
        }

        basket.addProduct(product)

        expect(basket.displayContents()[0].product.displayDetails())
            .toBe(`Name: ${product.name}
        Description: ${product.description}
        Price: ${product.price.toFixed(2)}`)
    })

    it('succesfully increments when adding products', () => {
        const product = {
            name: 'Apple',
            description: 'Fruit',
            price: 0.65,
        }

        basket.addProduct(product)
        basket.addProduct(product)

        expect(basket.displayContents().length).toBe(1)
        expect(basket.displayContents()[0].quantity).toBe(2)
    })

    it('succesfully decrements when removing products', () => {
        const product = {
            name: 'Apple',
            description: 'Fruit',
            price: 0.65,
        }

        basket.addProduct(product)
        basket.addProduct(product)
        basket.removeProduct(product)

        expect(basket.displayContents().length).toBe(1)
        expect(basket.displayContents()[0].quantity).toBe(1)
    })

    it('returns a well formatted order list', () => {
        const product = {
            name: 'Apple',
            description: 'Fruit',
            price: 0.65,
        }

        const product2 = {
            name: 'Pear',
            description: 'Fruit',
            price: 0.95,
        }

        basket.addProduct(product)
        basket.addProduct(product)
        basket.addProduct(product)
        basket.addProduct(product)
        basket.addProduct(product2)
        basket.addProduct(product2)

        expect(basket.displayOrder()).toBe(
            `Order Details\n\n ${product.name} x4 : £${(
                product.price * 4
            ).toFixed(2)}\n ${product2.name} x2 : £${(
                product2.price * 2
            ).toFixed(2)}\n TOTAL: £4.50`
        )
    })
})
