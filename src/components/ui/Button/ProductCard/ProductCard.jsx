import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material'
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
    hadleDelToCart,
    handleIncreaseCart,
    handleRemoveCart,
    hadleAddToFavorite,
    isInFavorite,
    id,
}) => {
    return (
        <Card className={styles.card}>
            <CardMedia
                className={styles.card__image}
                image={cardImage}
                title={title}
            />
            <CardContent>
                <Typography
                    gutterBottom
                    component={'div'}
                    sx={{ fontWeight: '600' }}
                >
                    {title}
                </Typography>
                <Typography>{description}</Typography>
            </CardContent>
            {isInCart && (
                <div className={styles.card__items}>
                    <div className={styles.card__actions}>
                        <button
                            className={styles.actions__button}
                            size="small"
                            onClick={hadleDelToCart}
                        >
                            –
                        </button>
                        <Typography gutterBottom component={'div'}>
                            Quantity: {quantity}
                        </Typography>
                        <button
                            className={styles.actions__button}
                            size="small"
                            onClick={handleIncreaseCart}
                        >
                            +
                        </button>
                    </div>
                    <Typography gutterBottom component={'div'}>
                        Total: {(quantity * price).toFixed(2)} $
                    </Typography>
                    <Button size="small" onClick={handleRemoveCart}>
                        Delete
                    </Button>
                </div>
            )}

            {!isInFavorite && !isInCart && (
                <CardActions>
                    <Button
                        size="small"
                        onClick={(e) => (e.preventDefault(), hadleAddToCart())}
                    >
                        Buy {price}$
                    </Button>
                    <Button
                        size="small"
                        variant="text"
                        onClick={(e) => (
                            e.preventDefault(), hadleAddToFavorite()
                        )}
                    >
                        Save
                    </Button>
                </CardActions>
            )}

            {isInFavorite && (
                <Button
                    className={styles.Btn_del}
                    size="small"
                    onClick={handleRemoveCart}
                >
                    Delete
                </Button>
            )}
        </Card>
    )
}

export default ProductCard
