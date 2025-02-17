import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router'
import styles from "./PageLayout.module.css"

const PageLayout = () => {
  return (
    <div className={styles.wrapper}>
        <Header />
        
        <div className={styles.contentWrapper}>
            <Sidebar />
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>

        <footer>Footer</footer>

    </div>
  )
}

export default PageLayout