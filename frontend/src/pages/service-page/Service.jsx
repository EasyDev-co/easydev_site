import { useWindowWidth } from '@react-hook/window-size'
import { useLocation, useParams } from 'react-router-dom'
import styles from './styles/Service.module.scss'

export const ServicePage = () => {
  const { serviceId } = useParams()
  const location = useLocation();
  const { services } = location.state || {};

  const width = useWindowWidth()
  return <div>
    <div className={styles.breadcrumbs}>
      {width < 480 ? 'HOME' : 'ГЛАВНАЯ'} / <span>ЭКСПЕРТНОСТЬ</span> / <span>{services}</span>
    </div>
    <h1 className={styles.cases__title}>Кейсы (19/24)</h1>
  </div>
}
