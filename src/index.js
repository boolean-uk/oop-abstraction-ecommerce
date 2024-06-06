import { Basket } from "./basket.js";
import { Product } from "./pcoduct.js";

const bagel1 = new Product('bagel1', `1.99`, 'clasic bagel!')
const bagel2 = new Product('bagel2', 2.99, 'clasic bagel!')
const bagel3 = new Product('bagel3', 3, 'clasic bagel!')
const bagel4 = new Product('bagel4', 4, 'clasic bagel!')
const bagel5 = new Product('bagel5', 5, 'clasic bagel!')

const myBasket = new Basket()
myBasket.remove(bagel1.product)

myBasket.add(bagel1.product)
myBasket.add(bagel2.product)
myBasket.add(bagel3.product)
myBasket.add(bagel4.product)
myBasket.add(bagel5.product)

myBasket.remove(bagel2.product)
myBasket.remove(bagel2.product)
myBasket.remove(bagel5.product)

console.log(myBasket.viewBasket())
