import { useEffect, useState } from "react"
import { useParams } from "react-router";
import axios from 'axios';
import ProductsListItem from "../ProductsListItem/ProductsListItem";
import styles from "./ProductsList.module.css"
import { Skeleton, Box } from "@mui/material";



export const ProductsList = () => {
    const { category } = useParams();

    const [products, setProducts] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        axios
            .get(`https://dummyjson.com/products/category/${category}`)
            .then(response => {
                setProducts(response.data.products);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [category]);

    useEffect(() => {
        setIsLoading(true);

        axios
            .get("https://dummyjson.com/products?limit=10&skip=0")
            .then(response => {
                setFeaturedProducts(response.data.products);
            })
            .finally(() => {
                setIsLoading(false);
            })


    }, []);

    if (isLoading) {
        return (
            <div className={styles.wrapper}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    {Array.from({ length: 30 }).map((_, index) => (
                        <Box key={index} sx={{ width: 350 }}>
                            <Skeleton variant="rectangular" width={350} height={320} />
                        </Box>
                    ))}
                </Box>
            </div>
        );
    }


    return (
        <div className={styles.wrapper}>
            {category ?
                products.map((item) => (
                    <ProductsListItem
                        key={item.id}
                        {...item}
                    />
                ))
                :
                featuredProducts.map((item) => (
                    <ProductsListItem
                        key={item.id}
                        {...item}
                    />
                ))
            }
        </div>
    )
}

export default ProductsList