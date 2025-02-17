import styles from "./CategoryListItem.module.css";
import { Link } from 'react-router';

const CategoryListItem = (props) => {
    return (
        <li className={styles.wrapper}>
            <Link to={`/category/${props.slug}`}>{props.name}</Link>
        </li>
    )
}

export default CategoryListItem;