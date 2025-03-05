import React from "react";
import { motion } from "framer-motion";
import {FaDumbbell} from 'react-icons/fa';

const Banner2 = () =>{
    return <div className="container bg-[#f9f9f9] max-w-[1200px] h-[500px] flex items-center justify-center">
        <div className="flex justify-center items-center flex-col gap-2">
            <motion.h1  initial={{opacity: 0, x: 100}}
                        animate={{opacity:1, x:0}}
                        transition={{duration:0.3}}
                        className="uppercase font-bold leading-tight text-center text-6xl">
                Get 20% off on your first premium
            </motion.h1>
            <motion.p   initial={{opacity: 0, x: 100}}
                        animate={{opacity:1, x:0}}
                        transition={{duration:0.5}}
                        className="text-lg ">
                We will make sure you get the right and the best quality products for your workout
            </motion.p>
            <motion.div initial={{opacity: 0, x: 100}}
                        animate={{opacity:1, x:0}}
                        transition={{duration:0.8}}
                        className="flex justify-center items-center gap-5 mt-4">
                <button className="primary-btn">
                    <p>Learn More</p>
                </button>
                <button
                    className=" hover:px-5 hover:py-1 rounded-md border-2 border-primary px-6 py-2 duration-200">
                    <p className="text-primary font-semibold hover:text-white">
                        Keep In Touch
                    </p>
                </button>
            </motion.div>
        </div>
    </div>
}

export default Banner2;