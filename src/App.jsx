import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import RiderDashboardLayout from './layouts/RiderDashboardLayout'
import RiderProfile from './pages/dashboard/rider/RiderProfile'
import RiderDashboard from './pages/dashboard/rider'
import DriverDashboardLayout from './layouts/DriverDashboardLayout'
import DriverProfile from './pages/dashboard/driver/DriverProfile'
import DriverDashboard from './pages/dashboard/driver'
import DriverSidebar from './components/DriverSidebar'
import Notifications from './components/Notifications'
import ChatPage from './components/ChatPage'
import RideInProgress from './components/RideinProgress'
import UserProfile from './components/UserProfile'
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [{
        index: true,
        element: <Home />
      }, 
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'rideinprogress',
        element: <RideInProgress/>
      },
      {
        path: 'userprofile',
        element: <UserProfile/>
      },
      {
        path: 'driversidebar',
        element: <DriverSidebar/>
      },
      {
        path:"notifications",
        element:<Notifications />
      },
      {
        path:"chatpage",
        element:<ChatPage/>
      },
      ]
    },


    {
      path: "/dashboard/rider",
      element: <RiderDashboardLayout />,
      children: [
        {
          index: true,
          element: <RiderDashboard />,

        },
        {
          path:"profile",
          element:<RiderProfile />
        },
      ],
    },
    {
      path: "/dashboard/driver",
      element: <DriverDashboardLayout/>,
      children: [
        {
          index: true,
          element: <DriverDashboard/>,

        },
        {
          path:"userprofile",
          element:<UserProfile/>
        }
      ],
    }
  ])

  return <RouterProvider router={router} />
}

export default App
