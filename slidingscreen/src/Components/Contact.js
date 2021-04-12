import React, { useState, useEffect } from 'react';

const Contact = () => {
    const [animation, setAnimation] = useState(false);

    useEffect(()=> {
        setTimeout(()=> setAnimation(true), 100)
    }, [])

    return (
        <>
            <div className="contact">
                <h2 className={animation? "contact-title": "contact-title default"}>CONTACT <span className='text-colored'>US</span></h2>
                <form className={animation? "contact-form" : "contact-form default"}>
                    <div className="form-inputs">
                        <input type="text" placeholder="Your Name"/>
                        <input type="email" placeholder="Your Email"/>
                        <input type="text" placeholder="Your Phone"/>
                    </div>
                    <textarea name="" id="" cols="30" rows="10" className="textarea" placeholder="Your Message"></textarea>
                    <a href="#">SUBMIT FORM</a>
                </form>
            </div>
        </>
    )
}

export default Contact;