import React from "react";
import {NavbarMenu} from "../../mockData/data.js"
import { CiSearch } from "react-icons/ci";

import {MdMenu} from 'react-icons/md'
import {PiShoppingCartThin} from "react-icons/pi";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import kaijuIcon from "../../assets/tabs/img.png"

const Navbar = () =>{
    const [open, setOpen] = React.useState(false);
    return <>
        <nav>
            <div className="container flex justify-between items-center py-8">
                {/*Logo Section*/}
                <div className="text-2xl flex items-center gap-2 font-bold uppercase">

                    <img src={kaijuIcon} alt="icon" className="w-5 h-5" />
                    <p className="text-black">Gym</p>
                </div>
                {/*Menu Section*/}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-6 md:gap-2 text-gray-600">
                        {NavbarMenu.map((item) =>{
                            return <li key={item.id}>
                                <a href={item.link} className="inline-block py-1 px-3 hover:text-primary font-semibold">
                                    {item.title}
                                </a>
                            </li>
                        })}
                    </ul>
                </div>
                {/*Icons Section*/}
                <div className="flex items-center gap-4 text-gray-600">
                    <button className="text-2xl hover:bg=primary hover:text-secondary rounded-full p-2 duration-200">
                        <CiSearch/>
                    </button>
                    <button className="text-2xl hover:bg=primary hover:text-secondary rounded-full p-2 duration-200">
                        <PiShoppingCartThin/>
                    </button>
                    <button className=" hover:px-5 hover:py-1 rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block">
                        <p className="text-primary font-semibold hover:text-white">Login</p>
                    </button>
                </div>
                {/*Mobile hamburger Menu section*/}
                    <div className="cursor-pointer p-5 lg:hidden" onClick={() => setOpen(!open)}>
                        <MdMenu className="text-4xl"/>
                    </div>
            </div>
        </nav>

        {/*Mobile sidebar section*/}
        <ResponsiveMenu open={open}/>
    </>
}

export default Navbar;