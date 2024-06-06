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
        expect(basket.getTotalBasketPrice()).toBe(100)
    })

    it('should calaculate the total basket value correctly', () => {
        const basket = new Basket()
        const product1 = new Product(
            'Vincent Van Dyke',
            100,
            'Self-Portrait with a Sunflower, 140cm(w) x 100cm(h)'
        )
        const product2 = new Product(
            'Van Gogh Print',
            100,
            'The Starry Night by Van Gogh, Canvas Print, 140cm(w)x 100cm(h)'
        )
        basket.addProduct(product1)
        basket.addProduct(product2)
        expect(basket.getTotalBasketPrice()).toBe(200)
    })
})
