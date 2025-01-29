import {useWindowWidth} from '@react-hook/window-size'
import styles from './styles/Vacancy.module.scss'
import {useEffect} from 'react';
import {motion} from "framer-motion";
import {getVacancies} from '../../api/vacancy/getVacancies';
import transition from '../../animations/transition';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';

const VacancyPage = () => {
  const width = useWindowWidth();

  useEffect(() => {
    getVacancies()
      .then((res) => {
        console.log(res);
      });
  }, []);

  const fadeUpAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={styles.main}>
      <motion.section
        className={styles.vacancy}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        variants={fadeUpAnimation}
      >
        <Breadcrumbs 
          items={[
            { label: width < 480 ? 'HOME' : 'ГЛАВНАЯ', path: '/' },
            { label: 'ВАКАНСИИ', path: '/vacancy' }
          ]} 
        />
        {/* <div className={styles.breadcrumbs}>
          {width < 480 ? "HOME" : "ГЛАВНАЯ"} / <span>ВАКАНСИИ</span>
        </div> */}
        <motion.h1
          className={styles.vacancy__title}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={fadeUpAnimation}
        >
          Вакансии
        </motion.h1>
        <motion.h2
          className={styles.vacancy__sub_title}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.4 }}
          variants={fadeUpAnimation}
        >
          В поисках талантов
        </motion.h2>
      </motion.section>
      <motion.div
        className={styles.vacancy__list}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.6 }}
        variants={fadeUpAnimation}
      >
        <div className={styles.vacancy__list__column}>
          <div className={styles.column__header}>Должность</div>
          <div className={styles.column__item}>
            UX/UI Designer
            {width < 767 ? (
              <div className={styles.column__item__subtitle}>
                {/* В поисках креативного художника */}
                от 3-ёх лет
              </div>
            ) : (
              width < 375 && (
                <>
                  <div className={styles.column__item__subtitle}>от 3-ёх лет</div>
                </>
              )
            )}
          </div>
        </div>
        {width > 767 && (
          <>
            {width < 1365 ? (
              <div className={styles.vacancy__list__column}>
                <div className={styles.column__header}>Описание</div>
                <div className={styles.column__item}>
                  В поисках креативного и структурного художника
                </div>
              </div>
            ) : (
              <div className={styles.vacancy__list__column}>
                <div className={styles.column__header}>Опыт</div>
                <div className={styles.column__item}>От 3-ёх лет</div>
              </div>
            )}
          </>
        )}

        {width < 1365 ? (
          <div className={styles.vacancy__list__column}>
            <div className={styles.column__header}>График</div>
            <div className={styles.column__item}>Полный рабочий день</div>
          </div>
        ) : (
          <div className={styles.vacancy__list__column}>
            <div className={styles.column__header}>Офис/удаленка</div>
            <div className={styles.column__item}>Офис</div>
          </div>
        )}
        {width > 767 && (
          <div className={styles.vacancy__list__column}>
            <div className={styles.column__header}>&nbsp;</div>
            <div className={styles.column__item}>
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.800962 0.109194L4.57048 3.87871L4.57048 0.454416L5.54691 0.454416V5.54558H0.455741L0.455741 4.56915L3.88003 4.56915L0.110519 0.799637L0.800962 0.109194Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default transition(VacancyPage);
