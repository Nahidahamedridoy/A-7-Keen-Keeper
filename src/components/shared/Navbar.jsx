import React from 'react';
import { BiHomeAlt2 } from 'react-icons/bi';
import { Link, NavLink } from 'react-router';
import MyNavLink from './MyNavLink';
import { IoTimeOutline } from 'react-icons/io5';
import { GoGraph } from 'react-icons/go';

const Navbar = () => {
    return (
        <nav className='navbar shadow'>
            <div className="flex justify-between gap-4 items-center py-[8px] container mx-auto">
                <h1 className="font-bold text-3xl">Keen<span className='text-[#244D3F]'>Keeper</span></h1>
                <ul className='flex justify-between gap-4 items-center'>
                    <li >
                        <MyNavLink to={"/"}> <BiHomeAlt2 /> Home</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink to={"/timeline"}><IoTimeOutline /> Timeline</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink to={"/states"}><GoGraph /> Stats</MyNavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;