/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react'
import { ShowMenuButton } from '../../buttons/show-menu-button/ShowMenuButton'
import { motion } from 'framer-motion'
import { modalVariants } from '../../../animations/variants'
import styles from './styles/Contacts.module.scss'

export const Contacts = ({ isOpen, setIsOpen }) => {
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
    <motion.div
      className={styles.modal}
      variants={modalVariants}
      initial="initial"
      animate="animate"
    >
      <div className={styles.inner}>
        <div className={styles.contacts__header}>
          <ShowMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <div className={styles.contacts}>
          <h1 className={styles.contacts__title}>
            Связаться с нами
            <br /> {/* Добавить ссылки на соцсети */}
            <a href="#">@easydev</a>
          </h1>
          <div className={styles.contacts__container}>
            <div className={styles.contacts__info}>
              <div className={styles.contacts__address}>
                г. Казань, ул. Островского, 87
                <br /> +7 (913) 715 -6372
              </div>
              <div className={styles.contacts__items}>
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="20" height="20" rx="10" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.80096 7.10919L11.5705 10.8787L11.5705 7.45442L12.5469 7.45442L12.5469 12.5456L7.45574 12.5456L7.45574 11.5692L10.88 11.5692L7.11052 7.79964L7.80096 7.10919Z"
                  />
                </svg>
                <div>КОНТАКТНЫЕ ДАННЫЕ</div>
              </div>
            </div>
            <img
              className={styles.contacts__img}
              src="/img/contact_photo.jpg"
              alt="Kazan"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
