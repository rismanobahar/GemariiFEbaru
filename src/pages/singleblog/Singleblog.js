import Singlepost from "../../components/singlepost/Singlepost"
import Footer from "../../components/footer/Footer"
import Sidebar from "../../components/sidebar/Sidebar"
import Artikelain from "../../components/artikelain/Artikelain"
import { Link } from "react-router-dom"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import singleblog from "../../components/singleblogdata/Singleblogdata"
import Navbartwo from "../../components/navbarnotlandingpage/Navbartwo"
export default function Singleblog() {
  return (
    <>
    <Navbartwo/>
    <div className='bg-[#ddb7ab] w-full h-full flex flex-row justify-center'>
            <div className='grid gap-y-4 h-full mt-2 mb-4 grid-rows-7 bg-[#ddb7ab]'>
                {singleblog.map((item) => {
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

                                <div className='mt-2 mb-3 p-3 m-3 h-auto w-6/7 text-justify overflow-hidden'> 
                                    <p >
                                      {item.detail}
                                    </p>
                                </div>
                               
                                <hr/>
                                

                                <Link className='hover:no-underline hover:text-opacity-100 opacity-75 hover:text-black text-lg font-bold '>
                                    <div className='flex justify-end items-end m-1 p-2'>
                                        <p className='mr-2'>Next Article</p>
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
    <Footer/>
  
  </> 
  )
}


{/* <div className="all">
      <Singlepost/>
      <Sidebar/>
      <Artikelain/>
      <Footer/>
  </div> */}