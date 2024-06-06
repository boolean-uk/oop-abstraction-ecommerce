class Basket {
    #contents

    constructor() {
        this.#contents = []
    }

    addProduct(product) {
        this.#contents.push(product)
    }

    get contents() {
        return [...this.#contents]
    }
}

export default Basket