import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [index("./routes/home.tsx"),
    route("/product/:itemCategory/:productName/:id", "./routes/products/product-detail.tsx"),
    ...prefix("perro", [index("./routes/products/dogs/index.tsx")]),
    ...prefix("gato", [index("./routes/products/cats/index.tsx")]),
    ...prefix("otros", [index("./routes/products/others/index.tsx")]),
    route("carrito", "./routes/cart/cart-shop.tsx"),
    layout("./routes/checkout/purchase-details.tsx", [route("login", "./routes/checkout/login-register.tsx"), route("checkout-details", "./routes/checkout/checkout-details.tsx"), route("payment-process", "./routes/checkout/payment-process.tsx")])

] satisfies RouteConfig;
