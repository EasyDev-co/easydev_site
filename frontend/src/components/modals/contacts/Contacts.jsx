import {useEffect} from 'react';
import {motion} from 'framer-motion';
import {ShowMenuButton} from '../../buttons/show-menu-button/ShowMenuButton';
import styles from './styles/Contacts.module.scss';


export const Contacts = ({isOpen, setIsOpen}) => {
    const telegramUrl = 'https://t.me/easydev_egor';
    const yandexMapsUrl = 'https://yandex.ru/maps/?text=г.%20Казань,%20ул.%20Спартаковская,%202';

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <motion.div
            className={styles.modal}
            initial={{y: '100%'}}
            animate={{y: 0}}
            exit={{y: '100%'}}
            transition={{duration: 0.8, ease: 'easeInOut'}}
        >
            <div className={styles.inner}>
                <motion.div
                    className={styles.contacts__header}
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.3}}
                >
                    <ShowMenuButton isOpen={isOpen} setIsOpen={setIsOpen}/>
                </motion.div>

                <motion.div
                    className={styles.contacts}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5}}
                >
                    <h1 className={styles.contacts__title}>
                        Связаться с нами
                        <br/>
                        <a href={telegramUrl} target='blank'>@easydev_egor</a>
                    </h1>
                    <a href={yandexMapsUrl} target="_blank" rel="noopener noreferrer">
                    <div className={styles.contacts__container}>
                        <div className={styles.contacts__info}>
                            <div className={styles.contacts__address}>
                                г. Казань, ул. Спартаковская, 2
                                <br/>
                                <a href="tel:+79172300481">+7 (917) 230-0481</a>
                                <br/>
                                <a href="mailto:info@easy-dev.tech">info@easy-dev.tech</a>
                            </div>
                            <div className={styles.contacts__items}>
                                <svg
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect width="20" height="20" rx="10"/>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7.80096 7.10919L11.5705 10.8787L11.5705 7.45442L12.5469 7.45442L12.5469 12.5456L7.45574 12.5456L7.45574 11.5692L10.88 11.5692L7.11052 7.79964L7.80096 7.10919Z"
                                    />
                                </svg>
                                <div>КОНТАКТНЫЕ ДАННЫЕ</div>
                            </div>
                        </div>
                        <img
                            className={styles.contacts__img}
                            src="/img/contact_photo.jpg"
                            alt="Kazan"
                        />
                    </div>
                    </a>
                </motion.div>
            </div>
        </motion.div>
    );
};