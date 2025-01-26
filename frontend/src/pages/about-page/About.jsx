/* eslint-disable react-refresh/only-export-components */
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs'
import { motion } from 'framer-motion'
import { clients } from '../../mockData/clients'
import { employees } from '../../mockData/employees'
import { reviews } from '../../mockData/reviews'
import { insertSpace } from '../../utils/insertSpace'
import { useWindowWidth } from '@react-hook/window-size'
import styles from './styles/About.module.scss'
import transition from '../../animations/transition'
import mstrst_logo from '../../assets/img/mstrst.png'
import mts_logo from '../../assets/img/mts.png'
import skolkovo_logo from '../../assets/img/skolkovo.svg'
import matchmove_logo from '../../assets/img/matchmove.png'
import photodetstvo_logo from '../../assets/img/photodetstvo.svg'
import mdk_logo from '../../assets/img/mdk.jpg'
import meriya_kazani_logo from '../../assets/img/meriya_kazani.png'
import zarahome_logo from '../../assets/img/zarahome.jpg'

const AboutPage = () => {
  const width = useWindowWidth()

  const fadeUpAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <main className={styles.main}>
      <Breadcrumbs />
      <div className={styles.about}>
        <motion.h1
          className={styles.about__title}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          variants={fadeUpAnimation}
        >
          easydev
        </motion.h1>
        <motion.p
          className={styles.about__text}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={fadeUpAnimation}
        >
          В нашем портфолио — проекты для финансовых компаний из России, Европы,
          США, Китая, Ближнего Востока и Африки
        </motion.p>
        <section className={styles.team}>
          <motion.div
            className={styles.team__heading}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.4 }}
            variants={fadeUpAnimation}
          >
            Всем привет, это мы
          </motion.div>
          <motion.div
            className={styles.team__employees}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.6 }}
            variants={fadeUpAnimation}
          >
            {employees.map((employee) => (
              <div key={employee.id} className={styles.team__employee}>
                <img src={employee.img} alt={employee.name} />
                <div>{employee.name}</div>
                <div>
                  {(width < 1366 && width > 767) || width < 480
                    ? insertSpace(employee.position)
                    : employee.position}
                </div>
                {employee.telegramUrl ? 
                (<div><a href={employee.telegramUrl} style={{ color: 'inherit', textDecoration: 'none' }}>{employee.nickname}</a></div>)
                 : (<div>{employee.nickname}</div>)}
              </div>
            ))}
          </motion.div>
        </section>
        <div className={styles.review__heading}>
          {reviews.total}+ положительных отзывов
        </div>
        <section className={styles.review}>
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
        </section>
        <section className={styles.clients}>
          <h3 className={styles.clients__heading}>Наши любимые клиенты</h3>
          <p className={styles.clients__text}>
            Запоминается настоящее. Верят лучшему. Доверяют за результаты.
          </p>
          <div className={styles.clients__container}>
            <div className={styles.clients__box}>
              <img style={{width: '50px'}} className={styles.logo} src={mts_logo} alt="mstrst_logo" />
              <div>МТС</div>
            </div>
            <div className={styles.clients__box}>
              <img src={skolkovo_logo} style={{width: '100px'}} alt="mstrst_logo" />
              <div>Сколково</div>
            </div>
            <div className={styles.clients__box}>
              <img src={mstrst_logo} alt="mstrst_logo" />
              <div>Мостотрест</div>
            </div>
            <div className={styles.clients__box}>
              <img style={{width: '55px'}} src={matchmove_logo} alt="mstrst_logo" />
              <div>Matchmove machine</div>
            </div>
            <div className={styles.clients__box}>
              <img src={zarahome_logo} alt="mstrst_logo" />
              <div>ZARA HOME</div>
            </div>
            <div className={styles.clients__box}>
              <img style={{width: '110px'}} src={meriya_kazani_logo} alt="mstrst_logo" />
              <div>Мэрия Казани</div>
            </div>
            <div className={styles.clients__box}>
              <img style={{width: '75px'}} src={photodetstvo_logo} alt="mstrst_logo" />
              <div>ФотоДетство</div>
            </div>
            
            <div className={styles.clients__box}>
              <img src={mdk_logo} alt="mstrst_logo" />
              <div>MDK</div>
            </div>
            
          </div>
        </section>
      </div>
    </main>
  )
}

export default transition(AboutPage)
