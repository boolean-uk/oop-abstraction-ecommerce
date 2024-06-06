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
    it("should display the info of the product", () => {
        expect(product.info).toEqual("This is an apple; it cost: £0.42 and is a red shiny fruit")
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
        expect(basket.menu).toEqual("This needs to be updated")
    })
    it("should display product info", () => {
        
    })
})