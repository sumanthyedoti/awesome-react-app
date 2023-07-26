import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import FramerMotion, { ButtonSparks } from '../realms/framer-motion'
import Home from '../Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/framer-motion',
        element: <FramerMotion />,
        children: [
          {
            path: 'button-sparks',
            element: <ButtonSparks />,
          },
        ],
      },
    ],
  },
])

export default router
