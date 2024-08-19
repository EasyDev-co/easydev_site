import { cases } from '../../mockData/cases'
import styles from './styles/Cases.module.scss'
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs'
import { Link } from 'react-router-dom'

export const CasesPage = () => {
  return (
    <main className={styles.main}>
      <section className={styles.cases}>
        <Breadcrumbs />
        <h2 className={styles.cases__title}>Кейсы (19/24)</h2>
        <div className={styles.cases__buttons}>
          <button className={styles.cases__button}>Все кейсы</button>
          <button className={styles.cases__button}>Экспертность</button>
          <button className={styles.cases__button}>Отрасли</button>
        </div>
        <div className={styles.case}>
          {cases.map((elem) => (
            <div className={styles.project__container} key={elem.id}>
              <div className={styles.project}>
                <Link to={`/cases/${elem.id}`} state={elem}>
                  <p className={styles.project__heading}>{elem.case_name}</p>

                  <div className={styles.project__items}>
                    <svg
                      className={styles.project__icon}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="20" height="20" rx="10" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.79963 7.10919L11.5691 10.8787L11.5691 7.45442L12.5456 7.45442V12.5456H7.45441L7.45441 11.5692L10.8787 11.5692L7.10919 7.79964L7.79963 7.10919Z"
                      />
                    </svg>
                    <div className={styles.project__info}>
                      <span>{elem.case_theme}</span>
                      <span>{elem.year}</span>
                    </div>
                  </div>
                </Link>
              </div>
              <img
                className={styles.project__img}
                src={elem.img}
                alt={elem.case_name}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
