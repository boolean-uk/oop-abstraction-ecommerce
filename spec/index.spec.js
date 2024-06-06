import Basket from "../src/index.js"
import ProductList from "../src/productList.js"
import Product from "../src/product.js"

describe('Basket', () => {
    let basket
    beforeEach(() => {
        basket = new Basket
    })
    it('should find the product from the product list', () => {
        const productList = new ProductList()
        const watch = productList.getProduct('Garmin')
        expect(productList).toBeInstanceOf(ProductList)
        expect(watch.name).toBe('Garmin epix Gen 2')
    })
})