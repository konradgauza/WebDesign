import React, { useState, useEffect } from 'react';
import GroupPhoto from '../assets/group.jpg'
import OpinionCarousel from "./OpinionCarousel";
import AboutTeam from './AboutTeam';

const About = () => {
    const [animation, setAnimation] = useState(false);

    useEffect(()=> {
        setAnimation(true)
    }, [])

    return (
        <>
            <div className="about">
                <div className="container">
                    <h2 className={animation? "about-title" : "about-title default"}>ABOUT <span className='text-colored'>US</span></h2>
                    <div className="about-top-section">
                        <div className={animation? "about-quote" : "about-quote default"}>
                            Design is not just what it looks like and feels like. Design is how it works.
                            <div className="quote-triangle"> </div>
                        </div>
                        <p className={animation? "about-description" : "about-description default"}> Culpa dolor labore enim est irure officia do dolore sint mollit veniam commodo commodo minim in nulla sit labore et labore adipisicing quis adipisicing eiusmod mollit cupidatat veniam aliquip fugiat dolor quis aliquip pariatur nisi fugiat quis anim labore excepteur incididunt ut ut dolor nostrud dolore laborum velit sunt dolor consequat cillum excepteur.</p>
                    </div>
                    <img src={GroupPhoto} alt="" className={animation? "group-photo" :  "group-photo default"}/>
                    <AboutTeam/>
                    <OpinionCarousel/>
                </div>
            </div>
        </>
    )
}

export default About;