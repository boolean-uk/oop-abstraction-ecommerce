class Basket {
  #productList
  #quantity
  #totalPrice

  constructor() {
    this.#productList = []
    this.#quantity = 0
    this.#totalPrice = 0
  }

  get productList() {
    return this.#productList.map((product) => ({
      name: product.name,
      price: product.price,
      description: product.description,
      quantity: product.quantity,
    }))
  }

  get quantity() {
    this.productList.forEach((product) => {
      this.#quantity += product.quantity
    })

    return this.#quantity
  }

  isString(name, description) {
    return [name, description].every(
      (prop) => typeof prop === 'string' && prop !== ''
    )
  }

  isNumber(input) {
    return typeof input === 'number' && input > 0
  }

  addProduct(name, price, description, quantity) {
    if (
      this.isString(name, description) &&
      this.isNumber(price) &&
      this.isNumber(quantity)
    ) {
      const newProduct = new Product(name, price, description, quantity)
      this.#productList.push(newProduct)
      return this.productList
    }

    throw new Error('Product properties must be filled in correctly')
  }

  isProductFound(name) {
    return name !== -1
  }

  removeProduct(name) {
    const productToRemove = this.#productList.findIndex(
      (product) => product.name === name
    )

    if (this.isProductFound(productToRemove)) {
      this.#productList.splice(productToRemove, 1)
      return this.productList
    }

    throw new Error('Product not found')
  }

  outputProductDetails(name) {
    const productToOutput = this.#productList.findIndex(
      (product) => product.name === name
    )

    if (this.isProductFound(productToOutput)) {
      this.#productList.slice(productToOutput, 1)
      return this.productList
    }

    throw new Error('Product not found')
  }

  get totalPrice() {
    this.productList.forEach((product) => {
      this.#totalPrice += product.quantity * product.price
    })

    return this.#totalPrice
  }

  getReceipt() {
    let receipt = ''
  
    if (this.quantity === 0) {
      throw new Error('The basket is empty, can not generate receipt')
    }
  
    this.productList.forEach((product) => {
      receipt += `Product: ${product.name}\n`
      receipt += `Quantity: ${product.quantity}\n`
      receipt += `Sub-total: £${(product.quantity * product.price).toFixed(3)}\n\n`
    })
  
    receipt += '--------------\n'
    receipt += `\nTotal: £${this.totalPrice.toFixed(3)}\n`
    receipt += '\n--------------\n'
    receipt += '\nThank you :)'
    return receipt
  }
}

class Product {
  #name
  #price
  #description
  #quantity

  constructor(name, price, description, quantity) {
    this.#name = name
    this.#price = price
    this.#description = description
    this.#quantity = quantity
  }

  get name() {
    return this.#name
  }

  get price() {
    return this.#price
  }

  get description() {
    return this.#description
  }

  get quantity() {
    return this.#quantity
  }
}

export default Basket
