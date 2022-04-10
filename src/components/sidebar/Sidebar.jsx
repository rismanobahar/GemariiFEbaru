
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <Link >   
           <img 
           className="facebook" 
           src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-White-Dark-Background-Logo.wine.svg" alt=""/>
           </Link>
    
        <Link>  
          <img 
          className="instagram"
          src="https://cdn.pixabay.com/photo/2018/11/13/22/01/instagram-3814080__340.png" alt=""/>
          </Link>
    
        <Link>    
          <img 
          className="twitter"
           src="https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg" alt=""/>
           </Link>
      </div>
    </div>
  );
}
