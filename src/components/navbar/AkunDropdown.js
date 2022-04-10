import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
// import { ChevronDownIcon } from '@heroicons/react/solid'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom'

export default function AkunDropdown() {
  return (
    <div className="relative w-auto right-0" >
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>
              <AccountCircleIcon style={{fontSize:'30'}} type='button' className='opacity-[0.8] hover:opacity-[1]'/>
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
          <Menu.Items className="absolute flex justify-center text-center items-center -right-5 z-20 w-20 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <Link to='Userprofile'
                    className={`${
                      active ? 'bg-gray-400 hover:no-underline font-bold text-white' : 'text-gray-900'
                    } group flex rounded-md text-center justify-center items-center w-full  px-2 py-2 text-sm`}
                  >
                    User
                  </Link>
                )}
              </Menu.Item>
              <hr/>
              <Menu.Item>
                {({ active }) => (
                  <Link to='Designerup'
                    className={`${
                      active ? 'bg-gray-400 hover:no-underline font-bold text-white' : 'text-gray-900'
                    } group flex f rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Designer
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