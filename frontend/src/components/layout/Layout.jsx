import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '../header/Header'
import styles from './styles/Layout.module.scss'
import { Footer } from '../footer/Footer'

export const Layout = () => {
  const { pathname } = useLocation()

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
      {pathname !== '/' && <Footer />}
    </>
  )
}
