import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Posts from '../Posts/Posts';

const Post = () => {
    const Post = useLoaderData();
    console.log(Post);
    return (
        <div>
            <h2>All Post Are Here {Post.length}</h2>
            <div>
                {
                    Post.map(Postes=><Posts
                    key={Postes.id}
                    Postes={Postes}
                    ></Posts>)
                }
            </div>
        </div>
    );
};

export default Post;