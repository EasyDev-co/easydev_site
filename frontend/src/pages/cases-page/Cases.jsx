import { Link } from 'react-router-dom'
import { cases } from '../../mockData/cases'

export const CasesPage = () => {
  return (
    <div>
      <h1>Cases page</h1>
      <ul>
        {cases.map((elem) => (
          <li key={elem.id}>
            <Link to={`/cases/${elem.id}`}>{elem.caseName}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
