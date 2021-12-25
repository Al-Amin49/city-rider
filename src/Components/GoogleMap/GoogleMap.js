import React,{useContext} from 'react';
import {UserContext} from '../../App' 

const GoogleMap = () => {
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    return (
        <div>
            <h3>This is google Map.</h3>
            <p>Name: {loggedInUser.name}</p>
            <p>Email: {loggedInUser.email}</p>
        </div>
    );
};

export default GoogleMap;