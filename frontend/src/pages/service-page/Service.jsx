import { useParams } from 'react-router-dom'

export const ServicePage = () => {
  const { serviceId } = useParams()

  return <div>Service page {serviceId}</div>
}
