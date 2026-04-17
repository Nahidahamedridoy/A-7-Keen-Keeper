import React from 'react';
import { BiHomeAlt2 } from 'react-icons/bi';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <nav className='navbar shadow'>
            <div className="flex justify-between gap-4 items-center py-[8px] container mx-auto">
                <h1 className="font-bold text-3xl">Keen<span className='text-[#244D3F]'>Keeper</span></h1>
                <ul className='flex justify-between gap-4 items-center'>
                    <li>
                        <button className='btn bg-green-800 text-white'><NavLink to={"/"}><BiHomeAlt2 />Home</NavLink></button>
                    </li>
                    <li>
                        <NavLink to={"/timeline"}>Timeline</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/states"}>Stats</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;