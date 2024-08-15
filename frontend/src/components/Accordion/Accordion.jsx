import styles from './styles/Accordion.module.scss'
import { accordion } from '../../mockData/accordion';

const Accordion = () => {
    return (
        <div className={styles.accordion}>
            {accordion.map(elem => {
                return (
                    <div key={elem.id} className={styles.accordion__tab}>
                        <input id={elem.id} type="checkbox" name="tabs" />
                        <label htmlFor={elem.id}>
                            <div className={styles.number}>{elem.id <= 9 ? `0${elem.id}`: elem.id}</div>
                            {elem.title}
                        </label>
                        <div className={styles.accordion__tab_content}>
                            <p>{elem.text}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Accordion;