import React, { useEffect, useState } from 'react';

const UseApps = () => {


    const [friends, setApps] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch("/public/data.json");
            const data = await res.json();
            console.log(data);
            setApps(data);
        };
        fetchData();
    }, []);

    return { friends };
};

export default UseApps;