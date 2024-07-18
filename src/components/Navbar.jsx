import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
const Navbar = () => {
        const [active, setActive] = useState('');
        const [toggle, setToggle] = useState(false);
        const [scrolled, setScrolled] = useState(false);

        useEffect(() => {
                const handleScroll = () => {
                        const scrollTop = window.scrollY;
                        if (scrollTop > 50) {
                                setScrolled(true);
                        } else {
                                setScrolled(false);
                        }
                };

                window.addEventListener('scroll', handleScroll);

                return () => window.removeEventListener('scroll', handleScroll);
        }, []);
        return (
                <nav
                        className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
                                scrolled ? 'bg-primary' : 'bg-transparent'
                        }`}
                >
                        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                                <Link
                                        to="/"
                                        className="flex items-center gap-1 "
                                        onClick={() => {
                                                setActive('');
                                                window.scrollTo(0, 0);
                                        }}
                                >
                                        <img
                                                src={logo}
                                                alt="logo"
                                                className="w-16 h-12 object-contain xs:w-24 xs:h-16"
                                        />
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
                                                } p-4 bg-slate-800 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
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
