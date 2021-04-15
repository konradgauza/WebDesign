import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Home = (props) => {
    const [animation, setAnimation] = useState(false);
    const {visible, setVisible } = props;
    let history = useHistory();

    useEffect(()=> {
        setTimeout(() => setAnimation(true), 200)
    }, [])

    const changeTab = (tab) => {
        setVisible(!visible);
        setTimeout(() => {
            history.push(tab)
        }, 600)
    }

    return (

        <div className={animation? "home" : "home default"}>
            <div className="home-content">
                <h1 className={animation? "home-title" : "home-title default"}>
                    Website <span className='text-colored'>designer</span> and <span className='text-colored'>developer</span> based on Warsaw
                </h1>
                <p className="home-description"> Unconventional solutions and ideas that suit you. Do not rely on stereotypes. Stand out from the crowd and be remembered. Find yourself in the world of digital imagination.</p>
                <div className="home-buttons">
                    <a href="/#"
                       className={animation? "home-btn primary" : "home-btn primary default"}
                       onClick={() => changeTab("/about")}>
                        WHO WE ARE
                    </a>
                    <a href="/#"
                       className={animation? "home-btn" : "home-btn default"}
                       onClick={() => changeTab("/works")}>
                        WHAT WE DO
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home;
