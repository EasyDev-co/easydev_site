import { Outlet } from 'react-router-dom'
import { Header } from '../header/Header'
import styles from './styles/Layout.module.scss'

export const Layout = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  )
}
