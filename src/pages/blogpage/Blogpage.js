import React from 'react'
// import {Link} from "react-router-dom"
// import TopBar from "../../components/topbar/TopBar";
import Allblog from "../../components/allblogdata/Allblogdata";
import Chevron from 'react-chevron'
import "./blogpage.css";
import Sidebar from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import blogs from '../../components/allblogdata/Allblogdata';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Navbartwo from '../../components/navbarnotlandingpage/Navbartwo';
export default function Blogpage() {
    return (
        <>
        <Navbartwo/>
        <div className='bg-[#ddb7ab] w-full h-full flex flex-row justify-center'>
            <div className='grid gap-y-4 h-full mt-2 mb-4 grid-rows-7 bg-[#ddb7ab]'>
                {blogs.map((item) => {
                    return(
                        <div key={item.id}>
                            <div className='grid-rows-6 rounded-md shadow-md p-2 text-center justify-center items-center bg-gray-100 w-[600px] h-auto'>
                                <div className='p-3 text-2xl font-extrabold '>{item.title}</div>
                                <div className='flex p-3 items-center justify-center'>
                                    <div className='p-1'>author : {item.author}</div>
                                    <div className='flex items-center justify-center'>|</div>
                                    <div className='p-1'>{item.date}</div>
                                </div>
                                
                                <hr/>

                                <div className='bg-gray-100 justify-center mt-2 mb-2 p-2 items-center flex'>
                                    <img src={item.imageSrc}
                                    alt={item.imageAlt}
                                    height={250} width={500}
                                    />
                                </div>

                                <hr/>

                                <div className='mt-2 mb-3 p-3 m-3 h-32 w-6/7 text-justify overflow-hidden'> 
                                    <p >
                                      {item.detail}
                                    </p>
                                </div>
                               
                                <hr/>

                                <Link className='hover:no-underline hover:text-opacity-100 opacity-75 hover:text-black text-lg font-bold '>
                                    <div className='flex justify-end items-end m-1 p-2'>
                                        <p className='mr-2'>Read More</p>
                                        <ArrowForwardIosIcon/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='grid grid-rows-4 gap-y-2 top-0 bottom-auto mb-4 h-full w-auto sticky mt-2 shadow-md ml-3'>
                <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" 
                alt=""
                className='bg-white p-2'
                height={50} width={100}
                />
                <img
                 src="https://cdn.pixabay.com/photo/2018/11/13/22/01/instagram-3814080__340.png" 
                alt=""
                className='bg-transparent'
                height={50} width={100}
                />
                <img
                src="https://cdn-icons-png.flaticon.com/512/3116/3116490.png" 
                alt=""
                className='bg-transparent'
                height={50} width={100}
                />
                <img
                src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1648721581~hmac=bb79ddbb50328cea09d48a862e51cefa" 
                alt=""
                className='bg-transparent'
                height={50} width={100}
                />
            </div>
        </div>
      <div className="bg-[#ddb7ab] px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between lg:justify-center">
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <Chevron direction={'left'} className="text-center h-auto w-auto" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            <a
              href="#"
              aria-current="page"
              className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              1
            </a>
            <a
              href="#"
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              2
            </a>
            <a
              href="#"
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
              ...
            </span>
            <a
              href="#"
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
            >
              8
            </a>
            <a
              href="#"
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              9
            </a>
            <a
              href="#"
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <Chevron direction={'right'} className="text-center h-auto w-auto" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
         <Footer/>
         {/* <div className='all'>
        <Allblog/> 
        <Sidebar/>
         </div>
         <div className='pageControl'>
         <div className='pageNumber'>
          <Link className='link1'>1</Link>
          <Link className='link2'>2</Link>
          <Link className='link3'>3</Link>
          <Link className='link4'>4</Link>
          <Link className='link5'>5</Link>
      </div>
      <Link className='nextPage'>Halaman Berikutnya</Link>
      </div>   */}
        </>
    )
}
