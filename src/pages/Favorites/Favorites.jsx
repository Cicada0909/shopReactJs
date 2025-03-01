import { useSearchParams } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext/CartContext'
import ProductsList from '../../features/Product/ProductsList/ProductsList'
import { useEffect, useState } from 'react'
import styles from './Favorites.module.css'
import ProductCard from '../../components/ui/Button/ProductCard/ProductCard'
import { Button, Typography } from '@mui/material'

const Favorites = () => {
    const {
        addToFavorite,
        favorite,
        removeItemFromCart,
        removeAllLocalStorage,
    } = useCart()

    const [searchParams, setSearchParams] = useSearchParams()
    const search = searchParams.get('search') || ''

    useEffect(() => {
        setSearchParams({})
    }, [])

    console.log(favorite)

    if (search) {
        return <ProductsList />
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.favorite__items}>
                {favorite.map((item) => (
                    <ProductCard
                        key={item.id}
                        isInFavorite={true}
                        title={item.title}
                        cardImage={item.cardImage}
                        quantity={item.quantity}
                        price={item.price}
                        handleRemoveCart={() =>
                            removeItemFromCart(item.id, true)
                        }
                    />
                ))}
            </div>

            <div className={styles.favorite__actions}>
                <Button
                    className={styles.favorite__button}
                    size="large"
                    variant="outlined"
                    onClick={() => removeAllLocalStorage(true)}
                >
                    Remove All
                </Button>
            </div>
        </div>
    )
}

export default Favorites
