import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import useApps from "../../hooks/useApps";

import AudioImg from '../../assets/call.png';
import TextImg from '../../assets/text.png';
import videoImg from '../../assets/video.png';
import { InstallAppsContext } from '../../context/InstallAppsContext';


const FriendsDetails = () => {
    const { id } = useParams();
    console.log(id, "id");
    // const { friends } = useApps();
    // console.log(friends)
    const friends = useLoaderData();
    // console.log(friends)

    const {calledFriends , setCalledFriends} = useContext(InstallAppsContext)

    // console.log(friends, "friends")
    const expectedApp = friends.find((friend) => String(friend.id) === id);
    // console.log(id, "id");

    const handleCalledFriend = () =>{
        setCalledFriends([...calledFriends , expectedApp]);
    }

    console.log(calledFriends)

    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Profile Card */}
                <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center">
                    <img
                        src={expectedApp.picture}
                        alt="profile"
                        className="w-24 h-24 rounded-full mb-4"
                    />
                    <h2 className="text-xl font-semibold">{expectedApp.name}</h2>

                    <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full mt-2">
                        {expectedApp.status}
                    </span>

                    <span className="justify-between">
                        {expectedApp.tags.map((t, ind) => <span key={ind} className="px-3 py-1 text-xs rounded-full bg-green-200 text-green-800">
                            {t}
                        </span>)}
                    </span>

                    <p className="text-gray-500 italic mt-4">
                        {expectedApp.bio}
                    </p>
                    <p className="text-sm text-gray-400 mt-2">Preferred: {expectedApp.email}</p>

                    {/* Actions */}
                    <div className="w-full mt-6 space-y-3">
                        <button className="w-full border rounded-lg py-2 hover:bg-gray-50">
                            Snooze 2 Weeks
                        </button>
                        <button className="w-full border rounded-lg py-2 hover:bg-gray-50">
                            Archive
                        </button>
                        <button className="w-full border border-red-300 text-red-500 rounded-lg py-2 hover:bg-red-50">
                            Delete
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-white rounded-xl shadow p-6 text-center">
                            <h3 className="text-2xl font-bold">{expectedApp.days_since_contact}</h3>
                            <p className="text-gray-500 text-sm">Days Since Contact</p>
                        </div>

                        <div className="bg-white rounded-xl shadow p-6 text-center">
                            <h3 className="text-2xl font-bold">{expectedApp.goal}</h3>
                            <p className="text-gray-500 text-sm">Goal (Days)</p>
                        </div>

                        <div className="bg-white rounded-xl shadow p-6 text-center">
                            <h3 className="text-lg font-semibold">{expectedApp.next_due_date}</h3>
                            <p className="text-gray-500 text-sm">Next Due</p>
                        </div>
                    </div>

                    {/* Goal */}
                    <div className="bg-white rounded-xl shadow p-6 flex justify-between items-center flex-wrap gap-3">
                        <div>
                            <h3 className="font-semibold text-lg">Relationship Goal</h3>
                            <p className="text-gray-500">
                                Connect every <span className="font-bold">{expectedApp.goal}</span>
                            </p>
                        </div>
                        <button className="border px-4 py-2 rounded-lg hover:bg-gray-50">
                            Edit
                        </button>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white rounded-xl shadow p-6">
                        <h3 className="font-semibold text-lg mb-4">Quick Check-In</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                             {/* audio button */}

                            <button onClick={handleCalledFriend } className="border rounded-xl py-6 flex flex-col items-center gap-2 hover:bg-gray-50">
                                <img src={AudioImg} alt="" />
                                <span>Call</span>
                            </button>

                            {/* text button */}
                            <button onClick={handleCalledFriend} className="border rounded-xl py-6 flex flex-col items-center gap-2 hover:bg-gray-50">
                                <img src={TextImg} alt="" />
                                <span>Text</span>
                            </button>
                            {/* video button */}
                            <button onClick={handleCalledFriend} className="border rounded-xl py-6 flex flex-col items-center gap-2 hover:bg-gray-200">
                                <img src={videoImg} alt="" />
                                <span>Video</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendsDetails;