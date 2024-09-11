import styles from './styles/Accordion.module.scss'

const Accordion = ({ data, isCase }) => {
  return (
    <div className={styles.accordion}>
      {data?.map((elem) => {
        return (
          <div key={elem.id} className={styles.accordion__tab}>
            <input id={elem.id} type="checkbox" name="tabs" />
            <label htmlFor={elem.id}>
              {!isCase && (
                <div className={styles.number}>
                  {elem.id <= 9 ? `0${elem.id}` : elem.id}
                </div>
              )}
              {elem.title}
            </label>
            {isCase ? (
              <div className={styles.accordion__tab_case}>
                <span>{elem.header}</span>
                <p>{elem.text}</p>
              </div>
            ) : (
              <div className={styles.accordion__tab_content}>
                <p>{elem.text}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
