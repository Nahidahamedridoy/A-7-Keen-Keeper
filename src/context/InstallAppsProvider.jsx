

import React, { useState } from 'react';
import { InstallAppsContext } from './InstallAppsContext';

const InstallAppsProvider = ({children}) => {

     const [calledFriends , setCalledFriends] = useState([]);

    const data = {
       calledFriends,
       setCalledFriends,
    }

    return  <InstallAppsContext.Provider value={data}>
        {children}
    </InstallAppsContext.Provider>
};

export default InstallAppsProvider;