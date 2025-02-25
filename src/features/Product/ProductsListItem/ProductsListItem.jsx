import Button from "../../../components/ui/Button/Button";
import ProductCard from "../../../components/ui/Button/ProductCard/ProductCard";
import { CART } from "../../../constants/constants";
import { useCart } from "../../../contexts/CartContext/CartContext";
import styles from "./ProductsListItem.module.css"

const ProductsListItem = ({
    cardImage,
    title,
    description,
    price,
    id,
    isInCart,
}) => {
    const {cart, addToCart } = useCart();

    console.log(cart);
    
    
    return (
        <ProductCard
            cardImage={cardImage}
            title={title}
            description={description}
            price={price}
            id={id}
            hadleAddToCart={() => addToCart({ id, price, title })}
        />
    )
}

export default ProductsListItem;
