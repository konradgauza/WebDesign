import React, { useState, useEffect } from 'react';

const Services = () => {
    const services = [
        {
            icon: "fas fa-desktop",
            title: "Website Design",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        },
        {
            icon: "fas fa-paper-plane",
            title: "Email Marketing",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        },
        {
            icon: "fas fa-chart-line",
            title: "Digital Analytics",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        },
        {
            icon: "fas fa-pencil-alt",
            title: "Visual Editor",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        },
        {
            icon: "fas fa-download",
            title: "Backup & Security",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        },
        {
            icon: "fas fa-comments",
            title: "IT Consultancy",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        },
    ]
    const [animation, setAnimation] = useState(false);

    useEffect(()=> {
        setTimeout(()=> setAnimation(true), 100)
    }, [])

    return (
        <>
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
        </>
    )
}

export default Services;