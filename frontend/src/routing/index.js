import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import MainPage from '../pages/main-page/Main'
import NotFoundPage from '../pages/404-page/NotFound'
import { Layout } from '../components/layout/Layout'
import Loader from '../components/loader/Loader'

const AboutPage = lazy(() => import('../pages/about-page/About'))
const CasesPage = lazy(() => import('../pages/cases-page/Cases'))
const ServicesPage = lazy(() => import('../pages/services-page/Services'))
const VacancyPage = lazy(() => import('../pages/vacancy-page/Vacancy'))
const CasePage = lazy(() => import('../pages/case-page/Case'))
const ServicePage = lazy(() => import('../pages/service-page/Service'))

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <MainPage />,
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
