import React from 'react'
import AppRoutes from './routes/AppRoutes'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
    <ToastContainer position='top-center' />
     <AppRoutes />
    </>
  )
}


export default App