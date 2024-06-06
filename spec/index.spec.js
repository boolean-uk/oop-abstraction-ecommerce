import Basket from "../src/index.js"
import ProductList from "../src/productList.js"
import Product from "../src/product.js"

describe('Basket', () => {
    let basket
    let productList
    beforeEach(() => {
        basket = new Basket()
        productList = new ProductList()
    })
    it('should find the product from the product list', () => {
        const watch = productList.getProduct('Garmin')
        expect(productList).toBeInstanceOf(ProductList)
        expect(watch.name).toBe('Garmin epix Gen 2')
    })
    it('should add a product to the basket', () => {
        const watch = productList.getProduct('Garmin')
        basket.add(watch)
        expect(basket.basket.length).toBe(1)
        expect(basket.basket[0].name).toBe('Garmin epix Gen 2')
    })
})