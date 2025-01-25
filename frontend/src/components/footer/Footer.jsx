/* eslint-disable jsx-a11y/anchor-is-valid */
import { Logo } from '../logo/Logo'
import { OriginButton } from '../buttons/origin-button/OriginButton'
import BlueButton from '../buttons/BlueButton/BlueButton'
import { NavLinks } from '../nav-links/NavLinks'
import { Link } from 'react-router-dom'
import styles from './styles/Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__logo}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className={styles.footer__links}>
          <div>
            <NavLinks />
          </div>
          <div>
            <a href="mailto:info@easy-dev.tech" aria-label="Vkontakte">
              Email
            </a>
            <a href="https://t.me/easydev_egor" aria-label="Telegram">
              Telegram
            </a>
            <a href="https://wa.me/79108223226" aria-label="WhatsApp">
              WhatsApp
            </a>
          </div>
        </div>
        <div className={styles.footer__buttons}>
          <OriginButton
            text={'Скачать презентацию'}
            onClick={() => console.log('Скачать презентацию')}
          />
          <BlueButton
            text={'Связаться с нами'}
            onClick={() => console.log('Добавить возможность связаться!')}
          />
        </div>
      </div>
      <div className={styles.footer__info}>
        <span>©2021-2025 EASY-DEV.TECH</span>
        <span>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</span>
      </div>
    </footer>
  )
}
