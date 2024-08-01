import { useParams } from 'react-router-dom'

export const CasePage = () => {
  const { caseId } = useParams()

  return <div>Case page {caseId}</div>
}
