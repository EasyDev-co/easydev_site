import { createBrowserRouter } from 'react-router-dom'

import { MainPage } from '../pages/main-page/Main'
import { AboutPage } from '../pages/about-page/About'
import { CasesPage } from '../pages/cases-page/Cases'
import { ServicesPage } from '../pages/services-page/Services'
import { VacancyPage } from '../pages/vacancy-page/Vacancy'
import { NotFoundPage } from '../pages/404-page/NotFound'
import { CasePage } from '../pages/case-page/Case'
import { ServicePage } from '../pages/service-page/Service'
import { Layout } from '../components/layout/Layout'

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
        element: <AboutPage />,
      },
      {
        path: '/cases',
        element: <CasesPage />,
      },
      {
        path: '/cases/:caseId',
        element: <CasePage />,
      },
      {
        path: '/services',
        element: <ServicesPage />,
      },
      {
        path: '/services/:serviceId',
        element: <ServicePage />,
      },
      {
        path: '/vacancy',
        element: <VacancyPage />,
      },
    ],
  },
])
