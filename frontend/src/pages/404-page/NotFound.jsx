/* eslint-disable react-refresh/only-export-components */
import transition from "../../animations/transition"
import styles from "./styles/NotFound.module.scss"

const NotFoundPage = () => {
    return (
        <div className={styles.notFoundPage}>
            <h1 className={styles.notFoundPage__code}>404</h1>
            <p className={styles.notFoundPage__message}>Страница не найдена</p>
        </div>
    );
};

export default transition(NotFoundPage)
