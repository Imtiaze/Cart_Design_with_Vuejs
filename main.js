var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image : "./assets/vmSocks-green.jpg",
        altText: 'blue socks',
        link : 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
        inStock: false,
        details: ["80% cotton", "20% polyster", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "./assets/vmSocks-green.jpg"
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "./assets/vmSocks-blue.jpg"
            }
        ],
        cart: 0
    },
    methods: {
        addToCart: function () {
            this.cart += 1
        },
        updateProduct: function (variantImage) {
            this.image = variantImage
        }
    }
})  