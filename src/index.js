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

  getOrder() {
    if (this.quantity === 0) {
      throw new Error('The basket is empty, can not generate an order')
    }

    let order = 'ORDER\n'
    
    this.productList.forEach((product) => {
      order += `\n${product.quantity} X ${product.name} | £${(product.quantity * product.price).toFixed(3)}\n`
    })
  
    order += '\n--------------------\n'
    order += `\nTOTAL AMOUNT £${this.totalPrice.toFixed(3)}\n`
    order += '\n--------------------'
    return order
  }

  getReceipt () {
    if (this.quantity === 0) {
      throw new Error('The basket is empty, can not generate the receipt')
    }

    const company = new Company()
    let receipt = 'RECEIPT\n'

    receipt += `\n${company.businessName}\n`
    receipt += `\n${company.phoneNumber}\n`
    receipt += `\n${company.vatNumber}\n`

    this.productList.forEach((product) => {
      receipt += `\n${product.quantity} X ${product.name} | £${(product.quantity * product.price).toFixed(3)}\n`
    })

    receipt += '\n--------------------\n'
    receipt += `\nTOTAL AMOUNT £${this.totalPrice.toFixed(3)}\n`
    receipt += '\n--------------------\n'
    receipt += '\nTHANK YOU!'
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

class Company {
  #phoneNumber
  #businessName
  #vatNumber

  constructor() {
    this.#phoneNumber = '(646) 791-3768'
    this.#businessName = 'FARFETCH'
    this.#vatNumber = 'GB 204 0769 35'
  }

  get phoneNumber() {
    return this.#phoneNumber
  }

  get businessName() {
    return this.#businessName
  }

  get vatNumber() {
    return this.#vatNumber
  }
}

export default Basket
