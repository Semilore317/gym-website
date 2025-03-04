import React from 'react';
import { GrYoga } from 'react-icons/gr';
import { MdFitnessCenter } from "react-icons/md";
import { FaRunning } from 'react-icons/fa';
//import motion from 'framer-motion';

const EquipmentData = [
    {
        id: 1,
        title : "Yoga Equipments",
        desc: "Experience the perfect balance of strength, flexibility, and mindfulness with our exclusive Yoga. Enjoy unlimited access to expert-led yoga sessions designed to enhance your well-being, reduce stress, and improve overall fitness. Whether you're a beginner or an advanced yogi, our serene environment and guided practices will help you achieve your goals. Join today and embrace a healthier, more centered lifestyle!",
        icon: <GrYoga />,
        delay: 0.3,
    },
    {
        id: 2,
        title: "Strength Training",
        desc: "Build muscle, increase endurance, and boost overall strength with our state-of-the-art strength training equipment. From free weights to resistance machines, we provide everything you need to power through your fitness journey. Whether you're a beginner or a seasoned lifter, our expert trainers and top-tier facilities will help you reach your goals.",
        icon: <MdFitnessCenter />,
        delay: 0.5,
    },
    {
        id: 3,
        title: "Cardio Workouts",
        desc: "Elevate your heart rate and burn calories with our high-performance cardio equipment. From treadmills to cycling and HIIT sessions, our facility offers a variety of options to keep your workouts dynamic and effective. Whether you aim for weight loss, endurance, or heart health, our cardio zone is designed to keep you moving and motivated.",
        icon: <FaRunning />,
        delay: 0.7,
    }
    
]

const Equipment = () => {
    return(
        <div>
            <div className="container py-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-outfit">
                    <div className="space-y-4 p-6">
                        <h1 className="text-3xl md:text-4xl font-bold">What We Offer</h1>
                        <p className="text-gray-500">
                            We provide top-tier fitness facilities, expert-led classes, and personalized training to help you achieve your goals. Whether it’s strength training, cardio, or yoga, our supportive environment ensures a rewarding fitness journey.
                        </p>
                    </div>
                    {/*map data to the cards*/}
                    {
                        EquipmentData.map((item) =>{
                            return (
                                <div className="space-y-4 p-6 bg-[#fbfbfb] hover:bg-white rounded-xl hover:shadow">
                                    <div className="text-4xl text-secondary">{item.icon}</div>
                                    <p className="text-2xl font-semibold">{item.title}</p>
                                    <p className="text-gray-500">{item.desc}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Equipment;