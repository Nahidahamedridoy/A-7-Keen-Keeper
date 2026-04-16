import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import FriendsDetails from './pages/friends/FriendsDetails'
import TimeLine from './pages/timeline/TimeLine'
import States from './pages/states/States'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Homepage from './pages/homepage/Homepage'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout/>,
      children: [
        {
          // path: "/",
          index:true ,
          element: <Homepage/>
        },
        {
          path: "/timeline",
          element: <TimeLine/>
        },
        {
          path: "/states",
          element: <States/>
        },
      ],
      errorElement: <NotFoundPage/>
    },
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
