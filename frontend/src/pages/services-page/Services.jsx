import { Link } from 'react-router-dom'
import { services } from '../../mockData/services'

export const ServicesPage = () => {
  return (
    <div>
      <h1>Services page</h1>
      <ul>
        {services.map((elem) => (
          <li key={elem.id}>
            <Link to={`/services/${elem.id}`}>{elem.service}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}