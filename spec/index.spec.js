import { store } from "../src/store.js";
import Basket from "../src/index.js";

describe("Store", () => {
  let basket;

  beforeEach(() => {
    basket = new Basket();
  });

  it("should exist", () => {
    expect(basket).toBeInstanceOf(Basket);
  });

  it("should add product to basket by id", () => {
    basket.add(1);

    expect(basket.basket.length).toBe(1);
  });

  it("should throw an error if the product to add does not exist", () => {
    expect(() => basket.add(11)).toThrow(
      new Error("The product with ID 11 is not found!")
    );
  });

  it("should remove product from basket by id", () => {
    basket.add(1);
    basket.remove(1);

    expect(basket.basket.length).toBe(0);
  });

  it("should throw an error if the product to remove does not exist", () => {
    basket.add(1);

    expect(() => basket.remove(11)).toThrow(
      new Error("The product with ID 11 is not found!")
    );
  });

  it("should the product details", () => {
    const details = basket.getDetails(1);

    expect(details).toBe("The banana product is fresh and costs €0.5!");
  });

  it("should throw an error if the product to is not found", () => {
    expect(() => basket.getDetails(11)).toThrow(
      new Error("The product with ID 11 is not found!")
    );
  });
});
