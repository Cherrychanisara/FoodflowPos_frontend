import React from 'react'
import { CartIcon, MainIcon } from '../icon/icon'


function Header() {
  return (
    
    <div className='flex justify-between items-center px-4 '>
      
      <div
        className='flex items-center gap-2 '>
        <MainIcon className='w-7 h-8' />
      </div>

      <div
        className='flex items-center gap-2 '>
        <CartIcon className='w-10 h-10' />
      </div>

    </div>

  )
}
export default Header