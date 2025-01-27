/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'
import { menu } from '../../../mockData/menuItems'
import styles from './styles/Menu.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Contacts } from '../contacts/Contacts'

export const Menu = ({ isOpen, setIsOpen }) => {
  const [isContactsOpen, setIsContactsOpen] = useState(false)
  const TelegramUrl = "https://t.me/easydev_egor"
  const WhatsAppUrl = "https://wa.me/79108223226"

  const contactOpen = () => {
    setIsOpen(false)
    setIsContactsOpen(true)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.inner}>
          <div className={styles.menu}>
            {menu.map((item) =>
              item.title === 'Контакты' ? (
                <div className={styles.menu__items} key={item.id}>
                  <button
                    style={{ all: 'unset' }}
                    onClick={() => {
                        setIsContactsOpen(true); // Затем открываем контакты после завершения анимации
                    }}
                  >
                    <h3 className={styles.menu__heading}>{item.title}</h3>
                  </button>
                  <span className={styles.menu__num}>{item.id}</span>
                </div>
              ) : (
                <div className={styles.menu__items} key={item.id}>
                  <Link to={item.path} onClick={() => setIsOpen(false)}>
                    <h3 className={styles.menu__heading}>{item.title}</h3>
                  </Link>
                  <span className={styles.menu__num}>{item.id}</span>
                </div>
              ),
            )}
            <div className={styles.menu__contacts}>
              {/* Добавить ссылки на соцсети */}
              <a href={ TelegramUrl } aria-label="TELEGRAM">
                TELEGRAM
              </a>
              <a href={ WhatsAppUrl } aria-label="WHATSAPP">
                WHATSAPP
              </a>
              <a href="mailto:info@easy-dev.tech" aria-label="EMAIL">
                EMAIL
              </a>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isContactsOpen && (
          <Contacts isOpen={isContactsOpen} setIsOpen={setIsContactsOpen} />
        )}
      </AnimatePresence>
    </>
  )
}
