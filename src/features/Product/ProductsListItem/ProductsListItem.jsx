import Button from '../../../components/ui/Button/Button'
import ProductCard from '../../../components/ui/Button/ProductCard/ProductCard'
import { CART } from '../../../constants/constants'
import { useCart } from '../../../contexts/CartContext/CartContext'
import styles from './ProductsListItem.module.css'

const ProductsListItem = ({
    cardImage,
    title,
    description,
    price,
    id,
    isInCart,
}) => {
    const { cart, addToCart, addToFavorite } = useCart()

    console.log(cart)

    const formattedPrice = Number(price.toFixed(2))

    return (
        <ProductCard
            cardImage={cardImage}
            title={title}
            description={description}
            price={formattedPrice}
            id={id}
            hadleAddToCart={() => addToCart({ id, price, title, cardImage })}
            hadleAddToFavorite={() =>
                addToFavorite({ id, price, title, cardImage })
            }
        />
    )
}

export default ProductsListItem
