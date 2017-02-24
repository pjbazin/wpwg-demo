// Site Reference
var _version = "0.8.0221D"

// Liste of basic items
var items = {
    carrots: {
        name: "carrots",
        src: "~/images/carrot jpg",
        price: 0.01,
    },
    kales: {
        name: "kales",
        price: 0.02,
    },
    potatoes: {
        name: "potatoes",
        price: 0.10,
    },
    tomatoes: {
        name: "tomatoes",
        price: 1,
    },
}


// Payment structure to be used by the payment App request
var order = {
    ref: "",
    currency: "EUR",
    price: 0,
    tax: 0,
    shipping: 0,
    total: 0
}



