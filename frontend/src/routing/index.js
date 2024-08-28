import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import { AnimatedMainPage } from '../pages/main-page'
import NotFoundPage from '../pages/404-page/NotFound'
import { Layout } from '../components/layout/Layout'
import Loader from '../components/loader/Loader'

const AboutPage = lazy(() =>
  import('../pages/about-page').then((module) => ({
    default: module.AnimatedAboutPage,
  })),
)
const CasesPage = lazy(() =>
  import('../pages/cases-page').then((module) => ({
    default: module.AnimatedCasesPage,
  })),
)
const ServicesPage = lazy(() =>
  import('../pages/services-page').then((module) => ({
    default: module.AnimatedServicesPage,
  })),
)
const VacancyPage = lazy(() =>
  import('../pages/vacancy-page').then((module) => ({
    default: module.AnimatedVacancyPage,
  })),
)
const CasePage = lazy(() =>
  import('../pages/case-page').then((module) => ({
    default: module.AnimatedCasePage,
  })),
)
const ServicePage = lazy(() =>
  import('../pages/service-page').then((module) => ({
    default: module.AnimatedServicePage,
  })),
)

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <AnimatedMainPage />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<Loader />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: '/cases',
        element: (
          <Suspense fallback={<Loader />}>
            <CasesPage />
          </Suspense>
        ),
      },
      {
        path: '/cases/:caseId',
        element: (
          <Suspense fallback={<Loader />}>
            <CasePage />
          </Suspense>
        ),
      },
      {
        path: '/services',
        element: (
          <Suspense fallback={<Loader />}>
            <ServicesPage />
          </Suspense>
        ),
      },
      {
        path: '/services/:serviceId',
        element: (
          <Suspense fallback={<Loader />}>
            <ServicePage />
          </Suspense>
        ),
      },
      {
        path: '/vacancy',
        element: (
          <Suspense fallback={<Loader />}>
            <VacancyPage />
          </Suspense>
        ),
      },
    ],
  },
])
