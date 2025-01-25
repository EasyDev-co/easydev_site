import {Logo} from '../logo/Logo'
import {ShowMenuButton} from '../buttons/show-menu-button/ShowMenuButton'
import {useState} from 'react'
import {Menu} from '../modals/menu/Menu'
import {useWindowWidth} from '@react-hook/window-size'
import {OriginButton} from '../buttons/origin-button/OriginButton'
import BlueButton from '../buttons/BlueButton/BlueButton'
import {NavLinks} from '../nav-links/NavLinks'
import {motion} from 'framer-motion'
import styles from './styles/Header.module.scss'
import {AnimatePresence} from "framer-motion";
import {Contacts} from "../modals/contacts/Contacts";


export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isContactsOpen, setIsContactsOpen] = useState(false);

    const telegramUrl = 'https://t.me/easydev_egor';
    const width = useWindowWidth();

    return (
        <>
            <motion.header
                className={styles.header}
                initial={{opacity: 0, y: '-100%'}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1, ease: 'easeInOut', delay: 1}}
            >
                <div className={styles.header__container}>
                    <div className={styles.header__left}>
                        <div className={styles.header__buttons}>
                            <BlueButton
                                text="Начать проект с easydev"
                                onClick={() => (window.location.href = telegramUrl)}
                            />
                            <OriginButton
                                text="Контакты"
                                onClick={() => setIsContactsOpen(true)}
                            />
                        </div>
                        <div className={styles.header__phone}>
                            <a href="tel:+79172300481" style={{color: 'black', textDecoration: 'none'}}>
                            +7 (917) 230 — 0481
                        </a>
                        </div>
                    </div>

                    <div className={styles.header__logo}>
                        <a
                            href="/"
                            onClick={() => {
                                setIsMenuOpen(false);
                                setIsContactsOpen(false);
                            }}
                        >
                            <Logo/>
                        </a>
                    </div>

                    <div className={styles.header__nav}>
                        <NavLinks/>
                    </div>

                    {width < 1366 && (
                        <ShowMenuButton
                            isOpen={isMenuOpen}
                            setIsOpen={setIsMenuOpen}
                        />
                    )}
                </div>
            </motion.header>

            <AnimatePresence>
                {isMenuOpen && (
                    <Menu
                        isOpen={isMenuOpen}
                        setIsOpen={setIsMenuOpen}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isContactsOpen && (
                    <Contacts
                        isOpen={isContactsOpen}
                        setIsOpen={setIsContactsOpen}
                    />
                )}
            </AnimatePresence>
        </>
    );
};