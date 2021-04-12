import React, { useState, useEffect } from 'react';
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
    const [animation, setAnimation] = useState(false);

    useEffect(()=> {
        setTimeout(()=> setAnimation(true), 100)
    }, [])

    return (
        <>
            <div className="works">
                <h2 className={animation? "works-title" : "works-title default"}><span className='text-colored'>OUR</span> WORKS</h2>
                <div className={animation? "works-container" : "works-container default"}>
                    {works.map(work =>  {
                        return (
                            <div className="single-work-container">
                                <img src={work.image} alt="work" className="single-work"/>
                                <span className="yellow-overlay">Open project</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Works;