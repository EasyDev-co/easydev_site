import { Link } from 'react-router-dom'
import styles from './styles/NavLinks.module.scss'
import { menu } from '../../mockData/menuItems'

export const NavLinks = () => {
  return (
    <ul className={styles.nav__links}>
      {menu.slice(0, 4).map((item) => (
        <li key={item.id}>
          <Link to={item.path} data-hover={item.title}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
