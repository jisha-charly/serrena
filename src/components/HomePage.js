import React from 'react'
import './Homepage.css'
import TopBanner from './TopBanner'
import NavBar from './NavBar'
import img1 from '../components/images/56.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  return (
    <div className="homepage">

   <NavBar/>
   
    
    <div className="banner-content">
      <h1>Wear Cloths <br></br>That Matter</h1>
      <button className="shop-btn">Shop Now</button>
    </div>
   <div><img src={img1} alt="Fashion Banner" className="banner-image" />
   
   </div> 
   
  </div>
 
  )
}

export default HomePage