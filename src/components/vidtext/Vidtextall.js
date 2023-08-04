import React from 'react'
import { Button } from 'react-bootstrap'
import {Link} from 'react-scroll'
import Vidtext from './Vidtext'

export default function Vidtextall() {
  return (
    <div className="h-[800px] w-full flex flex-wrap mt-10" id='home'>
        <div className="flex flex-col absolute mt-10">
            <div className="font-bold text-[30px] relative text-center">Watch Our Video</div>
                <Vidtext/> 
        </div>
         <div className='ml-[1000px] mt-10 absolute'>
                <img src='vidtext.png' alt='' />
                <Link to="explore" spy={true} smooth={true} offset={1} duration={500}>   
                <Button className="bg-[#ddb7ab] rounded-[100px] w-full mt-4 h-[58px] font-bold text-lg">
                Know More About Us
                </Button>
                </Link>
            </div>   
      </div>
  )
}
