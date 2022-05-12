import { render } from '@testing-library/react'
import React, { Component } from 'react'
import {Link} from 'react-scroll'

export default function NavbarElements() {
  return (
    <div className='flex relative items-center mr-2'>
        <a href='/'>
          <img className='mt-auto border-transparent' src='Gemarii1.png' alt='' height={50} width={200}/>
        </a>
        <div className='mt-0 flex items-center'>
           <input type="text" className="py-2 pl-3 pr-4 w-[500px]  border rounded-md dark:bg-gray-100 dark:text-gray-700 dark:border-gray-600 focus:border-blue-400 dark:focus:border-gray-900 focus:ring-black focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Search"/>
        </div>
        <div className="relative flex p-6 items-center">
            <Link  to="#home" spy={true} smooth={true} offset={50} duration={500} type='button' className="text-[20px] font-extrabold text-black hover:text-gray-600  transition duration-300 border-b-4 border-transparent hover:no-underline hover:border-gray-600 sm:mx-6 ">Home</Link>
            <Link  to="#explore" spy={true} smooth={true} offset={50} duration={500} type='button' className="text-[20px] font-extrabold text-black hover:text-gray-600  transition duration-300 border-b-4 border-transparent hover:no-underline hover:border-gray-600 sm:mx-6">Explore</Link>
            <Link  to="bloghome" spy={true} smooth={true} offset={50} duration={500} type='button' className="text-[20px] font-extrabold text-black hover:text-gray-600  transition duration-300 border-b-4 border-transparent hover:no-underline hover:border-gray-600 sm:mx-6">Blog</Link>
            <Link  to="test1" spy={true} smooth={true} offset={50} duration={500} type='button' className="text-[20px] font-extrabold text-black hover:text-gray-600  transition duration-300 border-b-4 border-transparent hover:no-underline hover:border-gray-600 sm:mx-6">About Us</Link>
        </div>
    </div>
  )
}
