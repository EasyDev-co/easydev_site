/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'
import { Logo } from '../logo/Logo'
import { menu } from '../../mockData/menuItems'
import styles from './styles/Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__logo}>
          <Logo />
        </div>
        <div className={styles.footer__links}>
          <div>
            {menu.slice(0, 3).map((item) => (
              <Link to={item.path} key={item.id}>
                {item.title}
              </Link>
            ))}
          </div>
          <div>
            {/* Добавить ссылки на соцсети */}
            <a href="#" aria-label="Vkontakte">
              Vkontakte
            </a>
            <a href="#" aria-label="Telegram">
              Telegram
            </a>
            <a href="#" aria-label="WhatsApp">
              WhatsApp
            </a>
            <a href="#" aria-label="Instagram">
              Instagram
            </a>
          </div>
        </div>
        <div className={styles.footer__buttons}>
          <button>Скачать презентацию</button>
          <button>Связаться с нами</button>
        </div>
      </div>
      <div className={styles.footer__info}>
        <span>©2024 EASYDEV.SITE</span>
        <span>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</span>
        <span>DESIGN BY IVAN TASKAYEV</span>
      </div>
    </footer>
  )
}
