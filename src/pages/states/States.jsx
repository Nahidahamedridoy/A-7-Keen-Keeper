import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { InstallAppsContext } from '../../context/InstallAppsContext';

const States = () => {


    const { calledFriends } = useContext(InstallAppsContext)
    console.log(calledFriends, "calledFriends")

    
    
    const data = [
        { name: "Audio", value: 300, fill: "#0088FE" },
        { name: "text", value: 300, fill: "#00C49F" },
        { name: "video", value: 300, fill: "#FFBB2B" },

    ]

    return (
        <div className="my-10 shadow p-10 rounded-md border border-slate-100 container mx-auto">
            <h1 className='font-bold text-5xl mb-16 text-center'>Friendship Analytics</h1>
            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', margin: "auto", aspectRatio: 1 }} responsive>
                <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"
                    // Corner radius is the rounded edge of each pie slice
                    cornerRadius="50%"
                    fill="#8884d8"
                    // padding angle is the gap between each pie slice
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                />
                <Legend />
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default States;