import { useWindowWidth } from '@react-hook/window-size'
import styles from './styles/Vacancy.module.scss'
import { useEffect, useState } from 'react'
import { getVacancies } from '../../api/vacancy/getVacancies'

export const VacancyPage = () => {
  const width = useWindowWidth()
  const [vacancy, setVacancy] = useState([]);

  useEffect(() => {
    getVacancies().then((res) => {
      setVacancy(res);
    })
  }, [])
  return (
    <div className={styles.main}>
      <section className={styles.vacancy}>
        <h1 className={styles.vacancy__title}>Вакансии</h1>
        <h2 className={styles.vacancy__sub_title}>В поисках талантов</h2>
      </section>
      <table className={styles.vacancy__table}>
        <thead className={styles.vacancy__table__header}>
          {width < 768 ?
            <tr>
              <th className={styles.vacancy__table__column}>Должность</th>
              {width < 375 ?
                <th className={styles.vacancy__table__column}>График</th>
                :
                <th className={styles.vacancy__table__column}>Офис/Удаленка</th>
              }
            </tr>
            :
            <tr>
              <th className={styles.vacancy__table__column}>Должность</th>
              {width < 1365 ?
                <>
                  <th className={styles.vacancy__table__column}>Описание</th>
                  <th className={styles.vacancy__table__column}>График</th>
                </>
                :
                <>
                  <th className={styles.vacancy__table__column}>Опыт</th>
                  <th className={styles.vacancy__table__column}>Офис/Удаленка</th>
                </>
              }
              <th className={styles.vacancy__table__column}></th>
            </tr>
          }
        </thead>
        <tbody>
          {vacancy.results?.map(elem => {
            return (
              <>
                {width < 768 ?
                  <tr>
                    <td className={styles.vacancy__table__item}>
                      <div className={styles.vacancy__table__item__column_name}>
                        {elem.post}
                      </div>
                      {elem.title}
                    </td>
                    <td className={styles.vacancy__table__item}>полный рабочий день</td>
                  </tr>
                  :
                  <tr>
                    <td className={styles.vacancy__table__item}>{elem.post}</td>
                    {width < 1365 ?
                      <>
                        <>
                          <td className={styles.vacancy__table__item}>{elem.title}</td>
                          <td className={styles.vacancy__table__item}>полный рабочий день</td>
                        </>
                      </>
                      :
                      <>
                        <td className={styles.vacancy__table__item}>от 3х лет</td>
                        <td className={styles.vacancy__table__item}>Офис</td>
                      </>
                    }
                    <td className={styles.vacancy__table__item}>
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
                    </td>
                  </tr>
                }
              </>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
