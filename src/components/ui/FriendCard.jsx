import React from 'react';

const statusObj = { "on track" : "bg-green-700" , "active" : "bg-yellow-500" , "overdue" : "bg-red-500"}
console.log(statusObj)

const FriendCard = ({friend}) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img className='rounded-full m-4'
                                src={friend.picture}
                                alt="Shoes" />
                        </figure>
                        <h2 className='font-semibold text-center text-xl'>{friend.name}</h2>
                        <p className='text-gray-400 text-center m-4'>{friend.days_since_contact}d ago</p>
                        <div className="flex justify-center mt-3">
                            <h2 className='justify-between '>
                                {friend.tags.map((t , ind) => <span key={ind} className="px-3 py-1 text-xs rounded-full bg-green-200 text-green-800">
                                    {t}
                                </span>)}
                            </h2>
                        </div>
                        <div className="mt-4 flex justify-center">
                            <span className={`px-4 font-semibold py-1 text-xs  text-white rounded-full mb-4 ${statusObj[friend.status]}`}>
                                {friend.status}
                            </span>
                        </div>
                    </div>
    );
};

export default FriendCard;