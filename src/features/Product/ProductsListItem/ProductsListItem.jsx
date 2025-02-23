import Button from "../../../components/ui/Button/Button";
import ProductCard from "../../../components/ui/Button/ProductCard/ProductCard";
import { CART } from "../../../constants/constants";
import styles from "./ProductsListItem.module.css"

const ProductsListItem = ({
    cardImage,
    title,
    description,
    price,
    id,
    isInCart,
    quantity,
}) => {
    const getCart = () => {
        const cart = localStorage.getItem(CART);

        return cart ? JSON.parse(cart) : [];
    }
    
        const hadleAddToCart = () => {
            const cart = getCart();
            
            const product = {
                id,
                price,
                title,
                quantity: 1,
                cardImage,
                isInCart,
            }
            
            const foundedItem = cart.find((item) => item.id === product.id);

            if (foundedItem) {
                foundedItem.quantity += 1;
            } else {
                cart.push(product);
            }

            localStorage.setItem(CART, JSON.stringify(cart));
        }
        
    return (
        // <div className={styles.wrapper}>
        //     <img src={props.thumbnail} alt={props.title} />
        //     <div className={styles.contentWrapper}>
        //         <span>{props.title}</span>
        //         <Button 
        //             variant="outlined"
        //         >
        //             Купить
        //         </ Button>
        //     </div>
        // </div>
        <ProductCard
            cardImage={cardImage}
            title={title}
            description={description}
            price={price}
            id={id}
            hadleAddToCart={hadleAddToCart}
        />
    )
}

export default ProductsListItem;
