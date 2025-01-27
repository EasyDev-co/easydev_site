/* eslint-disable react-refresh/only-export-components */
import { useLocation } from 'react-router-dom'
import { useWindowWidth } from '@react-hook/window-size'
import BlueButton from '../../components/buttons/BlueButton/BlueButton'
import AccordionCases from '../../components/Accordions/AccordionCases'
import { caseData } from '../../mockData/caseData'
import transition from '../../animations/transition'
import styles from './styles/Case.module.scss'

const CasePage = () => {
  // const { caseId } = useParams()
  const location = useLocation()
  const width = useWindowWidth()
  const { name, images} = location.state || {}
  console.log(location.state)

  return (
    <main className={styles.main}>
      <section className={styles.case}>
        <div className={styles.breadcrumbs}>
          {width < 480 ? 'HOME' : 'ГЛАВНАЯ'} / КЕЙСЫ /{''}
          <span> {name}</span>
        </div>
        <div>
          <h1 className={styles.case__tittle}>{name}</h1>
          {width > 768 && <BlueButton text={'Посетить наш сайт'} />}
        </div>
        <div className={styles.case__item}>
          <div className={styles.case__item__accordion}>
            <AccordionCases isCase data={location.state} />
          </div>
          <div className={styles.case__item__image}>
            {images.slice(1).map((image, i) => {
              return (
                <div key={i}>
                  <img src={image.image} alt="" />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default transition(CasePage);