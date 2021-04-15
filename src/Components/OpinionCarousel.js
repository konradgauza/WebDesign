import React from "react";
import 'slick-carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { comments } from '../Store/arrayStore'

const OpinionCarousel = () => {

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

        <div className="carousel">
            <h2 className="carousel-title"> Testimonials</h2>
            <Slider {...settings}>
                {comments.map((comment, index) => {
                    return(
                        <div className='quote' key={index + 1}>
                            <i className="fas fa-quote-left"></i>
                            <p className="quote-text">{comment.text}</p>
                            <img src={comment.avatar} alt="avatar" className="quote-avatar"/>
                            <h4 className="quote-name" >{comment.name}, Customer</h4>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default OpinionCarousel;