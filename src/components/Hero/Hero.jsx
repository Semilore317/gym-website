import React from "react";
import {FaPlay} from "react-icons/fa";
import HeroImg from "../../assets/dumbell.png"
import { motion } from "framer-motion";
import {SlideRight} from "../../utility/animation.js"

const Hero = () => {
    return<>
        <section>
            <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
                {/*Brand Info*/}
                <div className="flex flex-col justify-center py-14 md:py-0 font-outfit">
                    <div className="text-center md:text-left space-y-6">
                        <motion.h1 variants={SlideRight(0.3)}
                                    initial="hidden"
                                   animate="visible"
                                   className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal">
                            Gym Gives You The Perfect {" "}
                            <span className="text-primary">Health</span>
                        </motion.h1>
                        <motion.p variants={SlideRight(0.8)}
                                  initial="hidden"
                                  animate="visible"
                                  className="text-gray-600 xl:max-w-[500px]">
                            Unlock your potential and redefine your limits.
                        </motion.p>
                        {/*Button Section*/}
                        <motion.div variants={SlideRight(1.5)}
                                    initial="hidden"
                                    animate="visible"
                                    className="flex justify-center items-center gap-8 md:justify-start !mt-4">
                            <button className="primary-btn flex items-center gap-2 mt-4">
                                {" "}
                                Order Now
                            </button>
                            <button className="flex justify-center items-center gap-2 h-full">
                                <FaPlay />
                                Watch Now
                            </button>
                        </motion.div>
                    </div>
                </div>
                {/*Hero Image*/}
                <div className="flex justify-center items-center gap-8 md:justify-start md:mt-8">
                    <motion.img initial={{opacity: 0, x: 500, rotate: 90}}
                                animate={{opacity:1, x:0, rotate: 0}}
                                transition={{duration: 0.8}}
                                src={HeroImg} alt="" className="w-[350px] md:w-[550px] xl:w-[700px] drop-shadow"/>
                </div>
            </div>
        </section>
    </>
}

export default Hero;