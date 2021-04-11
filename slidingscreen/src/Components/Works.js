import React from 'react';
import Butterfly from '../assets/butterfly.png';
import Clock from '../assets/clock.jpg';
import Indian from '../assets/indian.jpg';
import Headphones from '../assets/headphones.jpg';
import Lineart from '../assets/lineart.jpg';
import Stairs from '../assets/stairs.jpg';

const Works = () => {
    const works = [
        {
            image:  Butterfly
        },
        {
            image:  Clock
        },
        {
            image:  Indian
        },
        {
            image:  Headphones
        },
        {
            image:  Lineart
        },
        {
            image:  Stairs
        },
    ]

    return (
        <>
            <div className="works">
                <h2 className="works-title"><span className='text-colored'>OUR</span> WORKS</h2>
                <div className="works-container">
                    {works.map(work =>  {
                        return (
                            <img src={work.image} alt="work" className="single-work"/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Works;