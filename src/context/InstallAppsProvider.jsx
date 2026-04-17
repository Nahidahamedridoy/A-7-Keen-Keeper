

import React, { useState } from 'react';
import { InstallAppsContext } from './InstallAppsContext';

const InstallAppsProvider = ({children}) => {

     const [calledFriends , setCalledFriends] = useState([]);


    const data = {
       calledFriends,
       setCalledFriends,

    }
        //  const [timeline , setTimeline] =useState([]);

    
    

    return  <InstallAppsContext.Provider value={data}>
        {children}
    </InstallAppsContext.Provider>
};

export default InstallAppsProvider;