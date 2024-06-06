import { Basket } from "../src/basket.js";
import { Product } from "../src/pcoduct.js";

describe('basket', () => {
  let basket

  beforeEach(() => {
    basket = new Basket()
  })

  it('should exist', () => {
    expect(basket).toBeInstanceOf(Basket)
  })

  it('should add procduct to basket', () => {
    const myProduct = new Product('bagel', 1, 'classic bagel')
    basket.add(myProduct.product)

    expect(basket.viewBasket().length).toBe(1)
  })

  it('should remove product from basket', () => {
    const myProduct = new Product('bagel', 1, 'classic bagel')
    basket.add(myProduct.product)

    expect(basket.viewBasket().length).toBe(1)
    basket.remove(myProduct.product)

    expect(basket.viewBasket().length).toBe(0)
  })
})
