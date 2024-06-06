class Basket {
  #productList

  constructor() {
    this.#productList = []
  }

  isString(name, description) {
    return [name, description].every(
      (prop) => typeof prop === 'string' && prop !== ''
    )
  }

  isNumber(price) {
    return typeof price === 'number' && price > 0
  }

  addProduct(name, price, description) {
    if (this.isString(name, description) && this.isNumber(price)) {
      const newProduct = new Product(name, price, description)
      this.#productList.push(newProduct)
      return this.listProducts()
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
      return this.listProducts()
    }

    throw new Error('Product not found')
  }

  listProducts() {
    return this.#productList.map((product) => ({
      name: product.name,
      price: product.price,
      description: product.description,
    }))
  }

  outputProductDetails(name) {
    const productToOutput = this.#productList.findIndex(
        (product) => product.name === name
    )

    if (this.isProductFound(productToOutput)) {
        this.#productList.slice(productToOutput, 1)
        return this.listProducts()
    }

    throw new Error('Product not found')
  }
}

class Product {
  #name
  #price
  #description

  constructor(name, price, description) {
    this.#name = name
    this.#price = price
    this.#description = description
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
}

export default Basket
