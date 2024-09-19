import { Link } from 'react-router-dom'
import styles from './styles/NavLinks.module.scss'

export const NavLinks = ({ links }) => {
  return (
    <ul className={styles.nav__links}>
      {links.slice(0, 4).map((item) => (
        <li key={item.id}>
          <Link to={item.path} data-hover={item.title}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
