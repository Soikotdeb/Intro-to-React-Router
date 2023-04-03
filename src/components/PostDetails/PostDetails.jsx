import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './PostDetails.css'

const PostDetails = () => {
    const Post = useLoaderData();
    const {id, title,userId,body}=Post;
    
const navigate = useNavigate()

    const navigateFoBack=()=>{
        navigate(-1);

    }

    return (
        <div className='PostDetail'>
            <h4>Details about your post of: {id} </h4>
            <h3>{title}</h3>
            <h4>{userId}</h4>
            <h3>{body}</h3>
            <button onClick={navigateFoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;