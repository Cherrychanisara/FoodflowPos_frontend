import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from '../layouts/Layout'
import Createmenu from '../pages/auth/Createmenu'
import Dashboard from '../pages/auth/Dashboard'
import Order from '../pages/auth/Order'
import Drawer from '../pages/auth/Drawer'
import Bills from '../pages/auth/Bills'

import Login from '../pages/user/Login'
import Register from '../pages/user/Register'

function AppRoutes() {
  return (
    <Routes>
      {/* Parent Layout */}
      <Route path="/" element={<Layout />}>
        {/* Child Routes */}
        <Route index element={<Drawer/>} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="drawer" element={<Drawer />}/>
        <Route path="order" element={<Order />} />
        <Route path="bills" element={<Bills/>} />
        <Route path="createmenu" element={<Createmenu />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>

      {/* 404 Page */}
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}

export default AppRoutes
