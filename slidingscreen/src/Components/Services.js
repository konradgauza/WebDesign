import React, { useState, useEffect } from 'react';
import { services } from '../Store/arrayStore'

const Services = () => {
    const [animation, setAnimation] = useState(false);

    useEffect(()=> {
        setTimeout(()=> setAnimation(true), 100)
    }, [])

    return (

        <div className="services">
            <h2 className={animation? "services-title" : "services-title default"}><span className='text-colored'>OUR</span> SERVICES</h2>
            <div className={animation? "services-container" : "services-container default"}>
                {services.map(service => {
                    return(
                        <div className="single-service">
                            <i className={service.icon}></i>
                            <div className="service-content">
                                <h3 className="content-title">{service.title}</h3>
                                <p className="content-text">{service.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Services;