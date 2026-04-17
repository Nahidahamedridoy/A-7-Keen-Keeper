import React, { useContext } from 'react';
import { InstallAppsContext } from '../../context/InstallAppsContext';

const TimeLine = () => {

    const { calledFriends, setCalledFriends } = useContext(InstallAppsContext)
    console.log(calledFriends, "contextData");

    return (
        <div className='container mx-auto my-10'>
            {
                calledFriends.map((call, ind) => {
                    return <div key={ind} className='flex gap-4 items-center shadow p-4 mb-4 rounded-md bg-slate-200'>
                        <img src={call.picture} alt="" className='h-[120px] w-auto' />
                        <h2 className='font-semibold text-2xl'>{call.email}</h2>
                        <h2 className='font-semibold text-2xl'>{call.bio}</h2>
                    </div>
                })
            }
        </div>
    );
};

export default TimeLine;