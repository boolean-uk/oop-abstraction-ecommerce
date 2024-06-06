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

})
