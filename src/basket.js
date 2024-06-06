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
    
    const index = this.#basket.findIndex((item) => {
      console.log('Item is : ', item.pName ,' && product is ', product.pName)
      return item.pName === product.pName
    })
    console.log('index : ', index)
    if(index !== -1) {
      this.#basket.splice(index, 1)
    } else {
      console.log('Product not found!')
      return
    }
  }

  viewBasket(){
    // console.log('test')
    return this.#basket
  }
}

export { Basket }