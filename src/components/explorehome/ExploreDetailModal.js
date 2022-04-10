// import { Component } from "react"
// import IosShareIcon from '@mui/icons-material/IosShare';
// import { Link } from "react-router-dom" ;
// import { Dialog, Transition } from '@headlessui/react';
// import { Fragment, useState } from 'react';

// export default function ExploreDetailModal(){
  
//     let [isOpen, setIsOpen] = useState(false);
//     function closeModal() {
//       setIsOpen(false);
//     }
  
//     function openModal() {
//       setIsOpen(true);
//     }
//     return(
//       <>
//       <Transition appear show={isOpen} as={Fragment}>
// <Dialog
//   as="div"
//   className="fixed inset-0 z-10 overflow-y-auto"
//   onClose={closeModal}
// >
//   <div className="min-h-screen px-4 text-center">
//     <Transition.Child
//       as={Fragment}
//       enter="ease-out duration-300"
//       enterFrom="opacity-0"
//       enterTo="opacity-100"
//       leave="ease-in duration-200"
//       leaveFrom="opacity-100"
//       leaveTo="opacity-0"
//     >
//       <Dialog.Overlay className="fixed inset-0" />
//     </Transition.Child>
    
//     <span
//       className="inline-block h-screen align-middle"
//       aria-hidden="true"
//     >
//       &#8203;
//     </span>
//     <Transition.Child
//       as={Fragment}
//       enter="ease-out duration-300"
//       enterFrom="opacity-0 scale-95"
//       enterTo="opacity-100 scale-100"
//       leave="ease-in duration-200"
//       leaveFrom="opacity-100 scale-100"
//       leaveTo="opacity-0 scale-95"
//     >
//   <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      
//     <div className="relative w-auto h-auto m-[50px] mx-auto max-w-3xl">
    
   
//       <div className="relative border-0 rounded-lg grid grid-rows-2 w-[1000px] h-[1000px] bg-white opacity-50 outline-none focus:outline-none">
        
          
//         <div className="grid grid cols 2">
//         <div className="relative flex w-[300px] h-[500px] items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
//         <img
//             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAAD5CAMAAABRVVqZAAAAA1BMVEWAgICQdD0xAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEcGxXMAAfH9TEUAAAAASUVORK5CYII="
//             alt=""
//             className="rounded-[10px] ml-[-48px] mt-[-48px] w-[280px] h-[500px] object-fill  object-cover" />
//         </div>  
        
//         <div className="relative grid grid-rows-3">
//         <div className="relative grid grid-cols-2 gap-x-0">
//         <div className="relative flex h-auto w-auto p-3 flex-auto mb-5">
//           <Link>
//           <img 
//           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAAD5CAMAAABRVVqZAAAAA1BMVEWAgICQdD0xAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEcGxXMAAfH9TEUAAAAASUVORK5CYII="
//           alt=''
//           className="relative mr-1 rounded-[50%] w-[50px] h-[50px] "/>
//           </Link>
//           <Link className="decoration-none font-semibold text-blue-500 mt-[30px] ml-[10px]">Follow</Link>
//         </div>
         
//         </div>
//         <div className="relative flex-auto mt-[-50px] h-full w-full border-2 border-solid p-6">
//             Explore Detail
//         </div>
//         <div>
//         <IosShareIcon/>
//         </div>
//         </div>
//         </div>
//     </div>
//   </div>
//   </div>
//   <div className="opacity-5 fixed inset-0 z-40 bg-black"></div>
  
//   </Transition.Child>
// </div>
// </Dialog>
//   </Transition> 
//       </>
//     )
//   }

// import React, { Component } from 'react'

// export const Modal = ({isOpen, setIsOpen}) => {
  
//     return (
//       <div>
//         <div>
//           {this.props.name}
//         </div>
//         <div>
//           <img src={this.props.imageSrc} alt=''/>
//         </div>
//       </div>
//     )
  
// }

import React from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';




export function Modal(closeModal){


  return (
    <>
      
      {popuptogle ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" onClick={() => closeModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/} 
             
              <div className="grid lg:grid-cols-2 border-0 rounded-lg relative w-full bg-white outline-none focus:outline-none">
                {/*header*/}
               
                <div className="flex w-full h-full bg-gray-100">
                  
                  {/* <img 
                  src="https://images.unsplash.com/photo-1583001810204-ac030157288f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" 
                  alt=""
                  className="object-cover w-full h-full"
                  /> */}
                  
                </div>
                {/*body*/}
                <div className="relative lg:grid-rows-3 p-6 flex-auto ">

                 <div className="flex">
                   <Link className=" bg-gray-100 rounded-full w-10 h-10"> 
                   {/* <img src="" 
                    alt=""
                    className="w-10 h-10 rounded-[100%] object-cover"/>  */}
                   </Link>
                   <div className="text-sm text-blue-300 m-2 hover:text-blue-500 cursor-pointer">Follow</div>
                    <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-40 focus:text-gray-900 float-right text-3xl leading-none font-bold outline-none focus:outline-none"
                    onClick={() => closeModal(false)} >
                  &times;
                  </button>
                 </div>
                  <p className="my-4 h-80 text-blueGray-500 text-lg overflow-y-scroll">
                   
                   this is detail context space. put your detail about your design here

                  </p>
                  <div className="flex gap-x-3">
                   <button><FavoriteBorderIcon/></button>
                   <button><IosShareIcon/></button>
                 </div>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-5 fixed inset-0 z-40 bg-black"></div>
        </>
   ) : null }
    </>
  );
}

