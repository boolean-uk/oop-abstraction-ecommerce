import { Product } from '../src/index.js'

describe('Product', () => {
    it('should return product details', () => {
        const product = new Product(
            'Van Gogh Print',
            100,
            'The Starry Night by Van Dyke, Canvas Print, 140cm(w)x 100cm(h)'
        )
        expect(product.getProductDetails()).toBe(
            'Van Gogh Print: $100 - The Starry Night by Van Gogh, Canvas Print, 140cm(w)x 100cm(h)'
        )
    })
})
