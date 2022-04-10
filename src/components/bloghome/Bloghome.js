import {Link} from "react-router-dom"
// import "./posts.css";
// import Post from "../../components/post/Post"
// import Sideblog from "../sideblog/Singledata";
export default function Bloghome() {
//   blogs.length === 0 ? <h3>No Thumbnail</h3> : blogs.map(blogs=>{
//     return(
// <Post data={blogs}/>
//     )
//   })
  return (
    <>
    
    <div className="w-full h-full bg-[#ddb7ab] mt-40">
      <div className="flex flex-col w-full h-full p-6">
          <div className="flex flex-row justify-between mb-4">
            <div className="flex-row flex ml-3">
              <div className="text-3xl font-extrabold">Gemarii</div>
              <div className="text-3xl font-extrabold mt-3 ml-1">Blog</div>
            </div>
            <Link to='/Blogpage' className="flex text-2xl mt-3 text-gray-800 hover:text-gray-700 font-extrabold mr-20 hover:no-underline">Read Other Article</Link>
          </div>
          <div className="grid grid-cols-3 w-full h-full">
            <div className="flex flex-col items-center">
                <Link to='/Singleblog'><img src="https://akcdn.detik.net.id/community/media/visual/2021/10/13/koleksi-chanel-springsummer-2022-8_43.jpeg?w=700&q=90"
                    alt=""
                    height={250} width={450}
                    className='object-cover shadow-md rounded-md'
                  />
                </Link>
                <div className="grid grid-rows-2">
                  <div className="text-center">
                    <span>Wedding Ideas</span>
                    <span>-Month day, year | - views</span>
                  </div>
                  <div className="p-auto mt-0">
                    <p className=" text-center text-xl font-bold">5 Tren Warna Baju 2022, Hijau Zamrud Hingga Kuning Mencolok</p>
                  </div>
                </div>
             </div>
             <div className="flex flex-col items-center">
                <img src="https://akcdn.detik.net.id/community/media/visual/2021/10/05/koleksi-stella-mccartney-spring-summer-2022-3_43.jpeg?w=700&q=90"
                  alt=""
                  height={250} width={450}
                  className='object-cover shadow-md rounded-md'
                />
                <div className="grid grid-rows-2">
                  <div className="text-center">
                    <span>Wedding Ideas</span>
                    <span>-Month day, year | - views</span>
                  </div>
                  <div className="p-auto mt-0">
                    <p className=" text-center text-xl font-bold">5 Tren Warna Baju 2022, Hijau Zamrud Hingga Kuning Mencolok</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-rows-3 bg-gray-100 w-full h-full">
                <div className="grid grid-cols-2 border-b-2 border-gray-300">
                  <p className="p-3 mt-4 font-semibold text-justify">Warna Bold & Menyala Jadi Idola Fesyen di 2022</p>
                  <img src="https://akcdn.detik.net.id/community/media/visual/2022/02/14/shopee_169.png?w=700&q=90"
                        alt=""
                        className="ml-auto mr-0 p-3"
                  />
                </div>
                  
                <div className="grid grid-cols-2 border-b-2 border-gray-300">
                <p className="p-3 mt-4 font-semibold text-justify ">5 Tren Fashion Unik Hingga Kontroversial yang Warnai 2021</p>
                  <img src="https://akcdn.detik.net.id/community/media/visual/2021/02/01/koleksi-gmbh-spring-summer-2021_43.webp?w=700&q=90"
                        alt=""
                        className="ml-auto mr-0 p-3"
                  />
                </div>
                  
                <div className="grid grid-cols-2 border-b-2 border-gray-300">
                <p className="p-3 mt-4 font-semibold text-justify ">Mengintip Tren Fashion 2022, Bisa Jadi Acuan Belanja Saat Diskon Akhir Tahun</p>
                  <img src="https://asset.kompas.com/crops/IMEWgHZnAtcWa81XA8htoq0Hf5M=/0x428:1600x1494/230x153/data/photo/2021/12/07/61aeff1654ed2.jpg"
                        alt=""
                        className="ml-auto mr-0 p-3"
                  />
                </div>
              </div>
          </div>
      </div>
    </div>
    
    </>
    // <div className="posts">
    //   <div className="postsHeader">
    //   <div className="postsTittle">
    //     <span className="postsTA">Gemarii</span>
    //     <span className="postsTB">Blog</span>
    //   </div>
    //   <Link to="/blogpage" className="listBlog">Lihat artikel lainnya</Link>
    //   </div>
    //   <div className="postsAll">
    //     <div className="sidePost">
    //     <Sideblog/>
    //     </div>
    // </div>
    // </div>
  );
}
