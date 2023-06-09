import React from "react"
import logo1 from "../Images/AppleStore.png"
import logo2 from "../Images/fb.png"
import logo3 from "../Images/googlePlay.png"
import logo4 from "../Images/insta.png"
import logo5 from "../Images/twiter.png"
import logo6 from "../Images/youtube.png"
import logo7 from "../Images/original.png"
import logo8 from "../Images/30Days.png"
import { Link } from "react-router-dom"
import "./Footer.css";


export default function Footer(){


    return (

        <footer className="footer">
            <div className="container">
            <div className="row" >
            <div className="footer-col" >
         <h4>
            online Shoping
         </h4>
         <ul>
         <li> <Link to="/product"> Sofa  </Link></li>
         <li> <Link to="/product"> Dining Set </Link></li>
         <li> <Link to="/product"> Bed  </Link></li>
         <li> <Link to="/product"> Chairs  </Link></li>
          <li><Link to="/product"> BedSheet   </Link></li>
        <li> <Link to="/product">  Miscilaneous  </Link></li>
         </ul>
            </div>
            <div className="footer-col">
                <h4>useful links</h4>
                <ul>
                <li> <Link> FAQ</Link></li>
                <li> <Link >  contact us </Link></li>
                <li> <Link>  return </Link></li>
         <li><Link>  track order </Link></li>
         <li><Link>   Careers </Link></li>
         </ul>
            </div>
            <div className="footer-col">
                <h4>experience Furniture Now on Mobile</h4>
                <Link ><img src={logo1} alt="logo"/> </Link>
               <Link ><img src={logo3} alt="logo"/> </Link> 
            <h4>keep in touch</h4>
            <div className="social-links">
               <Link> <img src={logo2} alt="logo"/></Link>
               <Link > <img src={logo4} alt="logo"/></Link>
               <Link > <img src={logo5} alt="logo"/></Link>
               <Link > <img src={logo6} alt="logo"/></Link>
            </div>
            </div>
             <div className="footer-col">
                <div className="footer-promise">
                   <Link> <img src={logo7} alt="logo"/></Link>
                    <div>
                        <strong>100% ORIGINAL</strong>
                        <span>guarantee for all products at furnitureNow.com</span>
                    </div>
                </div>
                <div className="footer-promise" >
                   <Link > <img src= {logo8} alt="logo" /></Link>
                    <div>
                        <strong>Return within 30days</strong>
                        <span>of receiving your order</span>
                    </div>
                </div>
             </div>
            </div>
            </div>

        </footer>
    )
    
}