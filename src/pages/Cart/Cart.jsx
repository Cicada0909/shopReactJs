import React, { useEffect, useState } from 'react'
import { CART } from '../../constants/constants'
import styles from './Cart.module.css'
import ProductCard from '../../components/ui/Button/ProductCard/ProductCard'
import Button from '../../components/ui/Button/Button'
import axios from 'axios'
import { Typography } from '@mui/material'

export const Cart = () => {
    const cart = JSON.parse(localStorage.getItem(CART)) || [];

    // const hadleBuyToCart = async () => {


    //     const response = await fetch(`https://dummyjson.com/carts/add`, {
    //         method: "POST",
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             userId: 1,
    //             products: cart,
    //         }),
    //     });


    // }
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let totalSum = 0;
        cart.forEach((item) => {
            const totalPriceProduct = item.quantity * item.price;
            totalSum += totalPriceProduct;
        })
        setTotalPrice(totalSum)
        // console.log(totalPrice);
        
    }, [cart]);
    

    const hadleBuyToCart = async () => {
        try {
            const response = await axios.post("https://dummyjson.com/carts/add", {
                userId: 1,
                products: cart,
            });
            // console.log(response);
            
        } catch (e) {

        }
    };


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
