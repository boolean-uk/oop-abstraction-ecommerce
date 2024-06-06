import { Product, Basket } from '../src/index.js'

describe('Product', () => {
    it('should return product details', () => {
        const product = new Product(
            'Van Gogh Print',
            100,
            'The Starry Night by Van Gogh, Canvas Print, 140cm(w)x 100cm(h)'
        )
        expect(product.getProductDetails()).toBe(
            'Van Gogh Print: $100 - The Starry Night by Van Gogh, Canvas Print, 140cm(w)x 100cm(h)'
        )
    })
})

describe('Basket', () => {
    it('should add a product to the basket', () => {
        const basket = new Basket()
        const product = new Product(
            'Vincent Van Dyke',
            100,
            'Self-Portrait with a Sunflower, 140cm(w) x 100cm(h)'
        )
        basket.addProduct(product)
        expect(basket.products.length).toBe(2)
        expect(basket.products[0]).toBe(product)
    })
})
