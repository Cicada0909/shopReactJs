import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CategoryListItem from '../CategoryListItem/CategoryListItem';
import styles from "./AllCategoryList.module.css";
import { Skeleton } from '@mui/material';

const AllCategoryList = () => {
    const [allCategorys, setAllCategorys] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        axios
            .get("https://dummyjson.com/products/categories")
            .then(response => {
                setAllCategorys(response.data);
            })
            .finally(() => {
                setIsLoading(false);
            })

        console.log(allCategorys);

    }, []);

    if (isLoading) {
        return (
            <div className={styles.wrapper}>
                {Array(24).fill().map((_, index) => (
                <Skeleton animation="wave" key={index} />
                ))}
            </div>
        )
    }

    return (
        <div className={styles.wrapper}>
            {allCategorys.map((item) => (
                <CategoryListItem
                    key={item.slug}
                    {...item}
                />
            ))}
        </div>
    )
}

export default AllCategoryList