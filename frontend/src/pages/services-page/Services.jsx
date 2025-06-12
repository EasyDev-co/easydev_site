import { Link } from 'react-router-dom'
import { useWindowWidth } from '@react-hook/window-size'
import styles from './styles/Services.module.scss'
import { useEffect, useState } from 'react'
import { getServices } from '../../api/service/getServices'
import transition from '../../animations/transition'
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs'
import { motion } from 'framer-motion'

const ServicesPage = () => {
  const fadeUpAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }
  const width = useWindowWidth();
  const [services, setServices] = useState({
    "count": 0,
    "next": null,
    "previous": null,
    "results": []
  })
  useEffect(() => {
    getServices()
      .then(res => {
        setServices(res)
      })
  }, [])

  return (
    <main className={styles.main}>
      <section className={styles.service}>
      <Breadcrumbs 
        items={[
          { label: width < 480 ? 'HOME' : 'ГЛАВНАЯ', path: '/' },
          { label: 'УСЛУГИ', path: '/services' }
        ]} 
      />

        {/* <div className={styles.breadcrumbs}>
          {width < 480 ? 'HOME' : 'ГЛАВНАЯ'} / <span>УСЛУГИ</span>
        </div> */}
        <motion.h1 
          className={styles.service__title}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          variants={fadeUpAnimation}
          >
          Услуги
          </motion.h1>
        <motion.ul className={styles.service__wrapp}>
          {services.results?.map((elem) => (
            <div key={elem.id} style={{backgroundImage: `url("${elem.photo}"`}} className={styles.service__container}>
              <div className={styles.service__shield}></div>
              <li>
                <Link to={`/services/${elem.id}`} state={elem}>
                  {elem.name}
                </Link>
              </li>
              <div style={{backgroundImage: `url("${elem.photo}"`}} className={styles.picture_container}>
              </div>
            </div>
          ))}
        </motion.ul>
      </section>
    </main>
  )
}

export default transition(ServicesPage);