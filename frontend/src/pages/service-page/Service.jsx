import {useWindowWidth} from '@react-hook/window-size'
import {useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'
import styles from './styles/Service.module.scss'
import BlueButton from '../../components/buttons/BlueButton/BlueButton'
import Accordion from '../../components/Accordions/Accordion'
import TechnologiesSelect from '../../components/TechnologiesSelect/TecnologiesSelect'
import {accordion} from '../../mockData/accordion'
import {getService} from '../../api/service/getService'

import transition from '../../animations/transition'

const ServicePage = () => {

    const location = useLocation()
    const width = useWindowWidth()

    const {created, description, id, modified, name, photo} = location.state || {}

    const [service, setService] = useState({
        "name": "Имя услуги",
        "description": "Описание услуги",
        "photo": null,
        "text_and_label_color": "#FFFFF",
        "link": "https://t.me/easydev_egor",
        "skill_of_amenities": [],
        "technology_of_amenities": [],
        "most_popular_questions": [],
    })

    useEffect(() => {
        getService(id)
            .then(res => {
                console.log(res)
                setService(res)
            })
    }, [])

    return (
        <main className={styles.main}>
            <section className={styles.service}>
                <div className={styles.breadcrumbs}>
                    {width < 480 ? 'HOME' : 'ГЛАВНАЯ'} / УСЛУГИ /
                    <span> {name}</span>
                </div>
                <h1 className={styles.service__title}>{name}</h1>
                <div className={styles.service__title__wrap}>
          <span className={styles.service__title__desc}>
           {description}
          </span>
                    <a href={service.link}><BlueButton text={'Заказать услугу'}/></a>
                </div>
                <div className={styles.service__about_wrap}>
                    <div className={styles.service__about}>
                        <div>
                            <div>200 +</div>
                            <div>Выполненных проектов</div>
                        </div>
                        <div>
                            <div>85 +</div>
                            <div>Разработанных стратегий тестирования</div>
                        </div>
                        <div>
                            <div>30 +</div>
                            <div>Управляемых проектов</div>
                        </div>
                    </div>
                </div>
                <div className={styles.service__skills}>
                    <h2>Скиллы</h2>
                    <Accordion data={service.skill_of_amenities}/>
                </div>
                <TechnologiesSelect data={service.technology_of_amenities}/>
                <div className={styles.service__skills}>
                    <h2>Часто задаваемые вопросы</h2>
                    <Accordion data={service.most_popular_questions}/>
                </div>
            </section>
        </main>
    )
}

export default transition(ServicePage);