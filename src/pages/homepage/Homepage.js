import { Link, useLocation } from "react-router-dom";
import Posts from "../../components/bloghome/Bloghome"
import Slide from "../../components/header/Slide"
import Vidtext from "../../components/vidtext/Vidtext";
import { Button } from "react-bootstrap";
import Explore from "../../components/explorehome/ExploreHome";
import Footer from "../../components/footer/Footer";
import Aboutus from "../../components/aboutus/aboutUs";
import Vidtextall from "../../components/vidtext/Vidtextall";

export default function Homepage() {

  return (
    <>
    <div className="bg-[#efd9d1] object-fill flex flex-col" id="home">
     
      <div className="relative mt-10">
        <Slide/>
      </div>
        <Vidtextall/>     
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
