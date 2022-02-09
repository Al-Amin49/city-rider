import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import {UserContext} from '../../App';
import './Vehicles.css'

const Vehicles = ({vehicle}) => {
    const { id, vehicleImg, vehicleName } = vehicle;
    const [loggedInUser, setLoggedInUser, vehicleType, setVehicleType]= useContext(UserContext)
    return (
    <Link to="/destination">
        <div onClick={() => setVehicleType(id)} className="bg-success text-white p-4 box m-3 rounded">
        <div className="d-flex flex-column text-center">
            <img src={vehicleImg} alt="" className="icon-image d-block  mx-auto py-3" />
            <h3>{vehicleName}</h3>
        </div>
    </div>
    </Link>
    );
};

export default Vehicles;