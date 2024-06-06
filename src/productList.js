import Product from "./product.js";

class ProductList {

    getProduct(name) {
        for (let i = 0; i < this.get().length; i++) {
          if (this.get()[i].name.includes(name)) {
            return new Product(
            this.get()[i].name,
            this.get()[i].price,
            this.get()[i].description)
          }
        }
      }

  get() {
    return [
      {
        name: "family pack of apples",
        price: 1.5,
        description: "locally grown apples fae down the road",
      },
      {
        name: "watermelon",
        price: 2.25,
        description: "the biggest and juciest watermelons around",
      },
      {
        name: "unwaxed lemons",
        price: 1.2,
        description: "zesty & sour - great for making fresh lemonade",
      },
      {
        name: "funsize bananas",
        price: 1.8,
        description: "perfect for the kids lunchboxes",
      },
      {
        name: "Panasonic ub820",
        price: 349.99,
        description:
          "The perfect pairing for your 4K Ultra HD TV, the Panasonic DP-UB820EBK Smart 4K Ultra HD Blu-ray & DVD Player lets you get the most out of your entertainment.",
      },
      {
        name: 'LG 65" 4k UHD OLED',
        price: 1499,
        description:
          "This LG C3 OLED TV uses self-lit pixels for perfect blacks and brilliant highlights",
      },
      {
        name: "LG wireless soundbar with Dolby Atmos",
        price: 1699,
        description:
          "It uses 17 speakers with Dolby Atmos, IMAX enhanced and DTS:X to slap you in the face with sound",
      },
      {
        name: "Garmin epix Gen 2",
        price: 399,
        description:
          "Regardless of your fitness goals, the epix premium multisport smartwatch has what you need to help you get there.",
      },
    ];
  }
}

export default ProductList
