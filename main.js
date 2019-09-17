var app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Mastery',
        product: 'Socks',
        description: 'A pair of warm, fuzzy socks',
        selectedVariant: 0,
        link: 'https://www.nike.com/t/everyday-plus-cushion-training-crew-socks-3-pairs-kt8drs',
        inventory: 0,
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
    updateProduct(index) {
        this.selectedVariant = index
    }
    },
    computed: {
        title() {
            return this.brand + " " + this.product
        },
        image () {
            return this.variants[this.selectedVariant].variantImage
        }
    }
})