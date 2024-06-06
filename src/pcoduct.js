class Product {
  #pName
  #pPrice
  #pDescription
  constructor(pName, pPrice, pDescription){
    this.#pName = pName,
    this.#pPrice = pPrice,
    this.#pDescription = pDescription
  }

  details(){
    return `
    Product Name is : ${this.#pName}, Price is : ${this.#pPrice} .
    ${this.#pDescription}.
    `
  }
  get product(){
    return {
      pName : this.#pName,
      pPrice : this.pPrice,
      pDescription : this.#pDescription
    }
  }
}

export { Product }
