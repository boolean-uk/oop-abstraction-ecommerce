class Product {
  #pName
  #pPrice
  #pDescription

  constructor(pName, pPrice, pDescription){
    this.#pName = pName,
    this.checkPrice(pPrice),
    this.#pDescription = pDescription
  }
  
  checkPrice(price){
    if(typeof price === 'number') {
      this.#pPrice = price
    } else {
      console.log('The Price is not a number')
      return false
    }
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
      pPrice : this.#pPrice,
      pDescription : this.#pDescription
    }
  }
}

export { Product }
