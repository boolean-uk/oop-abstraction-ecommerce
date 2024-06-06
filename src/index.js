class Basket {
  #productList
  #quantity

  constructor() {
    this.#productList = []
    this.#quantity = 0
  }

  get productList() {
    return this.#productList.map((product) => ({
      name: product.name,
      price: product.price,
      description: product.description,
      quantity: product.quantity
    }))
  }

  get quantity() {
    this.#productList.forEach((product) => {
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
    if (this.isString(name, description) && this.isNumber(price) && this.isNumber(quantity)) {
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
