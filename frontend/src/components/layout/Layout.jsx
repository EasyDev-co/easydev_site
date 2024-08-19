import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '../header/Header'
import styles from './styles/Layout.module.scss'
import { Footer } from '../footer/Footer'
import { useState } from 'react'
import { Contacts } from '../modals/contacts/Contacts'

export const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <>
      {isModalOpen && (
        <Contacts isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
      <Header setIsOpen={setIsModalOpen} />
      <div className={styles.container}>
        <Outlet />
      </div>
      {pathname !== '/' && <Footer />}
    </>
  )
}
