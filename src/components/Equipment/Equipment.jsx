import React from 'react';
import { GrYoga } from 'react-icons/gr';
import { MdFitnessCenter } from "react-icons/md";
import { FaRunning } from 'react-icons/fa';

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
            <div className="container">
                
            </div>
        </div>
    )
}

export default Equipment;