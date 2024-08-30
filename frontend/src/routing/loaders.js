import { getCases } from '../api/cases/getCases'
import { getServices } from '../api/service/getServices'

export const caseLoader = async ({ params }) => {
  const cases = await getCases()
  const res = cases.results.find((c) => c.pk === params.caseId)

  if (!res) {
    throw new Response('Not Found', { status: 404 })
  }

  return res
}

export const serviceLoader = async ({ params }) => {
  const service = await getServices()
  const res = service.results.find((s) => s.id === params.serviceId)

  if (!res) {
    throw new Response('Not Found', { status: 404 })
  }

  return res
}
