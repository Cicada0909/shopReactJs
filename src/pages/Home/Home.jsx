import React, { useContext } from 'react'
import ProductsList from '../../features/Product/ProductsList/ProductsList'
import { CustomThemeProvider } from '../../contexts/CustomThemeProvider/CustomThemeProvider';
import styles from './Home.module.css'

const Home = () => {
    // const theme = useContext(CustomThemeProvider);

    // console.log(theme);
    
    return (
        <div className={styles.wrapper}>
            <ProductsList />
        </div>
    )
}

export default Home