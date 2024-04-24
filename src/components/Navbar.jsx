import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../contants';
import { logo, menu, close } from '../assets';
const Navbar = () => {
        const [active, setActive] = useState('');
        const [toggle, setToggle] = useState(false);
        return (
                <nav
                        className={`${styles.paddingX} w-full flex items-center fixed top-0 z-20 bg-primary shadow-lg`}
                        style={{ boxShadow: '0px 4px 8px rgba(145, 94, 255, 0.2)' }}
                >
                        <div className="w-full flex justify-between mx-24 items-center">
                                <Link
                                        to="/"
                                        className="flex items-center gap-1 "
                                        onClick={() => {
                                                setActive('');
                                                window.scrollTo(0, 0);
                                        }}
                                >
                                        <img src={logo} alt="logo" className="w-24 h-24 object-contain" />
                                </Link>
                                <ul className="list-none hidden sm:flex flex-row gap-16">
                                        {navLinks.map((link) => (
                                                <li
                                                        key={link.id}
                                                        className={`${
                                                                active === link.title ? 'text-blaugrana' : 'text-white'
                                                        } hover:text-blaugrana text-2xl font-medium cursor-pointer`}
                                                        onClick={() => {
                                                                setActive(link.title);
                                                        }}
                                                >
                                                        <Link to={link.id}>{link.title}</Link>
                                                </li>
                                        ))}
                                </ul>

                                <div className="sm:hidden flex flex-1 justify-end item-center">
                                        <img
                                                src={toggle ? close : menu}
                                                alt="menu"
                                                className="w-6 h-6 object-contain cursor-pointer"
                                                onClick={() => setToggle(!toggle)}
                                        />
                                        <div
                                                className={`${
                                                        !toggle ? 'hidden' : 'flex'
                                                } p-4 bg-slate-900 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
                                        >
                                                <ul className="list-none flex flex-col justify-end items-start gap-4 text-white">
                                                        {navLinks.map((link) => (
                                                                <li
                                                                        key={link.id}
                                                                        className={`${
                                                                                active === link.title
                                                                                        ? 'text-blaugrana'
                                                                                        : 'text-white'
                                                                        } font-medium text-xl cursor-pointer`}
                                                                        onClick={() => {
                                                                                setToggle(!toggle);
                                                                                setActive(link.title);
                                                                        }}
                                                                >
                                                                        <Link to={link.id}>{link.title}</Link>
                                                                </li>
                                                        ))}
                                                </ul>
                                        </div>
                                </div>
                        </div>
                </nav>
        );
};

export default Navbar;
