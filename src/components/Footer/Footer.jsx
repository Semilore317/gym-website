import React from "react";
import { FaDumbbell } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-screen min-h-[400px]  bg-[#050915] rounded-t-3xl flex justify-center items-center">
            <div className="container w-full h-full grid grid-cols-1">
                <div className="flex items-center justify-center flex-col">
                    {/* Logo & Links Section */}
                    <div className="flex flex-col md:flex-row items-center md:justify-around gap-10 text-amber-50 font-bold w-full border-b border-gray-300/10">
                        {/* Logo */}
                        <div className="flex justify-center items-center gap-1 text-3xl">
                            <FaDumbbell className="h-6 w-6" />
                            <p>KAIJU</p>
                            <p className="text-primary">GYM</p>
                        </div>

                        {/* Links Section - Stack vertically on small screens */}
                        <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start gap-5">
                            <ul className="px-4 py-5 sm:py-10 text-center sm:text-left">
                                <h3 className="text-2xl py-3">Important Links</h3>
                                <a href="#">
                                    <li className="py-1">Home</li>
                                </a>
                                <a href="#">
                                    <li className="py-1">About</li>
                                </a>
                                <a href="#">
                                    <li className="py-1">Services</li>
                                </a>
                                <a href="#">
                                    <li className="py-1">Login</li>
                                </a>
                            </ul>
                            <ul className="px-4 py-5 sm:py-10 text-center sm:text-left">
                                <h3 className="text-2xl py-3">Company Links</h3>
                                <a href="#">
                                    <li className="py-1">Our Services</li>
                                </a>
                                <a href="#">
                                    <li className="py-1">Contact</li>
                                </a>
                                <a href="#">
                                    <li className="py-1">Privacy Policy</li>
                                </a>
                            </ul>
                            <ul className="px-4 py-5 sm:py-10 text-center sm:text-left">
                                <h3 className="text-2xl py-3">Resources</h3>
                                <a href="#">
                                    <li className="py-1">Home</li>
                                </a>
                                <a href="#">
                                    <li className="py-1">About</li>
                                </a>
                                <a href="#">
                                    <li className="py-1">Services</li>
                                </a>
                                <a href="#">
                                    <li className="py-1">Login</li>
                                </a>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright */}
                    <p className="text-white text-sm mt-5 text-center">
                        © 2025 Abraham Bankole. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
