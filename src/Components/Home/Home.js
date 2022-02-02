import React, {useContext} from 'react';
import bgImage from '../../img/bg.png';
import './Home.css'
import bike from '../../img/bike.png'
import car from '../../img/car.png'
import bus from '../../img/bus.png'
import train from '../../img/train.png'
import {UserContext} from '../../App';
import {Link} from 'react-router-dom';
const Home =()=>{
 const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    return(
    
          <div className="header-container" >
            <div className="img-head">
            <img src={bgImage} alt="" />
            </div>
          
          
       <div className="box" >

          <div className="vehicles">
          <div className=" vehicle">
           <img src={bike} alt="" />
            </div>
            <div className=" vehicle">
           <img src={bus} alt="" />
            </div>

            <div className=" vehicle">
           <img src={car} alt="" />
            </div>
            <div className=" vehicle">
           <img src={train} alt="" />
            </div> 
          </div>

            </div>
            </div>
     
          
        
      
        
    )
};
export default Home;