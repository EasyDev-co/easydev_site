import { Link } from 'react-router-dom'
import { Logo } from '../logo/Logo'
import { ShowMenuButton } from '../buttons/show-menu-button/ShowMenuButton'
import { useState } from 'react'
import { Menu } from '../modals/menu/Menu'
import { useWindowWidth } from '@react-hook/window-size'
import { OriginButton } from '../buttons/origin-button/OriginButton'
import BlueButton from '../buttons/BlueButton/BlueButton'
import { NavLinks } from '../nav-links/NavLinks'
import { motion } from 'framer-motion'
import styles from './styles/Header.module.scss'

export const Header = ({ setIsOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const width = useWindowWidth()

  return (
    <>
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: '-100%' }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 1, ease: 'easeInOut', delay: 1 }}
      >
        <div className={styles.header__container}>
          <div className={styles.header__left}>
            <div className={styles.header__buttons}>
              <BlueButton
                text={'Начать проект с easy'}
                onClick={() => console.log('Начать проект!')}
              />
              <OriginButton text={'Контакты'} onClick={() => setIsOpen(true)} />
            </div>
            <div className={styles.header__phone}>+7 (913) 715 — 6372</div>
          </div>
          <div className={styles.header__logo}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <Logo />
            </Link>
          </div>
          <div className={styles.header__nav}>
            <NavLinks />
          </div>
          {width < 1366 && (
            <ShowMenuButton isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
          )}
        </div>
      </motion.header>
      {isMenuOpen && <Menu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />}
    </>
  )
}
