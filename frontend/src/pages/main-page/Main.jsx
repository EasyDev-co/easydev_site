import { useEffect, useState } from 'react'
import styles from './styles/Main.module.scss'
import { useWindowWidth } from '@react-hook/window-size'

export const MainPage = () => {
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

  return (
    <main>
      <section className={styles.titleContainer}>
        <h1 className={styles.title}>
          Разработка{width < 767 && <br />} & Автоматизация
          <br />
          <span>Digital-продуктов</span>
        </h1>
      </section>
      <section className={styles.textContainer}>
        <span>ТОП-5 НА HABR</span>
        <span>{localTime} KAZ</span>
        <span>200+ проектов</span>
      </section>
      <section className={styles.projects}>
        <div className={styles.project__container}>
          <div className={styles.project}>
            <p className={styles.project__heading}>
              Ubibat. Сайт для люксового проекта
              <br /> Москвы. Десять из десяти
            </p>
            <div className={styles.project__items}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="20" height="20" rx="10" fill="white" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.79963 7.10919L11.5691 10.8787L11.5691 7.45442L12.5456 7.45442V12.5456H7.45441L7.45441 11.5692L10.8787 11.5692L7.10919 7.79964L7.79963 7.10919Z"
                  fill="black"
                />
              </svg>
              <div className={styles.project__info}>
                <span>E-COMMERCE</span>
                <span>2024</span>
              </div>
            </div>
          </div>
          <div className={styles.project__img} />
        </div>
        <div className={styles.navigationInfo}>
          Используйте меню для навигации
        </div>
      </section>
    </main>
  )
}
