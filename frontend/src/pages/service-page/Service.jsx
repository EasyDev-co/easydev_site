import { useWindowWidth } from '@react-hook/window-size'
import { useLocation, useParams } from 'react-router-dom'
import styles from './styles/Service.module.scss'
import BlueButton from '../../components/buttons/BlueButton/BlueButton'
import Accordion from '../../components/Accordion/Accordion'

export const ServicePage = () => {
  const { serviceId } = useParams()
  const location = useLocation();
  const { services } = location.state || {};

  const width = useWindowWidth()
  return <div>

    <div className={styles.breadcrumbs}>
      {width < 480 ? 'HOME' : 'ГЛАВНАЯ'} / ЭКСПЕРТНОСТЬ / <span>{services}</span>
    </div>
    <h1 className={styles.service__title}>{services}</h1>
    <div className={styles.service_title_wrap}>
      <span className={styles.service__title__desc}>
        Принимайте правильные управленческие решения
        на основе данных аудита. Описание и дополнительная информация.
      </span>
      <BlueButton text={'Заказать услугу'} />
    </div>
    <div className={styles.about__service_wrap}>
      <div className={styles.about__service}>
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
    <div className={styles.skills_container}>
        <Accordion/>
    </div>
  </div>
}
