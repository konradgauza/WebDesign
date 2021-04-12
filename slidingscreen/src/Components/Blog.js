import React, { useEffect, useState } from 'react';
import { articles } from '../Store/arrayStore';

const Blog = () => {
    const [animation, setAnimation] = useState(false);

    useEffect(()=> {
        setTimeout(()=> setAnimation(true), 100)
    }, [])

    return (

        <div className="blog">
            <h2 className={animation? "blog-title" : "blog-title default"}><span className='text-colored'>OUR</span> BLOG</h2>
            <div className={animation? "blog-container" : "blog-container default"}>
                {articles.map(article => {
                    return (
                        <div className="single-article">
                            <img src={article.cover} alt="cover" className="article-image"/>
                            <div className="article-content">
                                <div className="article-date">
                                    <p className="day">{article.day}</p>
                                    <p className="month">{article.month}</p>
                                </div>
                                <div className="article-text">
                                    <p className="title">{article.title}</p>
                                    <p className="text">{article.text}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Blog;