import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from 'axios';
import ProductsListItem from "../ProductsListItem/ProductsListItem";
import styles from "./ProductsList.module.css"
import { Skeleton, Box, Pagination } from "@mui/material";



export const ProductsList = () => {
    const { category } = useParams();

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [page, setPage] = useState(1);
    const LIMIT = 9;
    const [totalPages, setTotalPages] = useState();

    useEffect(() => {
        setPage(1);
    }, [category]);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://dummyjson.com/products/category/${category}`)
            .then(response => {
                const totalProducts = response.data.total;
                setTotalPages(Math.ceil(totalProducts / LIMIT));
            })

        const url = category
            ? `https://dummyjson.com/products/category/${category}?limit=${LIMIT * page}&skip=${(page - 1) * LIMIT}`
            : "https://dummyjson.com/products?limit=9&skip=0";

        axios.get(url)
            .then(response => setProducts(response.data.products))
            .finally(() => setIsLoading(false));
    }, [category, page]);

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

    const handleChangePage = (_, value) => {
        setPage(value);
    };


    return (
        <div>
            <div className={styles.wrapperContent}>
                {products.map(item => (
                    <ProductsListItem
                        key={item.id}
                        {...item}
                        cardImage = {item.thumbnail}
                    />
                ))}
            </div>

            <div className={styles.wrapperPagination}>
                {totalPages > 1 && (
                    <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
                        <Pagination
                            count={totalPages}
                            page={page}
                            onChange={handleChangePage}
                            color="primary"
                            showFirstButton
                            showLastButton
                        />
                    </Box>
                )}
            </div>

        </div>




    );
}

export default ProductsList