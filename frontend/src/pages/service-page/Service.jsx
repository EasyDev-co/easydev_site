import { useWindowWidth } from '@react-hook/window-size'
import { useLocation } from 'react-router-dom'
import styles from './styles/Service.module.scss'
import BlueButton from '../../components/buttons/BlueButton/BlueButton'
import Accordion from '../../components/Accordion/Accordion'
import TecnologiesSelect from '../../components/TechnologiesSelect/TecnologiesSelect'
import { accordion } from '../../mockData/accordion'

export const ServicePage = () => {
  // const { serviceId } = useParams()
  const location = useLocation()
  const { service } = location.state || {}

  const width = useWindowWidth()
  return (
    <main className={styles.main}>
      <section className={styles.service}>
        <div className={styles.breadcrumbs}>
          {width < 480 ? 'HOME' : 'ГЛАВНАЯ'} / ЭКСПЕРТНОСТЬ /{' '}
          <span>{service}</span>
        </div>
        <h1 className={styles.service__title}>{service}</h1>
        <div className={styles.service__title__wrap}>
          <span className={styles.service__title__desc}>
            Принимайте правильные управленческие решения на основе данных
            аудита. Описание и дополнительная информация.
          </span>
          <BlueButton text={'Заказать услугу'} />
        </div>
        <div className={styles.service__about_wrap}>
          <div className={styles.service__about}>
            <div>
              <div>200 +</div>
              <div>Выполненных проектов</div>
            </div>
            <div>
              <div>85 +</div>
              <div>Разработанных стратегий тестирования</div>
            </div>
            <div>
              <div>30 +</div>
              <div>Управляемых проектов</div>
            </div>
          </div>
        </div>
        <div className={styles.service__skills}>
          <h2>Скиллы</h2>
          <Accordion data={accordion} />
        </div>
        <TecnologiesSelect />
        <div className={styles.service__skills}>
          <h2>Часто задаваемые вопросы</h2>
          <Accordion data={accordion} />
        </div>
      </section>
    </main>
  )
}
