import React, { useEffect, useState } from 'react';

const useApps = () => {


    const [friends, setFriends] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch("/data.json");
            const data = await res.json();
            console.log(data);
            setFriends(data);
        };
        fetchData();
    }, []);

    return { friends };
};

export default useApps;