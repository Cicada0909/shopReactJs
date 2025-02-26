import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


const Product = () => {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(response => setProduct(response.data))
            .finally(() => setIsLoading(false));

            
    }, [id]);

    console.log(product);
    return (
        <div>Product</div>
    )
}

export default Product