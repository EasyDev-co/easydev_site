import { useState } from "react";
import styles from "./styles/TecnologiesSelect.module.scss"


const TechnologiesSelect = ({ data }) => {
    const [headerData, setHeaderData] = useState({
        name: data[0]?.name || '',
        desc: data[0]?.description || ''
    });
    const [isActiveId, setIsActiveId] = useState(data[0]?.id || null);

    const handleClick = (data) => {
        setHeaderData({
            name: data.name,
            desc: data.description
        });
        setIsActiveId(data.id);
    };

    return (
        <div className={styles.technologies}>
            <div className={styles.technologies__header}>
                <div>Технологии</div>
                <div>
                    <div className={styles.technologies__header__name}>{headerData.name}</div>
                    <div className={styles.technologies__header__desc}>{headerData.desc}</div>
                </div>
            </div>
            <div className={styles.technologies__container}>
                {data.map((elem) => (
                    <button
                        onClick={() => handleClick(elem)}
                        className={elem.id === isActiveId ? styles.technologies__item_active : styles.technologies__item}
                        key={elem.id}
                    >
                        <img className={styles.technologies__item__img} src={elem.image} alt={elem.name} />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TechnologiesSelect;