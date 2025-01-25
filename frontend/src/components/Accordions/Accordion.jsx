/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import styles from './styles/Accordion.module.scss'

const Accordion = ({ data, isCase }) => {
  return (
    <div className={styles.accordion}>
      {data?.map((elem, index) => {
        const displayNumber = index;
        return (
          <div key={ elem.id } className={styles.accordion__tab}>
            <input id={ elem.id } type="checkbox" name="tabs" />
            <label htmlFor={ elem.id }>
              {!isCase && (
                <div className={styles.number}>
                  {displayNumber < 10 ? `0${displayNumber}` : displayNumber}
                </div>
              )}
              {elem.title}
            </label>
            {isCase ? (
              <div className={styles.accordion__tab_case}>
                <span>{elem.header}</span>
                <p>{elem.title}</p>
              </div>
            ) : (
              <div className={styles.accordion__tab_content}>
                <p>{elem.description}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion
