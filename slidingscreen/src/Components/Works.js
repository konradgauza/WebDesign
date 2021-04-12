import React, { useState, useEffect } from 'react';
import { works } from '../Store/arrayStore'

const Works = () => {
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