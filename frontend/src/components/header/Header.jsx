import { Link } from 'react-router-dom'
import { Logo } from '../logo/Logo'
import styles from './styles/Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__left}>
          <div className={styles.button__container}>
            <button className={styles.button_blue}>Начать проект с easy</button>
            <button className={styles.button_grey}>Контакты</button>
          </div>
          <div className={styles.header__phone}>+7 (913) 715 — 6372</div>
        </div>
        <div className={styles.header__logo}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className={styles.header__link}>
          <Link to="/about">О нас</Link>
          <Link to="/cases">Кейсы</Link>
          <Link to="/services">Экспертность</Link>
          <Link to="/vacancy">Вакансии</Link>
        </div>
      </div>
    </header>
  )
}
