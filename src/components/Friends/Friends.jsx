import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const Friends = useLoaderData();
    console.log(Friends);
    return (
        <div>
            <h3>this are my friends {Friends.length}</h3>
            <div>
                {
                    Friends.map(friend=><Friend
                    key={friend.id}
                        friend={friend}
                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;