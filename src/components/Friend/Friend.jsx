import React from 'react';
import "./Friend.css"
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {email, name, id ,  phone}=friend
    return (
       <div className='topast'>
         <div className='friend'>
            <h3>{name}</h3>
            <p>{email}</p>
            <h4>{phone}</h4>
            <p><Link to={`/friend/${id}`}>Show Me Details</Link></p>
        </div>
       </div>
    );
};

export default Friend;