
import { useState } from "react";
import { technologies } from "../../mockData/technologies";
import styles from "./styles/TecnologiesSelect.module.scss"


const TecnologiesSelect = () => {
    const [headerData, setHeaderData] = useState({
        name: 'Vue',
        desc: 'Прогрессивный JavaScript-фреймворк'
    });
    const [isActiveId, setIsActiveId] = useState(false);
    const handleClick = (data) =>{
        setHeaderData({
            name: data.name,
            desc: data.description
        })
        setIsActiveId(data.id)
    }
    return (
        <div className={styles.technologies}>
            <div className={styles.technologies__header}>
                <div>
                    Технологии
                </div>
                <div>
                    <div className={styles.technologies__header__name}>{headerData.name}</div>
                    <div className={styles.technologies__header__desc}>{headerData.desc}</div>
                </div>
            </div>
            <div className={styles.technologies__container}>
                {technologies.map(elem => {
                    return (
                        <button onClick={()=>handleClick(elem)} className={elem.id === isActiveId ? styles.technologies__item_active : styles.technologies__item } key={elem.id}>
                            <img className={styles.technologies__item__img} src={elem.image} alt="" />
                        </button>
                    )
                })}
            </div>
        </div>
    );
}

export default TecnologiesSelect;