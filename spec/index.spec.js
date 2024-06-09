import { Basket, Product } from "../src/index.js"

describe("Product", () => {
    let product 
    beforeEach(() => {
        product = new Product("apple", "£0.42", "a red shiny fruit")
    })
    it("should exist", () => {
        expect(product).toBeInstanceOf(Product)
    })
    it("should throw an error when creating a product with incorrect values", () => {
        expect(() => product = new Product("apple", 2)).toThrow("Product must have a name, price and description all as string data types")
    })
    it("should display the info of the product in a string", () => {
        expect(product.info()).toEqual("This is an apple; it cost: £0.42 and is a red shiny fruit")
    })
    it("should display the name of the product", () => {
        expect(product.name()).toEqual("apple")
    })
    it("should display the details of the project as an object" ,() => {
        expect(product.details).toEqual({name: "apple", price: "£0.42", description: "a red shiny fruit"})
    })
})

describe("Basket", () => {
    let basket
    beforeEach(() => {
        basket = new Basket()
    })
    it("should exist", () => {
        expect(basket).toBeInstanceOf(Basket)
    })
    it("should display items in basket", () => {
        expect(basket.cart).toEqual([])
    })
    it("should display all products on the menu", () => {
        expect(basket.menu()).toEqual(["apple", "spanner", "the blood of a goat"])
    })
    it("should display product info", () => {
        expect(basket.productInfo("spanner")).toEqual("This is an spanner; it cost: £5.75 and is a tool used to adjust a nut")
    })
    it("should throw an error if searching for an invalid item", () => {
        expect(() => basket.productInfo("unicorn")).toThrow("This product doesn't exist")
    })
    it("should add an item to the basket", () => {
        basket.add("apple")
        expect(basket.cart).toEqual([{name: "apple", price: "£0.42", description: "a red shiny fruit"}])
    })
    it("should throw an error if invalid item added to basket", () => {
        expect(() => basket.add(12)).toThrow("This product isn't on the menu")
    })
    it("should remove an item from the basket", () => {
        basket.add("apple")
        basket.remove("apple")
        expect(basket.cart).toEqual([])
    })
    it("should throw an error when removing an item which isn't present", () => {
        expect(() => basket.remove("dog")).toThrow("This product isn't in your basket")
    })
})