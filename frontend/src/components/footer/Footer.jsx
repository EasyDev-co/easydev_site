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
        <span>©2020-2025 EASYDEV.SITE</span>
        <span>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</span>
      </div>
    </footer>
  )
}
