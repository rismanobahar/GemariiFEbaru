import React, {useState} from 'react'
import Footer from '../../components/footer/Footer'
import UploadIcon from '@mui/icons-material/Upload';
import Navbartwo from '../../components/navbarnotlandingpage/Navbartwo';


export default function Userprofile() {

  const [picturepop, setpicturepop] = useState(false);
  const [profilepop, setprofilepop] = useState(false);
  return (
    <>
    <Navbartwo/>
    <div className='flex justify-center items-center bg-[#ddb7ab]'>
      <div className='grid grid-cols-2 gap-x-4 w-3/5 h-full my-10 mx-1 p-5 rounded-md bg-gray-50 '>

        <div className='flex flex-col justify-center items-center border-r-2'>
          <div className='flex w-'>
            <img 
            src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className='bg-gray-400 w-60 h-60 object-cover rounded-md'
            height={150} width={250}
            />
          </div>
          <div className='bg-gray-400 hover:bg-opacity-75 mt-10 w-32 h-10 flex justify-center items-center rounded-md' type='button' onClick={() => setpicturepop(true)}>
            <div className='text-center p-1 font-semibold text-white' >Choose Picture</div>
          </div>
        </div>
        <div className='flex flex-col bg-gray-100'>
            <span className='p-3 font-semibold'>Personal Data </span>
            <div className='mx-4 my-4 p-2 leading-10'>
              <div className='font-normal'>Name : Rismano</div>
              <div className='font-normal'>Email : rismano@gmail.com</div>
              <div className='font-normal'>Phone Number : +62812345679</div>
            </div>
            <div type='button' className='w-32 flex bg-opacity-75 items-baseline mt-auto mb-0 justify-center mx-4 my-1 h-10 bg-gray-400  rounded-md'>
                <div className='text-center font-semibold text-white p-2' onClick={() => setprofilepop(true)}>Change Profile</div>
            </div>
        </div>

      </div>
    </div>
    <Footer/>
    {picturepop ? (
      <>
        <div className='flex justify-center z-50 items-center overflow-x-hidden fixed overflow-y-auto inset-0 ' onClick={() => setpicturepop(false)}>

          <div className='relative w-auto my-6 mx-auto max-w-3xl'>
            <div type='button' className='flex items-center justify-center bg-gray-300 w-80 h-80 rounded-md'>
              <UploadIcon/> Upload your Image
            </div>
          </div>

        </div>
        <div className='opacity-[0.8] fixed inset-0 z-40 bg-black'></div>
      </>
    ) : null }

    {profilepop ? (

      <>
        <div className='flex justify-center z-50 items-center overflow-x-hidden fixed overflow-y-auto inset-0 ' onClick={() => setprofilepop(false)}>
          <div className='grid grid-rows-2 bg-slate-300 p-1 m-1 w-80 h-80'>
            <div className='mx-1 my-1 p-1'>
                <div className='flex flex-col m-1 p-1'>
                    <div className='m-1 font-semibold'>Name : </div>
                    <input className='dark:bg-gray-100 w-full p-1 my-1 dark:text-gray-700  dark:focus:border-blue-300' type='text' placeholder='Name'/>
                    <div className='m-1 font-semibold'>Email : </div>
                    <input className='dark:bg-gray-100 w-full p-1 my-1 dark:text-gray-700  dark:focus:border-blue-300' type='text' placeholder='Email'/>
                    <div className='m-1 font-semibold'>Phone : </div>
                    <input className='dark:bg-gray-100 w-full p-1 my-1 dark:text-gray-700  dark:focus:border-blue-300' type='text' placeholder='Phone Number'/>
                </div>
            </div>
            <div type='button' className='w-32 flex hover:bg-opacity-75 items-center mt-auto mb-0 justify-center mx-4 my-1 h-10 bg-gray-400  rounded-md'>
                <div className='text-center font-semibold text-white p-2'>Change Profile</div>
            </div>
          </div>
        </div>
        <div className='opacity-[0.8] fixed inset-0 z-40 bg-black'></div>
      </>

    ) : null }
    </>
  )
}
