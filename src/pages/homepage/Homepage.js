import { Link, useLocation } from "react-router-dom";
import Posts from "../../components/bloghome/Bloghome"
import Slide from "../../components/header/Slide"
import Vidtext from "../../components/vidtext/Vidtext";
import { Button } from "react-bootstrap";
import Explore from "../../components/explorehome/ExploreHome";
import Footer from "../../components/footer/Footer";
import Aboutus from "../../components/aboutus/aboutUs";

export default function Homepage() {

  return (
    <>
    <div className="bg-[#efd9d1] object-fill flex flex-col" id="home">
     
      <div className="relative mt-10">
        <Slide/>
      </div>
      <div className="h-[800px] w-full flex flex-wrap mt-10">
      
          <div className="flex flex-col absolute ml-10 mt-10">
                <div className="font-bold text-[36px] relative ml-[324px]">Watch Our Video</div>
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
      <div className=" mb-40">
        <Aboutus/>
      </div>
      <div>
        <Explore/>
      </div>
      <div>
        <Posts/>
      </div>
        <Footer/>
      </div>
    </>
  );
}
