import { useWindowWidth } from '@react-hook/window-size'
import styles from './styles/Breadcrumbs.module.scss'

export const Breadcrumbs = () => {
  const width = useWindowWidth()

  return (
    <div className={styles.breadcrumbs}>
      {width < 480 ? 'HOME' : 'ГЛАВНАЯ'} / <span>КЕЙСЫ</span>
    </div>
  )
}
