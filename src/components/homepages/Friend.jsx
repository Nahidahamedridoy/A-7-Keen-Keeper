import React, { useState } from 'react';
import FriendCard from '../ui/FriendCard';
import useApps from '../../hooks/useApps';


const Friend = () => {

    const { friends  } = useApps();
    console.log(friends, "obj")

    return (
        <div className='container mx-auto my-[60px]'>
            {/* section header */}
            <div>
                <h2 className='font-semibold text-2xl'>Your Friends</h2>
            </div>
            total friend : {friends.length}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
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