import React, { useContext } from 'react';
import { InstallAppsContext } from '../../context/InstallAppsContext';
import { IoCall } from 'react-icons/io5';
import { FiFileText } from 'react-icons/fi';
import { FaVideo } from 'react-icons/fa';


const TimeLine = () => {

    const { calledFriends } = useContext(InstallAppsContext);

    return (
        <div className='container mx-auto my-10'>
            {
                calledFriends.length === 0 
                ? <h2 className='font-bold text-4xl text-center my-5'>No Data History found!</h2> 
                : calledFriends.map((call, ind) => {
                    return (
                        <div key={ind} className='flex gap-4 items-center shadow p-4 mb-4 rounded-md bg-slate-50'>
                            
                            {
                                call.type === "call" ? <IoCall /> 
                                : call.type === "text" ? <FiFileText /> 
                                : call.type === "video" ? <FaVideo /> 
                                : null
                            }

                            <h2 className='font-semibold text-2xl'>{call.type}</h2>
                            <p className='text-gray-400 text-xl '>with {call.name}</p>

                            <p className="text-sm text-gray-500 mt-1">
                                {call.next_due_date}
                            </p>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default TimeLine;