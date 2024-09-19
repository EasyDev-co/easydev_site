import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'
import { useEffect, useState } from 'react'
import { Contacts } from '../modals/contacts/Contacts'
import { Logo } from '../logo/Logo'
import { AnimatePresence, motion } from 'framer-motion'
import { Breadcrumbs } from '../breadcrumbs/Breadcrumbs'
import { ScrollToTop } from '../scroll-to-top/ScrollToTop'
import styles from './styles/Layout.module.scss'

export const Layout = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeroVisible(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <ScrollToTop />
      {isHeroVisible && pathname === '/' && (
        <motion.div
          className={styles.hero}
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: 0,
            scale: 0,
          }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 1.5 }}
        >
          <Logo isPromo={true} />
        </motion.div>
      )}
      <AnimatePresence>
        {isModalOpen && (
          <Contacts isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        )}
      </AnimatePresence>
      <Header setIsOpen={setIsModalOpen} />
      <div
        className={pathname === '/' ? styles.mainContainer : styles.container}
      >
        {pathname !== '/' && <Breadcrumbs />}
        <Outlet />
      </div>
      {pathname !== '/' && <Footer />}
    </>
  )
}
