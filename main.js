var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'A pair of warm, fuzzy socks',
        image: 'mvaasfue1uwpcrty6nes.webp',
        link: 'https://www.nike.com/t/everyday-plus-cushion-training-crew-socks-3-pairs-kt8drs',
        inventory: 8,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "gray",
                variantImage: 'mvaasfue1uwpcrty6nes.webp',
            },
            {
                variantId: 2235,
                variantColor: "black",
                variantImage: 'a8foncooah9f75mroq3p.webp',
            }
        ],
        cart: 0,
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
    updateProduct(variantImage) {
        this.image = variantImage
    }
    }
})