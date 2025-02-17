
import AllCategoryList from "../../features/Category/allCategoryList/allCategoryList";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <AllCategoryList />
        </aside>
    )
}

export default Sidebar