import Basket, { Product } from "../src/index.js"

describe('Basket', () => {
    let basket
    let eggs
    let yoghurt

    beforeEach(() => {
        basket = new Basket
        eggs = new Product('eggs', 2.30, 'grassfed freerange chicken eggs')
        yoghurt = new Product('yoghurt', 1.45, 'grassfed freerange cow milk')
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
    })    
})