import React from 'react'
import Vidtext from './Vidtext'

export default function Vidtextall() {
  return (
    <>
    <div className="h-[800px] w-full flex flex-wrap mt-10" id='home'>
        <div className="flex flex-col absolute ml-2 mt-10">
            <div className="font-bold text-sm relative ml-1">Watch Our Video</div>
                <Vidtext/> 
        </div>
         <div className='ml-[1000px] mt-10 absolute'>
                <img src='vidtext.png' alt='' />
                <Link  to='/blogpage'>   
                <Button className="bg-[#ddb7ab] rounded-[100px] absolute w-[277px] h-[58px] font-bold text-lg ml-10 mt-10 mr-20">
                Know More About Us
                </Button>
                </Link>
            </div>   
      </div>
    </>
  )
}
