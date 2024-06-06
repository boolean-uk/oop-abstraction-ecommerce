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
})