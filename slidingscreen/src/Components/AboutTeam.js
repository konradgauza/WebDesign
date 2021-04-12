import React from 'react';
import { team } from '../Store/arrayStore'

const AboutTeam = () => {
    return (
        <div className="about-team">
            {team.map((member, index) => {
                return (
                    <div className="team-member" key={index + 1}>
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
    )
}

export default AboutTeam;