import React, { useEffect, useState } from 'react'
import { CART } from '../../constants/constants'
import styles from './Cart.module.css'
import ProductCard from '../../components/ui/Button/ProductCard/ProductCard'
import Button from '../../components/ui/Button/Button'
import axios from 'axios'
import { Typography } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import ProductsList from '../../features/Product/ProductsList/ProductsList'
import { useCart } from '../../contexts/CartContext/CartContext'


export const Cart = () => {
    
    const {cart, decreseItemFromCart, increaseItemInCart, removeItemFromCart } = useCart();

    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("search") || ""

    useEffect(() => {
        setSearchParams({});
    }, []);

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let totalSum = 0;
        cart.forEach((item) => {
            const totalPriceProduct = item.quantity * item.price;
            totalSum += totalPriceProduct;
        })
        setTotalPrice(totalSum.toFixed(2))
        // console.log(totalPrice);
        
    }, [cart]);

    const hadleBuyToCart = async () => {
        try {
            const response = await axios.post("https://dummyjson.com/carts/add", {
                userId: 1,
                products: cart,
            });
            console.log(response);
            
        } catch (e) {

        }
    };

    if (search) {
        return <ProductsList />;
    }


    return (
        
        <div className={styles.wrapper}>
            <div className={styles.cart__items}>
                {cart.map(item => (
                    <ProductCard
                        key={item.id}
                        isInCart={true}
                        title={item.title}
                        cardImage={item.cardImage}
                        quantity={item.quantity}
                        price={item.price}
                        hadleDelToCart={() => decreseItemFromCart(item.id)}
                        handleIncreaseCart={() => increaseItemInCart(item.id)}
                        handleRemoveCart={() => removeItemFromCart(item.id)}
                    />
                ))}
            </div>

            <div className={styles.cart__actions}>
                <Button className={styles.card__button} size='large' variant='outlined' onClick={hadleBuyToCart}>Buy</Button>
                <Typography variant="h6">TOTAL: {totalPrice} $</Typography>
            </div>
        </div>
    )
}
