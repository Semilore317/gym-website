import React from "react"

const Banner = ({image, title, subtitle, link}) => {
    return <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 bg-[#f9f9f9]">
            {/*Banner Image Section*/}
            <div>
                <img src={image} alt="" className="w-[300px] md:max-w-[400px] xl:min-w-[600px] h-full object-cover" />
            </div>
            {/*Banner Text Section*/}
            <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
                <p className="text-2xl lg:text-4xl font-bold capitalize font-outfit">{title}</p>
                <p>{subtitle}</p>
                <div className="flex justify-center md:justify-start">
                    <button className="primary-btn flex items-center gap-2 mt-4">
                        Explore More
                    </button>
                </div>
            </div>
        </div>
    </div>
}

export default Banner