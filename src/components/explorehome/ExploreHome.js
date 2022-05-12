    
import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import products from './designList';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from "react-router-dom" ;

export default function ExploreHome() {
  const [popuptogle, setpopuptogle] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [callImg, setCallimg] = useState('');
  const showImg = (imageSrc) => {
    setCallimg(imageSrc);
    setpopuptogle(true);
  }
  // const getData = () => {
  //   fetch('13.251.197.120:1338/api/blogs?page'=+page)
  //     .then(response => {
  //         setData([...data,response])
  //     })
  //     .catch(error => {
  //         // handle the error
  //     });
  // }
  // useEffect(() => {
  //   getData();
  // },[page]);
 return (
      <>
       <div className="flex-column bg-[#ddb7ab]" id='explore'>
        <div className='flex items-center justify-center w-full h-40 m-6 py-10'>
          <img src='Gemarii3.png'
           alt=''
           height={250} width={600}
           className='p-3 mt-20'
            />
        </div>
         <div className="flex flex-column max-w-2xl mx-auto py-5 px-1 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          
  
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:grid xl:gap-x-8">
            {products.map((item) =>(  
              <div key={item.id} className="group">
                <div className="relative rounded-[10px] w-full h-full aspect-w-1 aspect-h-1 bg-gray-100  overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="rounded-[10px] hover:opacity-90 w-full h-full object-center object-cover"  
                    type='button'
                    onClick={() => showImg(item.imageSrc)}
                     />
                    <Link to='/DesignerP'>
                    <div className="absolute bottom-0 bg-black bg-opacity-[0.5] w-full h-auto">
                      <div className="rounded-[10px] hover:font-bold font-semibold text-white text-center">
                        {item.name}
                      </div>
                    </div>
                    </Link>
                </div>  
                
             </div>
            ))}
      </div>
            <Link type='button' to='/Explore' className='hover:no-underline'>
                <div  className="flex w-full mr-0 ml-auto justify-center items-center text-center p-3 mt-12 mb-10 font-medium  text-white capitalize transition-colors duration-200 transform bg-black bg-opacity-20 rounded-[10px] hover:bg-gray-600 focus:outline-none focus:ring focus:ring-white focus:ring-opacity-10">
                    LIHAT SEMUA
                </div>
            </Link>
       
</div>
 
</div> 
 {popuptogle ? (
        <>
          <div
            className="justify-center items-center z-50 flex overflow-x-hidden overflow-y-auto fixed inset-0  outline-none focus:outline-none" onClick={() => setpopuptogle(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/} 
             
              <div className="grid lg:grid-cols-2  border-0 rounded-lg relative w-full bg-white outline-none focus:outline-none">
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
                   <Link className=" bg-transparent rounded-full w-10 h-10"> 
                   <img src="https://seeklogo.com/images/A/adidas-logo-107B082DA0-seeklogo.com.png" 
                    alt=""
                    className="w-10 z-10 h-10 rounded-[100%] object-fill"/> 
                   </Link>
                   <div className="text-sm font-semibold text-blue-800 m-2 hover:text-blue-700 cursor-pointer">Follow</div>
                   <div type='button' className='flex items-center float-right'>
                   <MoreHorizIcon className='opacity-[0.7] hover:opacity-[1]'/>
                   </div>
                    <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-40 focus:text-gray-900 float-right text-3xl leading-none font-bold outline-none focus:outline-none"
                    onClick={() => setpopuptogle(false)} >
                  &times;
                  </button>
                 </div>
                  <p className="my-4 h-80 text-blueGray-500 text-lg overflow-y-scroll">
                   
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

</>
      )
}

