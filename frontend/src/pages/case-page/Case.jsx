import { useLocation } from 'react-router-dom'
import BlueButton from '../../components/buttons/BlueButton/BlueButton'
import AccordionCases from '../../components/Accordions/AccordionCases'
import { useRef } from 'react'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import { motion } from 'framer-motion'
import styles from './styles/Case.module.scss'
import { containerVariants } from '../../animations/variants'

export const CasePage = () => {
  const location = useLocation()
  const { name, images } = location.state || {}

  const containersRef = useRef([])

  useScrollAnimation(containersRef, 0.1, styles.visible)

  return (
    <main className={styles.main}>
      <section className={styles.case}>
        <motion.div
          className={styles.case__titleContainer}
          variants={containerVariants}
          custom={2}
          initial="initial"
          animate="animate"
        >
          <h1 className={styles.case__title}>{name}</h1>
          <BlueButton text={'Посетить сайт'} />
        </motion.div>
        <motion.div
          className={styles.case__box}
          variants={containerVariants}
          custom={3}
          initial="initial"
          animate="animate"
        >
          <div className={styles.case__accordion}>
            <AccordionCases isCase data={location.state} />
          </div>
          <motion.div className={styles.case__images}>
            {images.map((image, i) => {
              return (
                <motion.div
                  className={styles.case__image}
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
