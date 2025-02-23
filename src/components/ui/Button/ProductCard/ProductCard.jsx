import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import Button from '../Button'
import styles from './ProductCard.module.css'



const ProductCard = ({
    cardImage,
    title,
    description,
    price,
    hadleAddToCart,
    isInCart,
    quantity,
}) => {

    
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