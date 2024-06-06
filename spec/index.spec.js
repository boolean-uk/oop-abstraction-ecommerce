import Basket from '../src/index.js'

describe('Basket', () => {
  let basket

  beforeEach(() => {
    basket = new Basket()
  })

  it('should be able to add a product', () => {
    basket.addProduct('Travis Scott Air Force 1', 2.748, 'Leather 100%', 1)

    expect(basket.productList).toEqual([
      {
        name: 'Travis Scott Air Force 1',
        price: 2.748,
        description: 'Leather 100%',
        quantity: 1,
      },
    ])
  })

  it('should be able to remove an product', () => {
    basket.addProduct('Travis Scott Air Force 1', 2.748, 'Leather 100%', 1)
    basket.addProduct(
      'Louis Vuitton Christopher GM backpack',
      5.978,
      'PVC 100%',
      1
    )

    basket.removeProduct('Travis Scott Air Force 1')

    expect(basket.productList).toEqual([
      {
        name: 'Louis Vuitton Christopher GM backpack',
        price: 5.978,
        description: 'PVC 100%',
        quantity: 1,
      },
    ])
  })

  it('should throw an error if product properties are not filled in correctly', () => {
    expect(() => basket.addProduct('', 2.748, 'Leather 100%', 1)).toThrowError(
      'Product properties must be filled in correctly'
    )

    expect(() =>
      basket.addProduct('Travis Scott Air Force 1', '2.748', 'Leather 100%', 1)
    ).toThrowError('Product properties must be filled in correctly')
  })

  it('should throw an error if product was not found', () => {
    expect(() =>
      basket.removeProduct('Louis Vuitton Christopher GM backpack')
    ).toThrowError('Product not found')

    expect(() =>
      basket.outputProductDetails('Travis Scott Air Force 1')
    ).toThrowError('Product not found')
  })

  it('should output the product details', () => {
    basket.addProduct('Travis Scott Air Force 1', 2.748, 'Leather 100%', 1)

    expect(basket.outputProductDetails('Travis Scott Air Force 1')).toEqual([
      {
        name: 'Travis Scott Air Force 1',
        price: 2.748,
        description: 'Leather 100%',
        quantity: 1,
      },
    ])
  })

  it('should be able to keep track of the quantity of the products added', () => {
    basket.addProduct('Travis Scott Air Force 1', 2.748, 'Leather 100%', 1)
    basket.addProduct(
      'Louis Vuitton Christopher GM backpack',
      5.978,
      'PVC 100%',
      2
    )

    expect(basket.quantity).toBe(3)
  })

  it('should be able to generate an order', () => {
    basket.addProduct('Travis Scott Air Force 1', 2.748, 'Leather 100%', 1)
    basket.addProduct(
      'Louis Vuitton Christopher GM backpack',
      5.978,
      'PVC 100%',
      2
    )

    let expected = 'Product: Travis Scott Air Force 1\n'
    expected += 'Quantity: 1\n'
    expected += 'Sub-total: £2.748\n'
    expected += '\nProduct: Louis Vuitton Christopher GM backpack\n'
    expected += 'Quantity: 2\n'
    expected += 'Sub-total: £11.956\n'
    expected += '\n--------------\n'
    expected += '\nTotal: £14.704\n'
    expected += '\n--------------\n'
    expected += '\nThank you :)'

    expect(basket.getReceipt()).toBe(expected)
  })

  it('should throw an error if the basket is empty and try to generate an receipt', () => {
    expect(() => basket.getReceipt()).toThrowError('The basket is empty, can not generate receipt')
  })
})
