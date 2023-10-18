import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='bg-slate-900 py-10 text-white'>
            <div className="container mx-auto flex justify-between">
                <div>
                    <p> Copy Right &copy; 2023 Luxary. All right reserved. Barishal Bangladesh </p>
                    <div className='flex gap-6'>
                        <NavLink>Privacy Policy</NavLink>
                        <NavLink>Site map</NavLink>
                    </div>
                </div>
                <div className='flex gap-4 text-3xl'>
                    <BsFacebook></BsFacebook>
                    <AiFillTwitterCircle></AiFillTwitterCircle>
                    <AiFillInstagram></AiFillInstagram>
                </div>
            </div>
        </div>
    );
};

export default Footer;