import { Link, useLocation } from "react-router-dom";
import Posts from "../../components/bloghome/Bloghome"
import Slide from "../../components/header/Slide"
import Vidtext from "../../components/vidtext/Vidtext";
import { Button } from "react-bootstrap";
import Explore from "../../components/explorehome/ExploreHome";
import Footer from "../../components/footer/Footer";
import Aboutus from "../../components/aboutus/aboutUs";
import Vidtextall from "../../components/vidtext/Vidtextall";
import NavbarTop from "../../components/navbar/Navbar";

export default function Homepage() {

  return (
    <>
    <div className="bg-[#efd9d1] object-fill flex flex-col w-100" id="home">
      <NavbarTop/>
      <div className="relative mt-10">
        <Slide/>
      </div>
      <div className="w-full">
        <Vidtextall/>   
      </div>
      <div className="mb-40">
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
