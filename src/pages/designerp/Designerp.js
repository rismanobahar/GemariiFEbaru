
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {useState} from 'react';
import {Tab} from '@headlessui/react'
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import IosShareIcon from '@mui/icons-material/IosShare';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import 'react-slideshow-image/dist/styles.css';
import Footer from '../../components/footer/Footer';
import Pagination from "@material-tailwind/react/Pagination";
import PaginationItem from "@material-tailwind/react/PaginationItem";
import Icon from "@material-tailwind/react/Icon";
// import DSPSlideshow from './DSPSlide';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Designerp() {
  const [messageModal, setMessageModal] = useState(false);
  let [categories] = useState({
    Gallery: [
      {
        // id: 1,
        // title: 'Does drinking coffee make you smarter?',
        // date: '5h ago',
        // commentCount: 5,
        // shareCount: 2,
      },
      {
        // id: 2,
        // title: "So you've bought coffee... now what?",
        // date: '2h ago',
        // commentCount: 3,
        // shareCount: 2,
      },
    ],
    Ulasan: [
      {
        // id: 1,
        // title: 'Is tech making coffee better or worse?',
        // date: 'Jan 7',
        // commentCount: 29,
        // shareCount: 16,
      },
      {
        // id: 2,
        // title: 'The most innovative things happening in coffee',
        // date: 'Mar 19',
        // commentCount: 24,
        // shareCount: 12,
      },
    ],
    Info: [
      {
        // id: 1,
        // title: 'Ask Me Anything: 10 answers to your questions about coffee',
        // date: '2d ago',
        // commentCount: 9,
        // shareCount: 5,
    },
  ],
    Featured: [
    {
      // id: 1,
      // title: 'Ask Me Anything: 10 answers to your questions about coffee',
      // date: '2d ago',
      // commentCount: 9,
      // shareCount: 5,
  },
],
  })
return (
  <>
    <div className='grid gap-x-6 grid-cols-2 mx-20 p-6 my-6 w-4/5'>
      <div className='relative flex justify-center items-center'>
        <div className='grid-rows-2 w-auto h-full'>
        <div className='grid justify-center grid-rows-5 w-96 h-[300px] bg-gray-100 rounded-[10px] '>
          <div className='flex'>
            <img 
                  src="https://seeklogo.com/images/A/adidas-logo-107B082DA0-seeklogo.com.png"
                  alt=''
                  className="relative object-fill rounded-[50%] w-[70px] h-[70px] p-2 m-2"/>

        <Link className='font-semibold relative mt-4'>Name</Link>
        </div>
        <div className='text-center mt-[25px] border-t border-solid'>Active 1 Hour ago</div>
        <div>
        <button 
        type="button"
        onClick={() => setMessageModal(true)}
        className='flex items-center justify-center bg-[#ddb7ab] mx-w-[100px] rounded-[10px] w-[300px] h-10 font-semibold ml-[35px]'>
          Chat Designer
        </button>
        </div>
        <div className='grid grid-rows-2'>
            <div className='mx-3 border-t border-solid'>
              <i className="ml-[20px] mr-[10px] fa fa-phone" aria-hidden="true"></i>
              +628 xxx xxx 
              <Link className='ml-[10px] decoration-none text-blue-400 hover:text-blue-600'>Tampilkan</Link>
            </div>
            <div className='m-2 text-center border-t border-solid'>
            <i class="m-1 fa fa-user" aria-hidden="true"></i>
            Social Media
            <div className='m-2 flex justify-center'>
            <FacebookIcon className='m-3 cursor-pointer'/>
            <TwitterIcon className='m-3 cursor-pointer' />
            <InstagramIcon className='m-3 cursor-pointer'/>
            <YouTubeIcon className='m-3 cursor-pointer'/>
            <WhatsAppIcon className='m-3 cursor-pointer'/>
            </div>
            </div>
        </div>
        </div>
        <div className='grid grid-rows-3 rounded-[10px] w-96 h-[150px] bg-gray-100 mt-[20px]'>
          <div className='text-center m-2 font-bold'>Share this Profile</div>
          <div className='flex justify-center m-0'>
          <IosShareIcon className='m-3 cursor-pointer'/>
          </div>
          <Link to='/' className='decoration-none text-center m-2 hover:text-gray-700'>
          Report this Profile
          </Link>
        </div>
      </div>
      </div>
      <div className='relative w-full h-full rounded-md bg-gray-100'>
        <div className='grid grid-rows-2 w-full h-full bg-transparent'>
          
      <div className='w-full h-full'>
      <div className="w-full h-full  px-2 py-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-white">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) => classNames(
                  'w-full py-2.5 text-sm leading-5 font-medium text-gray-800 rounded-lg',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                  selected
                    ? 'bg-white'
                    : 'text-black hover:bg-white/[0.12] hover:font-bold'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'bg-white rounded-xl p-3',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative p-3 rounded-md hover:bg-coolGray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount}</li>
                      <li>&middot;</li>
                      <li>{post.shareCount}</li>
                    </ul>

                    <a href="#" className={classNames(
                        'absolute inset-0 rounded-md',
                        'focus:z-10 focus:outline-none focus:ring-2 ring-blue-400'
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
       
      </Tab.Group>
    </div>
        </div>
        </div>
      </div>
    </div>
    {messageModal ? ( 
      <>
      <div className='flex items-center justify-center fixed overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none' >
        <div className='relative w-full my-6 mx-auto max-w-3xl' >
            <div className='grid-rows-4 bg-white w-full outline-none focus:outline-none'>
              <div className='flex flex-row border-b-2 border-black m-1 p-2'>
                <div className='flex p-3 m-2 ml-5 w-full text-center items-center font-bold '>Send Message</div>
                <button
                    className="p-1 m-2 mb-5 ml-auto bg-transparent border-0 text-black opacity-40 focus:text-gray-900 float-right text-3xl leading-none font-bold outline-none focus:outline-none"
                    onClick={() => setMessageModal(false)} >
                  &times;
                </button>
              </div>
              <div className='flex flex-col m-2 p-4'>
                  <div className='m-3 font-semibold'>to : </div>
                  <input className='dark:bg-gray-100 w-full p-3 my-3 dark:text-gray-700  dark:focus:border-blue-300' type='text' placeholder='Destination Name'/>
                  <div className='m-3 font-semibold'>Your Message :</div>
                  <input className='dark:bg-gray-100 w-full h-36 p-3 my-3 dark:text-gray-700  dark:focus:border-blue-300' type='text' placeholder='input your Message'/>
              </div>
            </div>
        </div>
      </div>
      <div className='opacity-[0.8] fixed inset-0 z-40 bg-black' onClick={() => setMessageModal(false)}></div>
      </>
    ) : null }
    <Footer/>
    </>
  )
}
