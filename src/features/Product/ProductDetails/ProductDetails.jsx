import {
    Card,
    Button,
    CardContent,
    CardActions,
    Typography,
    Table,
    TableRow,
    TableCell,
} from '@mui/material'
import Grid from '@mui/material/Grid2'
import styles from './ProductDetails.module.css'
import { useCart } from '../../../contexts/CartContext/CartContext'
import useMediaQuery from '@mui/material/useMediaQuery'

const ProductDetails = (product) => {
    const { addToCart } = useCart()

    const isDesktop = useMediaQuery('(min-width:992px)')

    const buttonStyles = {
        fontSize: '1.5rem',
        width: isDesktop ? '50%' : '100%',
        margin: 'auto',
    }

    const imageStyles = {
        maxWidth: '100%',
    }

    return (
        <Card sx={{ padding: 4 }}>
            <CardContent>
                <Typography variant="h3">{product.title}</Typography>
                <Grid spacing={2} sx={{ marginTop: '16px' }} container>
                    <Grid size={{ md: 6, xs: 12 }}>
                        <img
                            style={imageStyles}
                            src={product.images?.[0]}
                            alt={product.title}
                        />
                    </Grid>
                    <Grid
                        sx={{
                            justifyContent: 'space-between',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                        size={{ md: 6, xs: 12 }}
                        gap={2}
                    >
                        <div>
                            <Typography
                                sx={{
                                    fontSize: '1.4rem',
                                    marginBottom: '8px',
                                    fontWeight: 700,
                                }}
                            >
                                Description
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '1.2rem',
                                    fontWeight: '400',
                                    marginBottom: '8px',
                                }}
                                variant="subtitle2"
                            >
                                {product.description}
                            </Typography>
                        </div>
                        <div>
                            <Typography
                                sx={{
                                    fontSize: '1.4rem',
                                    marginBottom: '8px',
                                    fontWeight: 700,
                                }}
                            >
                                Other
                            </Typography>
                            <Table>
                                {product.rating && (
                                    <TableRow>
                                        <TableCell>Rating</TableCell>
                                        <TableCell>{product.rating}</TableCell>
                                    </TableRow>
                                )}
                                {product.brand && (
                                    <TableRow>
                                        <TableCell>Brand</TableCell>
                                        <TableCell>{product.brand}</TableCell>
                                    </TableRow>
                                )}
                                {product.price && (
                                    <TableRow>
                                        <TableCell>Price</TableCell>
                                        <TableCell>{product.price}</TableCell>
                                    </TableRow>
                                )}
                                {product.warrantyInformation && (
                                    <TableRow>
                                        <TableCell>Warranty</TableCell>
                                        <TableCell>
                                            {product.warrantyInformation}
                                        </TableCell>
                                    </TableRow>
                                )}
                            </Table>
                        </div>
                        <CardActions>
                            <Button
                                sx={buttonStyles}
                                size="medium"
                                variant="outlined"
                                onClick={() =>
                                    addToCart({
                                        id: product.id,
                                        price: product.price,
                                        title: product.title,
                                        cardImage: product.images?.[0],
                                    })
                                }
                            >
                                Buy
                            </Button>
                        </CardActions>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        // <div className={styles.wrapper_product_details}>
        //     <img className={styles.product_details__img} src={product.images?.[0]} alt={product.title} />
        //     <div className={styles.product_details__items}>
        //         <h3 className={styles.product_details__title}>{product.title}</h3>
        //         <div className={styles.product_details__desctiption}>
        //             <h3 className={styles.product_details__desctiption_title}>Description</h3>
        //             <p className={styles.product_details__desctiption_text}>{product.description}</p>
        //         </div>
        //         <div className={styles.product_details__info}>
        //             <h3 className={styles.product_details__info_title}>Other</h3>
        //             <ul className={styles.product_details__list}>
        //                 <li className={styles.product_details__info_item}>rating: {product.rating}</li>
        //                 <li className={styles.product_details__info_item}>brand: {product.brand}</li>
        //                 <li className={styles.product_details__info_item}>price: {product.price}$</li>
        //                 <li className={styles.product_details__info_item}>{product.warrantyInformation}</li>
        //             </ul>
        //         </div>
        // <Button sx={buttonStyles} size='large' variant='outlined' onClick={() =>
        //     addToCart({
        //         id: product.id,
        //         price: product.price,
        //         title: product.title,
        //         cardImage:
        //         product.images?.[0]})}>
        //         Buy
        //         </Button>

        //     </div>
        // </div>
    )
}

export default ProductDetails
