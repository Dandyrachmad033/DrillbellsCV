"use client";
import { useState } from 'react';
import '@/../../public/css/home.css';


function Navbar({ scrollToabout, scrollToframework, scrollToExperience, scrollToPortofolio, scrollToEducation }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="border-b-shadow bg-black" >
            <div className="p-2 lg:flex justify-between md:flex md:justify-between">
                <div className='flex justify-between items-center'>
                    <h1 className="text-white hover:text-blue-600 cursor-pointer text-shadow" onClick={() => window.open(`https://github.com/Dandyrachmad033`, '_blank')} >Dandy Rachmad (DrillBells)</h1>

                    {/* Tombol menu untuk tampilan mobile */}
                    <div className="lg:hidden md:hidden ">
                        <button className="text-white hover:text-blue-600" onClick={toggleMenu}>
                            Menu
                        </button>
                    </div>
                </div>

                {/* Daftar menu */}
                <div className={`md:flex flex-col transition-all duration-1000 ease-in-out ${isMenuOpen ? "block" : "hidden"}`}>
                    <ul className="lg:flex md:flex flex-col sm:flex-row text-white sm:list-none  items-center">
                        <li className="lg:p-3 md:p-3 p-3 cursor-pointer hover:text-blue-600 text-shadow sm:p-3 font-serif" onClick={scrollToabout}>About</li>
                        <li className="lg:p-3 md:p-3 p-3 cursor-pointer hover:text-blue-600 text-shadow sm:p-3 font-serif" onClick={scrollToframework}>Framework Skills</li>
                        <li className="lg:p-3 md:p-3 p-3 cursor-pointer hover:text-blue-600 text-shadow sm:p-3 font-serif" onClick={scrollToExperience}>Experience</li>
                        <li className="lg:p-3 md:p-3 p-3 cursor-pointer hover:text-blue-600 text-shadow sm:p-3 font-serif" onClick={scrollToPortofolio}>Project</li>
                        <li className="lg:p-3 md:p-3 p-3 cursor-pointer hover:text-blue-600 text-shadow sm:p-3 font-serif" onClick={scrollToEducation}>Education</li>
                    </ul>
                </div>

            </div>
        </nav >
    );
}

export default Navbar;

