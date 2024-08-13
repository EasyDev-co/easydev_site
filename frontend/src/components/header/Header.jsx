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
        <div className={styles.header__nav}>
          <Link to="/about">О нас</Link>
          <Link to="/cases">Кейсы</Link>
          <Link to="/services">Экспертность</Link>
          <Link to="/vacancy">Вакансии</Link>
        </div>
        <div className={styles.header__menuButton}>
          {/* <svg
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.9999 3.56569L5.30978 5.87557L5.87547 5.30988L3.56558 3L5.87547 0.690115L5.30978 0.12443L2.9999 2.43431L0.690018 0.124436L0.124332 0.690121L2.43421 3L0.124333 5.30988L0.690018 5.87556L2.9999 3.56569Z"
            />
          </svg> */}
        </div>
      </div>
    </header>
  )
}
