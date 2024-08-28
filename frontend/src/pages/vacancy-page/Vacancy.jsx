import { useWindowWidth } from '@react-hook/window-size'
import styles from './styles/Vacancy.module.scss'
import arrow from '../../assets/img/vacancy/Arrow.png'
import { useEffect } from 'react'
import { getVacancies } from '../../api/vacancy/getVacancies'

export const VacancyPage = () => {
  const width = useWindowWidth()

  useEffect(() => {
    getVacancies().then((res) => {
      console.log(res)
    })
  }, [])
  return (
    <div className={styles.main}>
      <section className={styles.vacancy}>
        <div className={styles.breadcrumbs}>
          {width < 480 ? 'HOME' : 'ВАКАНСИИ'} / <span>ЭКСПЕРТНОСТЬ</span>
        </div>
        <h1 className={styles.vacancy__title}>Вакансии</h1>
        <h2 className={styles.vacancy__sub_title}>В поисках талантов</h2>
      </section>
      <div className={styles.vacancy__list}>
        <div className={styles.vacancy__list__column}>
          <div className={styles.column__header}>Должность</div>
          <div className={styles.column__item}>
            UX/UI Designer
            {width < 767 ? (
              <div className={styles.column__item__subtitle}>
                В поисках креативного художника
              </div>
            ) : (
              width < 375 && (
                <>
                  <div className={styles.column__item__subtitle}>
                    от 3-ёх лет
                  </div>
                </>
              )
            )}
          </div>
        </div>
        {width > 767 && (
          <>
            {width < 1365 ? (
              <div className={styles.vacancy__list__column}>
                <div className={styles.column__header}>Описание</div>
                <div className={styles.column__item}>
                  В поисках креативного и структурного художника
                </div>
              </div>
            ) : (
              <div className={styles.vacancy__list__column}>
                <div className={styles.column__header}>Опыт</div>
                <div className={styles.column__item}>От 3-ёх лет</div>
              </div>
            )}
          </>
        )}

        {width < 1365 ? (
          <div className={styles.vacancy__list__column}>
            <div className={styles.column__header}>График</div>
            <div className={styles.column__item}>Полный рабочий день</div>
          </div>
        ) : (
          <div className={styles.vacancy__list__column}>
            <div className={styles.column__header}>Офис/удаленка</div>
            <div className={styles.column__item}>Офис</div>
          </div>
        )}
        {width > 767 && (
          <div className={styles.vacancy__list__column}>
            <div className={styles.column__header}>&nbsp;</div>
            <div className={styles.column__item}>
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.800962 0.109194L4.57048 3.87871L4.57048 0.454416L5.54691 0.454416V5.54558H0.455741L0.455741 4.56915L3.88003 4.56915L0.110519 0.799637L0.800962 0.109194Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
