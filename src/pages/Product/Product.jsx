import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import ProductDetails from '../../features/Product/ProductDetails/ProductDetails'

const Product = () => {
    const { id } = useParams({})

    const [product, setProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios
            .get(`https://dummyjson.com/products/${id}`)
            .then((response) => setProduct(response.data))
            .finally(() => setIsLoading(false))
    }, [id])

    if (isLoading) {
        return <CircularProgress />
    }

    return (
        <div>
            <ProductDetails {...product} />
        </div>
    )
}

export default Product
