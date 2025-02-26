const product = "/product/:id";

const productRoutes = {
    product: product,
}

const cart = "/cart";

const cartRoutes = {
    cart: cart,
}

const home = "/";
const category = "/category/:category?";

const commonRoutes = {
    home: home,
    category: category,
};

const favorites = "/favorites";

const favoritesRoutes = {
    favorites: favorites,
};

export const pageRoutes = {
    commonRoutes,
    cartRoutes,
    productRoutes,
    favoritesRoutes,
};