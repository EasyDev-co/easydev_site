import { clients } from '../../mockData/clients'
import { employees } from '../../mockData/employees'
import { reviews } from '../../mockData/reviews'
import { insertSpace } from '../../utils/insertSpace'
import { useWindowWidth } from '@react-hook/window-size'
import styles from './styles/About.module.scss'

export const AboutPage = () => {
  const width = useWindowWidth()

  return (
    <main className={styles.main}>
      <div className={styles.about}>
        <h1 className={styles.about__title}>Easy development</h1>
        <p className={styles.about__text}>
          В нашем портфолио — проекты для финансовых компаний из России, Европы,
          США, Китая, Ближнего Востока и Африки
        </p>
        <section className={styles.team}>
          <div className={styles.team__heading}>Всем привет, это мы</div>
          <div className={styles.team__employees}>
            {employees.map((employee) => (
              <div key={employee.id} className={styles.team__employee}>
                <img src={employee.img} alt={employee.name} />
                <div>{employee.name}</div>
                <div>
                  {(width < 1366 && width > 767) || width < 480
                    ? insertSpace(employee.position)
                    : employee.position}
                </div>
                <div>{employee.nickname}</div>
              </div>
            ))}
          </div>
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
            {clients.length
              ? clients.map((client) => (
                  <div className={styles.clients__box} key={client.id}>
                    <img src={client.logo} alt={client.company} />
                    <div>{client.company}</div>
                  </div>
                ))
              : 'Скоро появится'}
          </div>
        </section>
      </div>
    </main>
  )
}
