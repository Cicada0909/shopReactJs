import { Button } from "@mui/material"
import styles from "./ProductDetails.module.css"
import { useCart } from "../../../contexts/CartContext/CartContext"


const ProductDetails = (product) => {

    const {addToCart} = useCart();

    

    return (
        <div className={styles.wrapper_product_details}>
            <img className={styles.product_details__img} src={product.images?.[0]} alt={product.title} />
            <div className={styles.product_details__items}>
                <h3 className={styles.product_details__title}>{product.title}</h3>
                <div className={styles.product_details__desctiption}>
                    <h3 className={styles.product_details__desctiption_title}>Description</h3>
                    <p className={styles.product_details__desctiption_text}>{product.description}</p>
                </div>
                <div className={styles.product_details__info}>
                    <h3 className={styles.product_details__info_title}>Other</h3>
                    <ul className={styles.product_details__list}>
                        <li className={styles.product_details__info_item}>rating: {product.rating}</li>
                        <li className={styles.product_details__info_item}>brand: {product.brand}</li>
                        <li className={styles.product_details__info_item}>price: {product.price}$</li>
                        <li className={styles.product_details__info_item}>{product.warrantyInformation}</li>
                    </ul>
                </div>
                <Button  className={styles.product_details__button} size='large' variant='outlined' onClick={() => 
                    addToCart({ 
                        id: product.id, 
                        price: product.price, 
                        title: product.title, 
                        cardImage: 
                        product.images?.[0]})}>
                        Buy
                        </Button>

            </div>
        </div>
    )
}

export default ProductDetails