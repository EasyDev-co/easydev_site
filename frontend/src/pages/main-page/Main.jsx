import { useEffect, useState } from 'react'
import { useWindowWidth } from '@react-hook/window-size'
import { motion } from 'framer-motion'
import Arrow from '../../components/arrow/Arrow'
import transition from '../../animations/transition'
import styles from './styles/Main.module.scss'
import { Link } from 'react-router-dom'

const MainPage = () => {
  const [localTime, setLocalTime] = useState('')

  const width = useWindowWidth()

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Europe/Moscow',
      }
      const now = new Date().toLocaleTimeString('ru-RU', options)
      setLocalTime(now)
    }

    const intervalId = setInterval(updateTime, 1000)
    updateTime()

    return () => clearInterval(intervalId)
  }, [])

  const containerVariants = {
    initial: { opacity: 0, y: '200%' },
    animate: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeInOut', delay: custom * 0.5 },
    }),
  }

  return (
    <main className={styles.main}>
      <div>
        <motion.section
          className={styles.titleContainer}
          variants={containerVariants}
          custom={3}
          initial="initial"
          animate="animate"
        >
          <h1 className={styles.title}>
            Разработка{width < 767 && <br />} & Автоматизация
            <br />
            <span>Digital-продуктов</span>
          </h1>
        </motion.section>
        <motion.section
          className={styles.textContainer}
          variants={containerVariants}
          custom={4}
          initial="initial"
          animate="animate"
        >
          <span>ТОП-5 НА HABR</span>
          <span>{localTime} MSK</span>
          <span>200+ проектов</span>
        </motion.section>
        </div>
        
        <motion.section
          className={styles.projects}
          variants={containerVariants}
          custom={4}
          initial="initial"
          animate="animate"
        >
        <Link to={'/cases'}>
        <div className={styles.project__container}>
          <div className={styles.project}>
            <p className={styles.project__heading}>
              MTS x SKOLKOVO <br /> Телеграм бот, который переварачивает взгляд на привычные веб-продукты.
              {/* Ubibat. Сайт для люксового проекта
              <br /> Москвы. Десять из десяти */}
            </p>
            <div className={styles.project__items}>
              <Arrow />
              <div className={styles.project__info}>
                <span>E-COMMERCE</span>
                <span>2024</span>
              </div>
            </div>
          </div>
          <div className={styles.project__img} />
        </div>
        </Link>
        {/* <div className={styles.navigationInfo}>
          Используйте меню для навигации
        </div> */}
      </motion.section>
    </main>
  )
}

export default transition(MainPage);