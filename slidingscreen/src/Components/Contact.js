import React from 'react';

const Contact = () => {

    return (
        <>
            <div className="contact">
                <h2 className="contact-title">CONTACT <span className='text-colored'>US</span></h2>
                <form>
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Your Email"/>
                    <input type="text" placeholder="Your Phone"/>
                    <textarea name="" id="" cols="30" rows="10" className="textarea" placeholder="Your Message"></textarea>
                    <a href="#">SUBMIT FORM</a>
                </form>

            </div>
        </>
    )
}

export default Contact;