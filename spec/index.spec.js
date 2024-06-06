import Basket from '../src/index.js'

describe('Basket', () => {
  let basket

  beforeEach(() => {
    basket = new Basket()
  })

  it('should be able to add products', () => {
    basket.addProduct('Travis Scott Air Force 1', 2.748, 'Leather 100%')

    expect(basket.listProducts()).toEqual([
      {
        name: 'Travis Scott Air Force 1',
        price: 2.748,
        description: 'Leather 100%',
      }
    ])
  })

  it('should be able to remove products', () => {
    basket.addProduct('Travis Scott Air Force 1', 2.748, 'Leather 100%')
    basket.addProduct(
      'Louis Vuitton Christopher GM backpack',
      5.978,
      'PVC 100%'
    )

    basket.removeProduct('Travis Scott Air Force 1')

    expect(basket.listProducts()).toEqual([
      {
        name: 'Louis Vuitton Christopher GM backpack',
        price: 5.978,
        description: 'PVC 100%',
      }
    ])
  })

  it('should throw an error if products properties are not filled in correctly', () => {
    expect(() => basket.addProduct('', 2.748, 'Leather 100%')).toThrowError(
      'Product properties must be filled in correctly'
    )

    expect(() =>
      basket.addProduct('Travis Scott Air Force 1', '2.748', 'Leather 100%')
    ).toThrowError('Product properties must be filled in correctly')
  })

  it('should throw an error if product not found', () => {
    expect(() =>
      basket.removeProduct('Louis Vuitton Christopher GM backpack')
    ).toThrowError('Product not found')
  })
})
