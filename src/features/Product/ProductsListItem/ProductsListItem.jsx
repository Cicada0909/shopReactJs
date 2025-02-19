import Button from "../../../components/ui/Button/Button";
import ProductCard from "../../../components/ui/Button/ProductCard/ProductCard";
import styles from "./ProductsListItem.module.css"

const ProductsListItem = (props) => {
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
            cardImage={props.thumbnail}
            title={props.title}
            description={props.description}
            price={props.price}
            id={props.id}
        />
    )
}

export default ProductsListItem;
