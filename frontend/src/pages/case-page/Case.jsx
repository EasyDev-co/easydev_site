import { useLocation } from 'react-router-dom'
import styles from './styles/Case.module.scss'
import { useWindowWidth } from '@react-hook/window-size'
import BlueButton from '../../components/buttons/BlueButton/BlueButton'
import Accordion from '../../components/Accordion/Accordion'
import image1 from '../../assets/img/case/caseImage1.png'
import image2 from '../../assets/img/case/caseImage2.png'
import { caseData } from '../../mockData/caseData'

export const CasePage = () => {
  // const { caseId } = useParams()
  const location = useLocation()
  const width = useWindowWidth()
  const { state } = location || {}

  return (
    <main className={styles.main}>
      <section className={styles.case}>
        <div className={styles.breadcrumbs}>
          {width < 480 ? 'HOME' : 'ГЛАВНАЯ'} / КЕЙСЫ /{''}
          <span>{state.case_name}</span>
        </div>
        <div>
          <h1 className={styles.case__tittle}>{state.case_name}</h1>
          {width > 768 && <BlueButton text={'Посетить наш сайт'} />}
        </div>
        <div className={styles.case__item}>
          <div className={styles.case__item__accordion}>
            <Accordion isCase data={caseData} />
          </div>
          <div className={styles.case__item__image}>
            <div>
              <img src={image1} alt="" />
            </div>
            <div>
              <img src={image2} alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
