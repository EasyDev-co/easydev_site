/* eslint-disable jsx-a11y/anchor-is-valid */
import { Logo } from '../logo/Logo'
import { OriginButton } from '../buttons/origin-button/OriginButton'
import BlueButton from '../buttons/BlueButton/BlueButton'
import { NavLinks } from '../nav-links/NavLinks'
import { Link } from 'react-router-dom'
import styles from './styles/Footer.module.scss'
import easydevPdf from '../../assets/files/easydev.pdf'

export const Footer = () => {
  const TelegramUrl = "https://t.me/easydev_egor"
  const WhatsAppUrl = "https://wa.me/79108223226"

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
            <a href={ TelegramUrl } aria-label="Telegram">
              Telegram
            </a>
            <a href={ WhatsAppUrl } aria-label="WhatsApp">
              WhatsApp
            </a>
          </div>
        </div>
        <div className={styles.footer__buttons}>
          <OriginButton
            text={'Скачать презентацию'}
            onClick={() => {
              const link = document.createElement('a');
              link.href = easydevPdf; // Указываем путь к PDF файлу
              link.download = 'easydev.pdf'; // Указываем имя файла при скачивании
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          />
          <BlueButton
            text={'Связаться с нами'}
            onClick={() => window.open(TelegramUrl, '_blank')}
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
