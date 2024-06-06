import Basket from "../src/basket.js";
import Product from "../src/product.js";

describe("eComm Site", () => {
  let testBasket;
  let testProduct;

  beforeEach(() => {
    testBasket = new Basket();
    testProduct = new Product(
      "Gizmo",
      "2.99",
      "The gizmo that all kids want this summer",
      5
    );
  });

  it("should have a basket and product class", () => {
    expect(testBasket).toBeInstanceOf(Basket);
    expect(testProduct).toBeInstanceOf(Product);
  });

  it("should build a product with name, price, description, and stock level", () => {
    expect(testProduct.name).toEqual("Gizmo");
  });

  it("should allow products to be added to the basket", () => {
    testBasket.addProduct(testProduct);

    expect(testBasket.contents[0]).toEqual(testProduct);
  });

  it("should prevent items being added to basket when available stock is 0", () => {
    testBasket.addProduct(testProduct);
    testBasket.addProduct(testProduct);
    testBasket.addProduct(testProduct);
    testBasket.addProduct(testProduct);
    testBasket.addProduct(testProduct);

    expect(() => {testBasket.addProduct(testProduct)}).toThrowError("No stock");
  });
});
