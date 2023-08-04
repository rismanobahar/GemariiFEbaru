import React from 'react'
import NavbarElements from '../navbar/NavbarMenu'
import LgnDropdown from '../navbar/LgnDropdown'
import BhsDropdown from '../navbar/BhsDropdown'
import AkunDropdown from '../navbar/AkunDropdown'
export default function Navbartwo() {
  return (
    <div className='z-[10] sticky top-0 flex flex-row items-center border-b-2 border-black w-auto bg-[#efd9d1] h-auto'>
      <a href='/'>
          <img className='mt-auto border-transparent' src='Gemarii1.png' alt='' height={50} width={200}/>
        </a>
        <div className='mt-0 flex items-center'>
           <input type="text" className="py-2 pl-2 pr-2 w-[800px]  border rounded-md dark:bg-gray-100 dark:text-gray-700 dark:border-gray-600 focus:border-blue-400 dark:focus:border-gray-900 focus:ring-black focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Search"/>
        </div>
      <div className='ml-20'>
         <LgnDropdown/>
      </div>
      <div className='ml-4'>
         <BhsDropdown/>
      </div>
      <div className='float-right mr-0 ml-2 items-right justify-end'>
         <AkunDropdown/>
      </div>
    </div>
  )
}