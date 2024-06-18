const Basket = require("../src/index.js");

describe("Basket", () => {
  it("should add a product", function () {
    const basket = new Basket();

    const newItem = {
      name: "Bag",
      price: "£30",
      description: "The only thing you should be chasing",
    };

    basket.addProduct(newItem);

    expect(basket.products.length).toBe(3);
  });
  it("should remove a product", function () {
    const basket = new Basket();

    const newItem = {
      name: "Bag",
      price: "£30",
      description: "The only thing you should be chasing",
    };

    basket.removeProduct(newItem);
    expect(basket.products.length).toBe(2);
  });
  it("should display all content with the name,price and description", function () {
    const basket = new Basket();
    const content = basket.displayProducts();
    expect(content).toEqual([
      {
        name: "Avocado",
        price: "50p",
        description: "you either love it or you hate it",
      },
      {
        name: "Ankle Weights",
        price: "20 squid ones",
        description: "lock in",
      },
    ]);
  });
});
