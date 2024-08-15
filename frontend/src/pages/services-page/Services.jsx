import { Link } from 'react-router-dom'
import { services } from '../../mockData/services'
import { useWindowWidth } from '@react-hook/window-size'
import styles from './styles/Services.module.scss'

export const ServicesPage = () => {
  const width = useWindowWidth()
  return (
    <main className={styles.main}>
      <section className={styles.service}>
        <div className={styles.breadcrumbs}>
          {width < 480 ? 'HOME' : 'ГЛАВНАЯ'} / <span>ЭКСПЕРТНОСТЬ</span>
        </div>
        <h1 className={styles.service__title}>Экспертность</h1>
        <ul className={styles.service__wrapp}>
          {services.map((elem) => (
            <div key={elem.id} className={styles.service__container}>
              <div className={styles.service__shield}></div>
              <li>
                <Link to={`/services/${elem.id}`}>{elem.service}</Link>
              </li>
              <div className={styles.picture_container}>
              </div>
            </div>
          ))}
        </ul>
      </section>

    </main>
  )
}
