import { createBrowserRouter } from 'react-router-dom'

import { MainPage } from '../pages/main-page/Main'
import { AboutPage } from '../pages/about-page/About'
import { CasesPage } from '../pages/cases-page/Cases'
import { ContactsPage } from '../pages/contacts-page/Contacts'
import { ServicesPage } from '../pages/services-page/Services'
import { VacancyPage } from '../pages/vacancy-page/Vacancy'
import { NotFoundPage } from '../pages/404-page/NotFound'
import { CasePage } from '../pages/case-page/Case'
import { ServicePage } from '../pages/service-page/Service'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <NotFoundPage />,
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
    path: '/contacts',
    element: <ContactsPage />,
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
])
