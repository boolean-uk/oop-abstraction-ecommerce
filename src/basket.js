class Basket {
  #basket
  constructor(){
    this.#basket = []
  }

  add(product){
    this.#basket.push(product)
  }

  remove(product){
    if(this.#basket.length < 1) {
        console.log('Basket is Empty') 
        return 0
      }
    
    const index = this.#basket.findIndex((item) => item.pName === product.pName )
    if(index) {
      this.#basket.splice(index, 1)
    } else {
      console.log('Product not found!')
      return
    }
  }

  viewBasket(){
    return this.#basket
  }
}

export { Basket }