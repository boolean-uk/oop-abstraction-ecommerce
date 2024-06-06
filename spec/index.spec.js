import Basket from "../src/basket.js";
import Product from "../src/product.js";

describe("eComm Site", () => {
  let testBasket;
  let testProduct;

  beforeEach(() => {
    testBasket = new Basket();
    testProduct = new Product(
      "Gizmo",
      2.99,
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

    expect(() => {
      testBasket.addProduct(testProduct);
    }).toThrowError("No stock");
  });

  it("should remove items from the basket by name", () => {
    testBasket.addProduct(testProduct);
    const removedProduct = testBasket.removeProduct("Gizmo");

    expect(removedProduct).toEqual(testProduct);
  });

  it("should throw an error when attempting to remove product that doesn't exist", () => {
    testBasket.addProduct(testProduct);
    expect(() => {
      testBasket.removeProduct("Cheese");
    }).toThrowError("That product is not in the basket");
  });

  it("should return number of products added", () => {
    testBasket.addProduct(testProduct);
    testBasket.addProduct(testProduct);
    testBasket.addProduct(testProduct);

    expect(testBasket.productsAdded).toEqual(3);
  });

  it("should generate an order for all items in a basket", () => {
    const testProduct2 = new Product(
      "Doodah",
      4.99,
      "A thingamajigg for your stuff",
      12
    );

    testBasket.addProduct(testProduct);
    testBasket.addProduct(testProduct);
    testBasket.addProduct(testProduct2);
    testBasket.addProduct(testProduct2);

    expect(testBasket.getOrder()[1].productName).toEqual('Doodah')
    expect(testBasket.getOrder()[0].subTotal).toEqual(5.98)
  });

  it("should have products that generate product summaries", () => {

    expect(testProduct.getInfo()).toEqual("Gizmo - The gizmo that all kids want this summer - £2.99")
  });
});
