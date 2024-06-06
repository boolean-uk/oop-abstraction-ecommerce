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

describe('Product', () => {
  let myProduct

  beforeEach(() => {
    myProduct = new Product('bagel', 1, 'classic bagel')
  })

  it('should exist', () => {
    expect(myProduct).toBeInstanceOf(Product)
  })

  it('the price should be number ', () => {
    const product2 = new Product('bagel2', '2', 'classic bagel')

    expect(product2.checkPrice('2')).toBe(false)
  })

  it('should return the details of product', () => {
    const product2 = new Product('bagel2', 2, 'classic bagel')
    const expectedDetails = `
    Product Name is : bagel2, Price is : 2 .
    classic bagel.
    `
    expect(product2.details()).toBe(expectedDetails)
  })

  it('should return the product info', () => {

    expect(myProduct.product).toEqual({pName : 'bagel',
      pPrice : 1,
      pDescription : 'classic bagel'})
  })
})
