import React from "react";
import 'slick-carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Avatar1 from "../assets/avatar1.png";
import Avatar2 from "../assets/avatar2.png";
import Avatar3 from "../assets/avatar3.png";
import Avatar4 from "../assets/avatar4.png";

const OpinionCarousel = () => {

    const comments = [
        {
            name: "Oscar",
            text: " I'm always impressed with the services. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. ",
            avatar: Avatar1
        },
        {
            name: "Alice",
            text: " I'm always impressed with the services. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. ",
            avatar: Avatar2
        },
        {
            name: "Jessie",
            text: " I'm always impressed with the services. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. ",
            avatar: Avatar3
        },
        {
            name: "Mike",
            text: " I'm always impressed with the services. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. ",
            avatar: Avatar4
        }
    ];

    const settings = {
        arrows: false,
        dots: true,
        infinite: false,
        responsive: [{

            breakpoint: 1150,
            settings: {
                slidesToShow: 2,
                dots: true
            }

        }, {

            breakpoint: 770,
            settings: {
                slidesToShow: 1,
                dots: true
            }

        }],
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <>
            <div className="carousel">
                <h2 className="carousel-title"> Testimonials</h2>
                <Slider {...settings}>
                        {comments.map((comment) => {
                            return(
                                    <div className='quote'>
                                        <i className="fas fa-quote-left"></i>
                                        <p className="quote-text">{comment.text}</p>
                                        <img src={comment.avatar} alt="avatar" className="quote-avatar"/>
                                        <h4 className="quote-name">{comment.name}, Customer</h4>
                                    </div>
                            )
                        })}
                </Slider>
            </div>
        </>
    )
}

export default OpinionCarousel;