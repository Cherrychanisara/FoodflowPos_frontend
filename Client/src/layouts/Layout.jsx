import React from 'react'
import { Outlet } from 'react-router'
import Mainnav from '../components/Mainnav'
import Header from '../components/Header'


function Layout() {
  return (
   
      
      <div>
      
        <div className="w-full p-1 bg-gray-100">
        <Header />
          
        </div>
        
        <div className="flex flex-1 justify-center   bg-gray-100">
          <div className='flex'>
             <Mainnav />
          </div>
         <div className='flex-1 w-full h-full   justify-center'> 
          <Outlet />
         </div>
          
        </div>
      </div>
    
  )
}

export default Layout