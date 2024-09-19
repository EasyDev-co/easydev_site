import { Logo } from '../logo/Logo'
import { OriginButton } from '../buttons/origin-button/OriginButton'
import BlueButton from '../buttons/BlueButton/BlueButton'
import { NavLinks } from '../nav-links/NavLinks'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { containerVariants } from '../../animations/variants'
import { socials } from '../../mockData/socials'
import { menu } from '../../mockData/menuItems'
import styles from './styles/Footer.module.scss'

export const Footer = () => {
  const { pathname } = useLocation()

  return (
    <motion.footer
      className={styles.footer}
      variants={containerVariants}
      custom={5}
      initial="initial"
      animate="animate"
      key={pathname}
    >
      <div className={styles.footer__container}>
        <div className={styles.footer__logo}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className={styles.footer__links}>
          <div>
            <NavLinks links={menu} />
          </div>
          <div>
            <NavLinks links={socials} />
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
        <span>©2024 EASYDEV.SITE</span>
        <span>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</span>
        <span>
          DESIGN BY
          <a href="https://t.me/ivantaskayev"> IVAN TASKAYEV</a>
        </span>
      </div>
    </motion.footer>
  )
}
