import { Outlet } from 'react-router-dom'
// import { Header } from '../header/Header'
import styles from './styles/Layout.module.scss'

export const Layout = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      {/* <Header /> */}
      <Outlet />
    </div>
  </div>
)
