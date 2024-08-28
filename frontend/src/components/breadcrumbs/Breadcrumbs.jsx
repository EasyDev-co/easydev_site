import styles from './styles/Breadcrumbs.module.scss'
import { Link } from 'react-router-dom'

export const Breadcrumbs = () => {
  return (
    <div className={styles.breadcrumbs}>
      <Link to="/">ГЛАВНАЯ</Link>
      <span>КЕЙСЫ</span>
    </div>
  )
}
