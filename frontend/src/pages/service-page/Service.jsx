import { useLocation } from 'react-router-dom'
import BlueButton from '../../components/buttons/BlueButton/BlueButton'
import Accordion from '../../components/Accordions/Accordion'
import TechnologiesSelect from '../../components/TechnologiesSelect/TechnologiesSelect'
import { accordion } from '../../mockData/accordion'
import styles from './styles/Service.module.scss'

export const ServicePage = () => {
  const location = useLocation()
  const { created, description, id, modified, name, photo } =
    location.state || {}

  return (
    <main className={styles.main}>
      <section className={styles.service}>
        <div className={styles.service__infoContainer}>
          <h1 className={styles.service__title}>{name}</h1>
          <p className={styles.service__desc}>{description}</p>
          <BlueButton text={'Заказать услугу'} />
        </div>
        <div className={styles.service__aboutContainer}>
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
          <div className={styles.service__accordionContainer}>
            <h2>Скиллы</h2>
            <Accordion data={accordion} />
          </div>
          <TechnologiesSelect />
        </div>
        <div className={styles.service__faq}>
          <div className={styles.service__accordionContainer}>
            <h2>Часто задаваемые вопросы</h2>
            <Accordion data={accordion} />
          </div>
        </div>
      </section>
    </main>
  )
}
