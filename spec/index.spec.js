import Basket, { Product } from "../src/index.js"

describe('Basket', () => {
    let basket
    let eggs
    let yoghurt

    beforeEach(() => {
        basket = new Basket
        eggs = new Product('eggs', 2.30, 'grassfed freerange chicken eggs', 6)
        yoghurt = new Product('yoghurt', 1.45, 'grassfed freerange cow milk', 3)
    })

    it('should exist', () => {
        expect(basket).toBeInstanceOf(Basket)
        expect(eggs).toBeInstanceOf(Product)
        expect(yoghurt).toBeInstanceOf(Product)
    })

    it('should be able to add a product', () => {
        basket.addProduct(eggs)

        expect(basket.products.length).toBe(1)
        expect(basket.products[0].name).toBe('eggs')
        expect(basket.products[0].price).toBe(2.30)
        expect(basket.products[0].description).toBe('grassfed freerange chicken eggs')

        basket.addProduct(yoghurt)

        expect(basket.products.length).toBe(2)
        expect(basket.products[1].name).toBe('yoghurt')
        expect(basket.products[1].price).toBe(1.45)
        expect(basket.products[1].description).toBe('grassfed freerange cow milk')
    })

    it('should update the price when products are added', () => {
        expect(basket.total). toBe(0)

        basket.addProduct(eggs)

        expect(basket.total).toBe(2.30)

        basket.addProduct(yoghurt)

        expect(basket.total).toBe(3.75)

        basket.addProduct(eggs)

        expect(basket.total).toBe(6.05)

    })
    
    it('should be able to add multiple of a product', () => {
        basket.addProduct(eggs)

        expect(basket.products.length).toBe(1)
        expect(basket.products[0].quantity).toBe(1)

        basket.addProduct(eggs)

        expect(basket.products.length).toBe(1)
        expect(basket.products[0].quantity).toBe(2)
    })  

    it('should be able to remove a product', () => {
        basket.addProduct(eggs)
        basket.addProduct(yoghurt)

        const removed = basket.removeProduct(yoghurt)

        expect(removed).toBe(yoghurt)
        expect(basket.products.length).toBe(1)

        basket.addProduct(yoghurt)
        basket.addProduct(eggs)

        const removed2 = basket.removeProduct(eggs)
        expect(removed2).toBe(eggs)
        expect(basket.products.length).toBe(2)
        expect(basket.products[0].quantity).toBe(1)
    }) 

    it('should be able to get product details', () => {
        basket.addProduct(eggs)
        basket.addProduct(yoghurt)

        const result = basket.products[0].details()

        expect(result).toBe(`this product is: eggs, it's price is: $2.30 and extra information is: grassfed freerange chicken eggs`)

        const result2 = yoghurt.details()

        expect(result2).toBe(`this product is: yoghurt, it's price is: $1.45 and extra information is: grassfed freerange cow milk`)
    }) 

    it('should be able to place an order', () => {
        basket.addProduct(eggs)
        basket.addProduct(eggs)
        basket.addProduct(eggs)
        basket.addProduct(yoghurt)
        basket.addProduct(yoghurt)

        const result = basket.order()

        expect(Number(basket.total.toFixed(2))).toBe(9.80)
        expect(result).toBeDefined()
    }) 

    it('should be generate a receipt', () => {
        basket.addProduct(eggs)
        basket.addProduct(eggs)
        basket.addProduct(eggs)
        basket.addProduct(yoghurt)
        basket.addProduct(yoghurt)

        const result = basket.receipt()

        expect(Number(basket.total.toFixed(2))).toBe(9.80)
        expect(result).toBeDefined()
    })

    it('should update original product quantity when adding item to basket', () => {
        basket.addProduct(eggs)
        basket.addProduct(eggs)
        basket.addProduct(eggs)

        expect(basket.products[0].productQuantity).toBe(3)

        basket.addProduct(yoghurt)
        basket.addProduct(yoghurt)

        expect(basket.products[1].productQuantity).toBe(1)

        basket.removeProduct(eggs)

        expect(basket.products[0].productQuantity).toBe(4)
    })
})