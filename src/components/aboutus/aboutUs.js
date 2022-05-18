import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
export default function Aboutus() {
  return (
    <>
        <div id='about'>
            <div className='font-bold text-center m-10 text-5xl'>
                About Gemarii
            </div>
            <div className='flex justify-center items-center mt-10 mb-32'>
                    <p className='h-40 w-72 text-center text-lg font-semibold'>
                        "Gemarii is a technology-based paltform that main activity is in the connection
                        between clients and custom made fashion designers by providing the most compelling
                        communication experience possible"
                    </p>
            </div>
            <div className='grid grid-cols-3 py-4 h-auto gap-x-10 justify-center items-center w-full bg-[#ddb7ab]'>
                <div className='flex flex-col justify-center items-center'>
                
                    <SchoolIcon style={{fontSize:'100'}}/>
                    <span className='font-bold text-center'>Fashion Education and Network</span>
                    <p className='p-1 text-center w-52 text-sm'>
                        Provide interesting and
                        interactive education About
                        fashion especially the custom
                        made fashion industry through
                        creative platform that reliable,
                        consistent, and professional while
                        building global fashion community.
                    </p>
                </div>
                <div className='flex flex-col h-full justify-center items-center'>
                    <DesktopWindowsIcon style={{fontSize:'100'}}/>
                    <span className='font-bold text-center'>Easy-to-use Communication Platform</span>
                    <p className='p-1 text-center w-52 text-sm'>
                        Provide an easy-to-use platform width
                        various effective and efficient
                        feautres and services that make the communication
                        between clients and fashion designers during the
                        online custom made and renting process safe and
                        comfortable    
                    </p>
                </div>
                <div className='flex flex-col h-full justify-center items-center'>
                    <FactCheckIcon style={{fontSize:'100'}}/>
                    <span className='font-bold text-center'>Easily Accessible Portfolio</span>
                    <p className='p-1 text-center w-52 text-sm'>
                       Help fashion designers to develop
                       their creative portfolio as a creative
                       online communication to impress or attract
                       potential clients closer. The online portfolio
                       is easily accessible in detail and complete with 
                       our sophisticated technology
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}
