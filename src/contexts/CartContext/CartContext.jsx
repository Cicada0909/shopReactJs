import { createContext, useContext, useEffect, useState } from 'react'
import { CART, FAVORITE } from '../../constants/constants'

const CartContext = createContext(undefined)

export const CartProvider = ({ children }) => {
    const getCart = () => {
        const cartLS = localStorage.getItem(CART)

        console.log(cartLS)

        return cartLS ? JSON.parse(cartLS) : []
    }

    const getFavorite = () => {
        const favoriteLS = localStorage.getItem(FAVORITE)

        console.log(favoriteLS)

        return favoriteLS ? JSON.parse(favoriteLS) : []
    }

    const [cart, setCart] = useState(getCart())

    const [favorite, setFavorite] = useState(getFavorite())

    const updateLocalStorage = (updatedCart) => {
        localStorage.setItem(CART, JSON.stringify(updatedCart))
    }

    const updateLocalStorageFavorite = (updatedFavorite) => {
        localStorage.setItem(FAVORITE, JSON.stringify(updatedFavorite))
    }

    const addToCart = (product) => {
        if (!product) {
            return
        }

        setCart((prev) => {
            const existingItem = prev.find((item) => item.id === product.id)
            let updatedCart

            if (existingItem) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            } else {
                updatedCart = [...prev, { ...product, quantity: 1 }]
            }

            updateLocalStorage(updatedCart)
            return updatedCart
        })
    }

    const addToFavorite = (product) => {
        if (!product) {
            return
        }

        setFavorite((prev) => {
            const existingItem = prev.find((item) => item.id === product.id)
            let updatedFavorite

            if (existingItem) {
                return prev
            } else {
                updatedFavorite = [...prev, { ...product }]
            }

            updateLocalStorageFavorite(updatedFavorite)
            return updatedFavorite
        })
    }

    const removeItemFromCart = (id, isFavorite) => {
        if (isFavorite) {
            setFavorite((prev) => {
                return prev.filter((item) => item.id !== id)
            })
        } else {
            setCart((prev) => {
                return prev.filter((item) => item.id !== id)
            })
        }
    }

    const decreseItemFromCart = (id) => {
        setCart((prev) => {
            const updatedCart = prev
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
            console.log('132')

            updateLocalStorage(updatedCart)

            return updatedCart
        })
    }

    const increaseItemInCart = (id) => {
        setCart((prev) => {
            const updatedCart = prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )

            updateLocalStorage(updatedCart)

            return updatedCart
        })
    }

    const removeAllLocalStorage = (isFavorite) => {
        if (isFavorite) {
            localStorage.removeItem(FAVORITE)
            setFavorite([])
        } else {
            localStorage.removeItem(CART)
            setCart([])
        }
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                decreseItemFromCart,
                increaseItemInCart,
                removeItemFromCart,
                addToFavorite,
                favorite,
                removeAllLocalStorage,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error('useCart должен быть внутри CartProvider')
    }

    return context
}
