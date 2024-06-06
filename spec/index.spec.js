import Basket from '../src/basket.js'
import Product from '../src/product.js'

describe("eComm Site", () => {
    let testBasket
    let testProduct

    beforeEach(() => {  
        testBasket = new Basket()
        testProduct = new Product("Gizmo", "2.99", "The gizmo that all kids want this summer", 5)
    })


    it('should have a basket and product class', () => {
        expect(testBasket).toBeInstanceOf(Basket)
        expect(testProduct).toBeInstanceOf(Product)
    })
})
