import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { getServices } from '../../api/service/getServices'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import { motion } from 'framer-motion'
import { containerVariants } from '../../animations/variants'
import styles from './styles/Services.module.scss'

export const ServicesPage = () => {
  const [services, setServices] = useState({
    count: 0,
    next: null,
    previous: null,
    results: [],
  })

  useEffect(() => {
    getServices().then((res) => {
      setServices(res)
    })
  }, [])

  const containersRef = useRef([])
  useScrollAnimation(containersRef, 0.1, styles.visible)

  return (
    <main className={styles.main}>
      <section className={styles.service}>
        <motion.h1
          className={styles.service__title}
          variants={containerVariants}
          custom={2}
          initial="initial"
          animate="animate"
        >
          Экспертность
        </motion.h1>
        <motion.ul
          className={styles.service__container}
          variants={containerVariants}
          custom={3}
          initial="initial"
          animate="animate"
        >
          {services.results ? (
            services.results.map((elem, index) => (
              <Link to={`/services/${elem.id}`} state={elem} key={elem.id}>
                <li>
                  <div
                    className={styles.service__item}
                    style={{ backgroundImage: `url("${elem.photo}"` }}
                    ref={(el) => (containersRef.current[index] = el)}
                  >
                    <svg
                      className={styles.service__svg}
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect rx="15" fillOpacity="0.09" />
                      <path d="M18.2669 20L21.6932 15.3862H15L19.7211 10H21.7729L18.3068 13.8462H25L20.3187 20H18.2669Z" />
                      <path d="M9.79254 20C8.42502 20 7.28127 19.522 6.36131 18.5659C5.45377 17.5969 5 16.4083 5 15C5 13.5917 5.45377 12.4096 6.36131 11.4535C7.26884 10.4845 8.37529 10 9.68065 10C11.0606 10 12.1608 10.5039 12.9814 11.5116C13.8143 12.5065 14.2308 13.8049 14.2308 15.407H6.65967C6.73427 16.3114 7.06993 17.0413 7.66667 17.5969C8.27584 18.1525 8.98446 18.4302 9.79254 18.4302C10.8617 18.4302 11.7692 18.0426 12.5152 17.2674L13.5408 18.4302C12.5835 19.4767 11.3341 20 9.79254 20ZM9.58741 11.531C8.95338 11.531 8.36286 11.7377 7.81585 12.1512C7.26884 12.5517 6.91453 13.1525 6.75291 13.9535H12.4219C12.31 13.1783 11.993 12.5775 11.4709 12.1512C10.9487 11.7248 10.3209 11.5181 9.58741 11.531Z" />
                    </svg>
                    <div className={styles.service__heading}>{elem.name}</div>
                  </div>
                </li>
              </Link>
            ))
          ) : (
            <div>Данные скоро появятся</div>
          )}
        </motion.ul>
      </section>
    </main>
  )
}
