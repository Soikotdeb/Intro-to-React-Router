import React from 'react';
import { Link } from 'react-router-dom';
import './Posts.css'

const Posts = ({Postes}) => {
    const {id, title,body}=Postes
    return (
        <div className='Posts'>
            <h4>Id:{id}</h4>
            <h5>Title:{title}</h5>
            <h6>Body:{body}</h6>
            <Link to={`/post/${id}`}>Show Details</Link>
            <Link to={(`/post/${id}`)}> <button>Show Post Details</button></Link>
        </div>
    );
};

export default Posts;