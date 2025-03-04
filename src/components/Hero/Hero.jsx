import React from "react";
import {FaPlay} from "react-icons/fa";
import HeroImg from "../../assets/dumbell.png"

const Hero = () => {
    return<>
        <section>
            <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
                {/*Brand Info*/}
                <div className="flex flex-col justify-center py-14 md:py-0 font-outfit">
                    <div className="text-center md:text-left space-y-6">
                        <h1 className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal">
                            Gym Gives You The Perfect {" "}
                            <span className="text-primary">Health</span>
                        </h1>
                        <p className="text-gray-600 xl:max-w-[500px]">
                            It's been established that a reader will be by readable content of a page when are the best
                            product
                        </p>
                        {/*Button Section*/}
                        <div className="flex justify-center items-center gap-8 md:justify-start !mt-4">
                            <button className="primary-btn flex items-center gap-2 mt-4">
                                {" "}
                                Order Now
                            </button>
                            <button className="flex justify-center items-center gap-2 h-full">
                                <FaPlay />
                                Watch Now
                            </button>
                        </div>
                    </div>
                </div>
                {/*Hero Image*/}
                <div>
                    <img src={HeroImg} alt="" className="w-[350px] md:w-[550px] xl:w-[700px] drop-shadow"/>
                </div>
            </div>
        </section>
    </>
}

export default Hero;