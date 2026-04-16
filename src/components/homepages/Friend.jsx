import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import FriendCard from '../ui/FriendCard';

const Friend = () => {

    const friends = useLoaderData();
    const data = useLoaderData()

    // console.log(data, "data from homepage");


    console.log(friends, "hello from setFriends")

    return (
        <div className='container mx-auto my-[60px]'>
            {/* section header */}
            <div>
                <h2 className='font-semibold text-2xl'>Your Friends</h2>
            </div>
            total friend : {friends.length}

            <div className="grid grid-cols-4 gap-3">
                {friends.map((friend, ind) => {
                    return (
                        <FriendCard key={ind} friend={friend} />
                    );
                })
                }
            </div>
        </div>
    );
};

export default Friend;