import styles from './styles/Breadcrumbs.module.scss'
import { Link, useMatches } from 'react-router-dom'

export const Breadcrumbs = () => {
  let matches = useMatches()
  let crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match, index) => {
      const isLast = index === matches.length - 1

      // Если это путь, например, '/cases/:caseId' или '/services/:serviceId',
      // добавляем родительскую крошку 'КЕЙСЫ' или 'ЭКСПЕРТНОСТЬ'
      if (match.pathname.includes('/cases/') && !isLast) {
        return (
          <span key={index}>
            <Link to="/cases">КЕЙСЫ</Link> / {match.handle.crumb(match.data)}
          </span>
        )
      }

      if (match.pathname.includes('/services/') && !isLast) {
        return (
          <span key={index}>
            <Link to="/services">ЭКСПЕРТНОСТЬ</Link> /{' '}
            {match.handle.crumb(match.data)}
          </span>
        )
      }

      return <span key={index}>{match.handle.crumb(match.data)}</span>
    })

  return (
    <div className={styles.breadcrumbs}>
      <Link to="/">ГЛАВНАЯ</Link> / {crumbs}
    </div>
  )
}
