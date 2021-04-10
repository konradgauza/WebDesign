import React from 'react';
import GroupPhoto from '../assets/group.jpg'
import OscarPhoto from '../assets/portrait2.png';
import IsaacPhoto from '../assets/portrait3.png';
import RosePhoto from '../assets/portrait1.png'

const About = () => {

    const team = [
        {
            name: "Oscar Wilkinson",
            position: "Founder & CEO",
            photo: OscarPhoto
        },
        {
            name: "Isaac Nicholas",
            position: "Lead Developer",
            photo: IsaacPhoto
        },
        {
            name: "Rose Shipp",
            position: "Lead Designer",
            photo: RosePhoto
        }
    ]

    return (
        <>
            <div className="about">
                <div className="about-container">
                    <h2 className="about-title">ABOUT <span className='text-colored'>US</span></h2>
                    <div className="about-quote">
                        Design is not just what it looks like and feels like. Design is how it works.
                        <div className="quote-triangle"> </div>
                    </div>
                    <p className="about-description"> Culpa dolor labore enim est irure officia do dolore sint mollit veniam commodo commodo minim in nulla sit labore et labore adipisicing quis adipisicing eiusmod mollit cupidatat veniam aliquip fugiat dolor quis aliquip pariatur nisi fugiat quis anim labore excepteur incididunt ut ut dolor nostrud dolore laborum velit sunt dolor consequat cillum excepteur.</p>
                    <img src={GroupPhoto} alt="" className="group-photo"/>
                    <div className="about-team">
                        {team.map((member) => {
                            return (
                                <div className="team-member">
                                    <div className="member-photo-frame">
                                        <img src={member.photo} alt="" className="member-photo"/>
                                    </div>
                                    <h3 className="member-name">{member.name}</h3>
                                    <p className="member-position">{member.position}</p>
                                    <div className="member-sm">
                                        <i className="fab fa-facebook-f"></i>
                                        <i className="fab fa-twitter"></i>
                                        <i className="fab fa-linkedin-in"></i>
                                        <i className="fab fa-pinterest"></i>
                                    </div>
                                </div>
                            )})}
                    </div>

                </div>
            </div>
        </>
    )
}

export default About;