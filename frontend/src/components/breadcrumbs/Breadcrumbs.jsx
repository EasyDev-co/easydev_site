// import { useWindowWidth } from '@react-hook/window-size'
// import styles from './styles/Breadcrumbs.module.scss'

// export const Breadcrumbs = () => {
//   const width = useWindowWidth()

//   return (
//     <div className={styles.breadcrumbs}>
//       {width < 480 ? 'HOME' : 'ГЛАВНАЯ'} / <span>КЕЙСЫ</span>
//     </div>
//   )
// }
import { Link } from 'react-router-dom';
import styles from './styles/Breadcrumbs.module.scss';

export const Breadcrumbs = ({ items }) => {
  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      <ul>
        {items.map((item, index) => (
          <li key={item.path}>
            {index === items.length - 1 ? (
              <span className={styles.active}>{item.label}</span>
            ) : (
              <Link to={item.path}>{item.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};