import React from 'react';
import './Home.css';
import data from '../../data/data.json';
import Vehicles from '../Vehicles/Vehicles'
 const Home =()=>{

  return (
    <div className='home-img d-flex flex-column align-items-center justify-content-around'>
            <div className="wrapper d-flex flex-wrap align-items-center justify-content-around">
                {
                    data.map(vehicle => <Vehicles key={vehicle.id} vehicle={vehicle} > </Vehicles>)
                }
            </div>
        </div>
  )
}
export default  Home