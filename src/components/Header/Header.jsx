import logo from '../../assets/icons/logo.svg'

import heart from '../../assets/icons/heart_icon.svg'

import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { pageRoutes } from '../../constants/pageRoutes'
import useCounter from '../../hooks/useCounter/useCounter'
import { useState } from 'react'
import useDebounce from '../../hooks/useDebounce/useDebounce'
import Search from '../Search/Search'


const Header = () => {


  
  
  

  return (
    <header className={styles.header}>
      <Link to={pageRoutes.commonRoutes.home}><img src={logo} alt="logo" /></Link>

      <div className={styles.wrapper__search}>
        <Search />
      </div>

      <div className={styles.wrapper__btns}>
        <Link to={pageRoutes.cartRoutes.cart} className={styles.btn}><img src={heart} alt="cart" /></Link>
        <Link to={pageRoutes.favoritesRoutes.favorites} className={styles.btn}><img src={heart} alt="heart" /></Link>
      </div>
    </header>
  )
}

export default Header