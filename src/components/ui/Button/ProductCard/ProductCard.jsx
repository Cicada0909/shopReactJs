import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import Button from '../Button'
import styles from './ProductCard.module.css'
import { CART } from '../../../../constants/constants'


const ProductCard = ({
    cardImage,
    title,
    description,
    price,
    id,
    isInCart,
    quantity,
}) => {

    const getCart = () => {
        const cart = localStorage.getItem(CART);

        return cart ? JSON.parse(cart) : [];
    }
    
        const hadleAddToCart = () => {
            const cart = getCart();
            
            const product = {
                id,
                price,
                title,
                quantity: 1,
                cardImage,
                isInCart,
            }
            
            const foundedItem = cart.find((item) => item.id === product.id);

            if (foundedItem) {
                foundedItem.quantity += 1;
            } else {
                cart.push(product);
            }

            localStorage.setItem(CART, JSON.stringify(cart));
        }
    return (
        <Card className={styles.card}>
            <CardMedia
                className={styles.card__image}
                image={cardImage}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom component={'div'}>
                    {title}
                </Typography>
                <Typography>
                    {description}
                </Typography>
            </CardContent>
            {isInCart && <div className={styles.card__items}><Typography gutterBottom component={'div'}>Quantity: {quantity}</Typography>
            <Typography gutterBottom component={'div'}>Total: {quantity * price} $</Typography> </div>}

            {!isInCart && <CardActions>
                <Button size='small'  onClick={hadleAddToCart}>Buy {price}$</Button>
                <Button size='small' variant='text' >Save</Button>
            </CardActions>}
        </Card>
    )
}

export default ProductCard