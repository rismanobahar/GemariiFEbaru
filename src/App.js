// import TopBar from "./components/topbar/TopBar"
import Homepage from "./pages/homepage/Homepage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Blogpage from "./pages/blogpage/Blogpage";
// import Allblog from "./components/allblog/Allblog";
import Singleblog from "./pages/singleblog/Singleblog";
import Settings from "./pages/settings/Settings.jsx";
import Navbar from "./components/navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import DesignerP from "./pages/designerp/Designerp";
import Explore from "./pages/explore/Explore";
import LoginUser from "./pages/loginuser/LoginUser";
import Logindesigner from "./pages/logindesigner/Logindesigner";
import Registeruser from "./pages/registeruser/Registeruser";
import Registerdesigner from "./pages/registerdesigner/Registerdesigner";
import Userprofile from "./pages/userprofile/Userprofile";
import Designerup from "./pages/designerup/Designerup";
import Aboutus from "./components/aboutus/aboutUs";
import Slider from "./components/header/Slide";
import Bloghome from "./components/bloghome/Bloghome";
// import ExploreDetail from "./components/exploredetail/ExploreDetail";
// import { useEffect, useState } from "react";
// import WebAPI from "./config/WebAPI";
function App() {
  const currentUser = true;

//   const [blogs, setblogs] = useState([]);

//   useEffect(()=>{
//   WebAPI.find().then((res) => {
//     console.log(res);
//     setblogs(res);
//   });
// }, []);

//asdasdasdhaisfhgaisdncvisauyhdtnisouadhnfsioa

  return (
    
    
       <>
          <Explore/>
      
          <Homepage/>
       
          <Slider/>
      
          <Homepage/>
       
        <DesignerP/>
      
        <Singleblog/>
    
          <Blogpage/>
      
          <Bloghome/>
      
          <Registeruser />
       
          <Registerdesigner />
     
          <LoginUser/>
     
         <Logindesigner />
       
         <Userprofile/>
      
          <Designerup/>
    </>

  );
}

export default App;
