import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react'
import { Link } from 'react-router-dom'

export default function LgnDropdown() {
  return (
    <div className="w-auto relative right-7">
      <Menu as="div" className="inline-block text-left">
        <div>
        <Menu.Button className='inline-flex justify-between w-36 h-auto p-1 text-sm font-semibold text-gray-700 bg-gray-600 rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
          <AccountCircleIcon type='button' className='opacity-[0.8] hover:opacity-[1]'/>
          Sign Up
          <ChevronDownIcon
              className="w-5 h-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
        </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute ml-20 z-20 -right-7 w-52 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link to='/Registeruser'
                    className={`${
                      active ? 'font-bold bg-gray-400 text-white' : 'text-gray-900'
                    } group flex hover:no-underline rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Sign Up as User
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link to='/LoginUser'
                    className={`${
                      active ? 'font-bold bg-gray-400 text-white' : 'text-gray-900'
                    } group flex hover:no-underline rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Login as User
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link to='/Registerdesigner'
                    className={`${
                      active ? 'font-bold bg-gray-400 text-white' : 'text-gray-900'
                    } group flex hover:no-underline rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Sign Up as Fashion Designer
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link to='/Logindesigner'
                    className={`${
                      active ? 'font-bold bg-gray-400 text-white' : 'text-gray-900'
                    } group flex hover:no-underline rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Login as Fashion Designer
                  </Link>
                )}
              </Menu.Item>
            </div>
          
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  )
}