import { useLocation } from 'react-router-dom'
import { useWindowWidth } from '@react-hook/window-size'
import BlueButton from '../../components/buttons/BlueButton/BlueButton'
import AccordionCases from '../../components/Accordions/AccordionCases'
import styles from './styles/Case.module.scss'

export const CasePage = () => {
  const location = useLocation()
  const width = useWindowWidth()
  const { name, images } = location.state || {}

  return (
    <main className={styles.main}>
      <section className={styles.case}>
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
