import { Link } from 'react-router-dom'
import { Logo } from '../logo/Logo'
import styles from './styles/Header.module.scss'
import { ShowMenuButton } from '../buttons/show-menu-button/ShowMenuButton'
import { useState } from 'react'
import { Menu } from '../modals/menu/Menu'
import { useWindowWidth } from '@react-hook/window-size'

export const Header = ({ setIsOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const width = useWindowWidth()

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <div className={styles.header__left}>
            <div className={styles.header__buttons}>
              <button>Начать проект с easy</button>
              <button onClick={() => setIsOpen(true)}>Контакты</button>
            </div>
            <div className={styles.header__phone}>+7 (913) 715 — 6372</div>
          </div>
          <div className={styles.header__logo}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <Logo />
            </Link>
          </div>
          <div className={styles.header__nav}>
            <Link to="/about">О нас</Link>
            <Link to="/cases">Кейсы</Link>
            <Link to="/services">Экспертность</Link>
            <Link to="/vacancy">Вакансии</Link>
          </div>
          {width < 1366 && (
            <ShowMenuButton isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
          )}
        </div>
      </header>
      {isMenuOpen && <Menu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />}
    </>
  )
}
