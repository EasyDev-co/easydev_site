import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { RouterProvider } from 'react-router-dom'
import { router } from './routing'
import { AnimatePresence } from 'framer-motion'
import './styles/globals.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AnimatePresence mode='wait'>
      <RouterProvider router={router} />
    </AnimatePresence>
  </React.StrictMode>,
)

reportWebVitals()
