/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import styles from './styles/Accordion.module.scss'

const AccordionCases = ({ data, isCase }) => {
    const { pk, name, description, team, images, video, gif, job_description, solved_problems, technology_stack } = data;
    return (
        <div className={styles.accordion}>
            <div className={styles.accordion__tab}>
                <input id={1} type="checkbox" name="tabs" />
                <label htmlFor={1}>
                    ПРОЕКТ
                </label>
                <div className={styles.accordion__tab_case}>
                    <span>{name}</span>
                    <p>{description}</p>
                </div>
            </div>
            <div className={styles.accordion__tab}>
                <input id={2} type="checkbox" name="tabs" />
                <label htmlFor={2}>
                    КЛИЕНТ
                </label>
                <div className={styles.accordion__tab_case}>
                    {/* <span>{name}</span> */}
                    <p>{description}</p>
                </div>
            </div>
            <div className={styles.accordion__tab}>
                <input id={3} type="checkbox" name="tabs" />
                <label htmlFor={3}>
                    ЗАДАЧА
                </label>
                <div className={styles.accordion__tab_case}>
                    {/* <span>{name}</span> */}
                    <p>{job_description}</p>
                </div>
            </div>
            <div className={styles.accordion__tab}>
            <input id={4} type="checkbox" name="tabs" />
                <label htmlFor={4}>
                    РЕШЕНИЕ
                </label>
                <div className={styles.accordion__tab_case}>
                    {/* <span>{name}</span> */}
                    <p>{solved_problems}</p>
                </div>
            </div>
            <div className={styles.accordion__tab}>
                <input id={5} type="checkbox" name="tabs" />
                <label htmlFor={5}>
                    ТЕХНОЛОГИИ
                </label>
                <div className={styles.accordion__tab_case}>
                    {/* <span>{name}</span> */}
                    <p>{technology_stack}</p>
                </div>
            </div>
           
        </div>
    )
}

export default AccordionCases
