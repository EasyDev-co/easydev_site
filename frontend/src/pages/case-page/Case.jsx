import { useLocation } from 'react-router-dom'
import { useWindowWidth } from '@react-hook/window-size'
import BlueButton from '../../components/buttons/BlueButton/BlueButton'
import AccordionCases from '../../components/Accordions/AccordionCases'
import { useRef } from 'react'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import { motion } from 'framer-motion'
import styles from './styles/Case.module.scss'
import { containerVariants } from '../../animations/variants'

export const CasePage = () => {
  const location = useLocation()
  const width = useWindowWidth()
  const { name, images } = location.state || {}

  const containersRef = useRef([])

  useScrollAnimation(containersRef, 0.1, styles.visible)

  return (
    <main className={styles.main}>
      <section className={styles.case}>
        <motion.div
          variants={containerVariants}
          custom={2}
          initial="initial"
          animate="animate"
        >
          <h1 className={styles.case__tittle}>{name}</h1>
          {width > 768 && <BlueButton text={'Посетить наш сайт'} />}
        </motion.div>
        <motion.div
          className={styles.case__item}
          variants={containerVariants}
          custom={3}
          initial="initial"
          animate="animate"
        >
          <div className={styles.case__item__accordion}>
            <AccordionCases isCase data={location.state} />
          </div>
          <motion.div className={styles.case__item__image}>
            {images.slice(1).map((image, i) => {
              return (
                <motion.div
                  key={i}
                  ref={(el) => (containersRef.current[i] = el)}
                >
                  <img src={image.image} alt="" />
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
