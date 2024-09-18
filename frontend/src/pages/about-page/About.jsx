import { useState } from 'react'
import { employees } from '../../mockData/employees'
import { reviews } from '../../mockData/reviews'
import { insertSpace } from '../../utils/insertSpace'
import { useWindowWidth } from '@react-hook/window-size'
import Clients from '../../components/clients/Clients'
import { motion } from 'framer-motion'
import { containerVariants } from '../../animations/variants'
// import { getAbout } from '../../api/about/getAbout'
import ErrorMessage from '../../components/error-message/ErrorMessage'
import styles from './styles/About.module.scss'

export const AboutPage = () => {
  // const [aboutData, setAboutData] = useState(null)
  const [error, setError] = useState(null)

  const width = useWindowWidth()

  // useEffect(() => {
  //   const getAboutData = async () => {
  //     try {
  //       const res = await getAbout()
  //       setAboutData(res)
  //     } catch (error) {
  //       setError(error.message)
  //     }
  //   }

  //   getAboutData()
  // }, [])

  return (
    <main className={styles.main}>
      <div className={styles.about}>
        <motion.h1
          className={styles.about__title}
          variants={containerVariants}
          custom={2}
          initial="initial"
          animate="animate"
        >
          Easy development
        </motion.h1>
        <motion.p
          className={styles.about__text}
          variants={containerVariants}
          custom={3}
          initial="initial"
          animate="animate"
        >
          В нашем портфолио — проекты для финансовых компаний из России, Европы,
          США, Китая, Ближнего Востока и Африки
        </motion.p>
        <motion.section
          className={styles.team}
          variants={containerVariants}
          custom={3.5}
          initial="initial"
          animate="animate"
        >
          <div className={styles.team__heading}>Всем привет, это мы</div>
          {error ? (
            <ErrorMessage error={error} />
          ) : (
            <div className={styles.team__employees}>
              {employees?.length ? (
                employees.map((employee) => (
                  <div key={employee.id} className={styles.team__employee}>
                    <img src={employee.img} alt={employee.name} />
                    <div>{employee.name}</div>
                    <div>
                      {
                        //TODO: Убрать функцию insertSpace, если не понадобится
                        (width < 1366 && width > 767) || width < 480
                          ? insertSpace(employee.position)
                          : employee.position
                      }
                    </div>
                    <div>{employee.nickname}</div>
                  </div>
                ))
              ) : (
                <div>Данные скоро появятся</div>
              )}
            </div>
          )}
        </motion.section>
        <motion.div
          className={styles.review__heading}
          variants={containerVariants}
          custom={4}
          initial="initial"
          animate="animate"
        >
          {reviews.total}+ положительных отзывов
        </motion.div>
        <motion.section
          className={styles.review}
          variants={containerVariants}
          custom={4.5}
          initial="initial"
          animate="animate"
        >
          {reviews.reviews.length
            ? reviews.reviews.map((review) => (
                <div className={styles.review__container} key={review.id}>
                  <div className={styles.review__box}>
                    <div className={styles.review__innerBox}>
                      <p className={styles.review__text}>{review.text}</p>
                    </div>
                    <div>
                      Клиенты
                      <br /> о нас
                    </div>
                  </div>
                  <div className={styles.review__authorBox}>
                    <div>
                      <img
                        className={styles.review__authorImg}
                        src={review.img}
                        alt="author"
                      />
                      <div className={styles.review__authorInfo}>
                        <div>{review.author}</div>
                        <div>{review.position}</div>
                      </div>
                    </div>
                    <img
                      className={styles.review__authorLabel}
                      src={review.label}
                      alt="company label"
                    />
                  </div>
                </div>
              ))
            : 'Отзывов пока нет'}
        </motion.section>
        <motion.section
          className={styles.clients}
          variants={containerVariants}
          custom={5}
          initial="initial"
          animate="animate"
        >
          <h3 className={styles.clients__heading}>Наши любимые клиенты</h3>
          <p className={styles.clients__text}>
            Запоминается настоящее. Верят лучшему. Доверяют за результаты.
          </p>
          <Clients />
        </motion.section>
      </div>
    </main>
  )
}
