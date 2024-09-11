import { useState } from 'react'
import { technologies } from '../../mockData/technologies'
import styles from './styles/TechnologiesSelect.module.scss'

const TechnologiesSelect = () => {
  const [headerData, setHeaderData] = useState({})
  const [isActiveId, setIsActiveId] = useState(false)

  const handleMouseHover = (data) => {
    setHeaderData({
      name: data.name,
      desc: data.description,
    })
    setIsActiveId(data.id)
  }

  return (
    <div className={styles.technologies}>
      <div className={styles.technologies__infoContainer}>
        <div className={styles.technologies__heading}>Технологии</div>
        <div className={styles.technologies__info}>
          <div>{headerData.name}</div>
          <div>{headerData.desc}</div>
        </div>
      </div>
      <div className={styles.technologies__container}>
        {technologies.map((elem) => {
          return (
            <div
              className={
                elem.id === isActiveId
                  ? `${styles.technologies__item} ${styles.technologies__item_active}`
                  : styles.technologies__item
              }
              role="button"
              tabIndex="0"
              key={elem.id}
              onMouseEnter={() => handleMouseHover(elem)}
              onMouseLeave={() => handleMouseHover({})}
            >
              <img
                className={styles.technologies__img}
                src={elem.image}
                alt=""
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TechnologiesSelect
