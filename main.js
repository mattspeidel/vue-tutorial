Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `<div class="product">
    <div class="product-image">
        <img class="socksImage" :src="image">
    </div>
    <div class="product-link">
        <a :href="link">test</a>
    </div>
    <div class="product-info">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <p v-if="inventory > 10">In Stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>
        <div v-for="(variant, index) in variants" 
            :key="variant.variantId"
            class="color-box"
            :style="{ backgroundColor: variant.variantColor }"
            @mouseover="updateProduct(index)">
        </div>
        <button v-on:click="addToCart" 
            :disabled="inventory === 0"
            :class="{ disabledButton: inventory === 0 }">Add to Cart
        </button>    
        <div class="cart">
            <p>Cart({{cart}})</p>
        </div>
    </div>
</div>
    `,
    data() {
        return {
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
        }
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
        },
        shipping() {
            if (this.premium) {
                return "Free"
            }
            return 2.99
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        premium: true
    }
})