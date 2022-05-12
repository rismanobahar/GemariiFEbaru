
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Chevron from 'react-chevron'
import React, {useState} from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Kategori from '../../components/Kategoriexplore/Kategori'
import Gender from '../../components/Kategoriexplore/Gender'
import exploredata from '../../components/explorepagedata/exploredata'

  export default function Explore() {
    const [popuptogle, setpopuptogle] = useState(false);
    const [callImg, setCallimg] = useState('');
    const showImg = (imageSrc) => {
      setCallimg(imageSrc);
      setpopuptogle(true);
    }
    return (
     <>
    <div className='bg-[#ddb7ab]'>
     <div className="flex flex-col w-full h-full">
        <div className="flex flex-row justify-center bg-[#efd9d1] p-1 border-b-2 border-black">
            <div><Kategori/></div>
            <div><Gender/></div>
            <div type='button' className='bg-black opacity-75 hover:opacity-70 text-gray-100 font-bold px-5 py-1 rounded-md ml-4'>Search</div>    
        </div>
        
        <div className="max-w-3xl mx-auto py-16 px-1 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-6 xl:gap-x-2">
            {exploredata.map((item) =>{
              return (
              <a key={item.id} href={item.href} className="group">
                <div className="relative w-full h-full aspect-w-1 aspect-h-1 bg-gray-100 rounded-[10px] overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
               
                  <img type='button'
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="rounded-[10px] hover:opacity-90 w-full h-full object-cover " 
                    onClick={() => showImg(item.imageSrc)}/>
               
                 <Link to='/DesignerP'> 
                    <div className="absolute bottom-0 bg-black bg-opacity-[0.5] w-full h-auto">
                      <div className="rounded-[10px] text-white text-center font-semibold hover:font-bold">
                        {item.name}
                      </div>
                    </div>
                 </Link>
                </div>
                </a>
            )})}
          </div>
        </div>
        
      </div>
      <div className="bg-transparent px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
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
  </div>
    {popuptogle ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" onClick={() => setpopuptogle(false)}
          >
            <div className="relative justify-center flex h-screen w-auto my-6 mx-auto max-w-6xl">
              {/*content*/} 
             
              <div className="grid lg:grid-cols-2 border-0 rounded-lg relative w-full bg-white outline-none focus:outline-none">
                {/*header*/}
               
                <div className="flex w-full h-full bg-gray-400">
                  
                  <img 
                  src={callImg} 
                  alt=""
                  className="object-cover w-full h-full"
                  />
                  
                </div>
                {/*body*/}
                <div className="relative lg:grid-rows-3 p-6 flex-auto ">

                 <div className="flex">
                   <Link className=" rounded-full w-10 h-10"> 
                    <img src="https://seeklogo.com/images/A/adidas-logo-107B082DA0-seeklogo.com.png" 
                      alt=""
                      className="w-10 h-10 rounded-[100%] object-cover"/> 
                   </Link>
                   <div className='ml-2 text-md text-center flex items-center font-extrabold'>Name</div>
                  
                   
                    <div className="text-sm items-center flex font-semibold text-blue-500 ml-2 hover:font-semibold hover:text-blue-800 border-2 border-t-1 border-gray-100 p-1 cursor-pointer">Follow</div>
                    <div type='button' className='flex ml-2 items-center'>
                   <MoreHorizIcon className='opacity-[0.7] hover:opacity-[1]'/>
                   </div>
                   <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-40 focus:text-gray-900 float-right text-3xl leading-none font-bold outline-none focus:outline-none"
                    onClick={() => setpopuptogle(false)} >
                  &times;
                  </button>
                 </div>
                  <p className="my-4 h-[500px] text-blueGray-500 text-lg overflow-y-scroll">
                   
                   this is detail context space. put your detail about your design here

                  </p>
                  <div className="flex gap-x-3">
                   <button className='opacity-[0.7] hover:opacity-[1]'><FavoriteBorderIcon/></button>
                   <button className='opacity-[0.7] hover:opacity-[1]'><IosShareIcon/></button>
                 </div>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-[0.8] fixed inset-0 z-40 bg-black"></div>
        </>
   ) : null }
      <Footer/>
      </>
    )
  }