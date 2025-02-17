import styles from "./ProductsListItem.module.css"

const ProductsListItem = (props) => {
    return (
        <div className={styles.wrapper}>
            <img src={props.thumbnail} alt={props.title} />
            <div className={styles.contentWrapper}>
                <span>{props.title}</span>
                <button>Купить</button>
            </div>
        </div>
    )
}

export default ProductsListItem;
