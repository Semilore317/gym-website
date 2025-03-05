import React from "react";
import {TestimonialsData} from "../../mockData/data.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ],
    };
    return <React.Fragment>
        <div className="py-14 mb=10">
            <div className="container">
                {/*Header Section*/}
                <div className="text-left mb-1 max-w-[500px] space-y-2 mr-auto">
                    <h1 className="text-4xl font-bold">What Members Think Of Us</h1>
                </div>

                {/*Testimonials Cards*/}
                <div>
                    <Slider {...settings} >
                        {
                            TestimonialsData.map((data) =>(
                                <div key={data.id} className="my-6">
                                    <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-primary/10 relative">
                                        {/*upper section*/}
                                        <div className="flex justify-start items-center gap-5">
                                            <img src={data.img} alt="" className="rounded-full w-16 h-16"/>
                                            <div>
                                                <p className="text-xl font-bold text-black-80">
                                                    {data.name}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*bottom section*/}
                                    <div className="py-6 space-y-4">
                                        <p className="text-sm text-gray-500">{data.text}</p>
                                        <p>⭐⭐⭐⭐⭐</p>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    </React.Fragment>
}
export default Testimonial