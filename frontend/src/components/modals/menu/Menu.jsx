/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'
import { menu } from '../../../mockData/menuItems'
import styles from './styles/Menu.module.scss'

export const Menu = ({ setIsOpen }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.inner}>
        <div className={styles.menu}>
          {menu.map((item) => (
            <div className={styles.menu__items} key={item.id}>
              <Link to={item.path} onClick={() => setIsOpen(false)}>
                <h3 className={styles.menu__heading}>{item.title}</h3>
              </Link>
              <span className={styles.menu__num}>{item.id}</span>
            </div>
          ))}
          <div className={styles.menu__contacts}>
            {/* Добавить ссылки на соцсети */}
            <a href="#" aria-label="VKONTAKTE">
              VKONTAKTE
            </a>
            <a href="#" aria-label="INSTAGRAM">
              INSTAGRAM
            </a>
            <a href="#" aria-label="TELEGRAM">
              TELEGRAM
            </a>
            <a href="#" aria-label="WHATSAPP">
              WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
