import React, { useEffect, useState } from 'react';
import Blog1 from '../assets/blog1.png';
import Blog2 from '../assets/blog2.png';
import Blog3 from '../assets/blog3.png';
import Blog4 from '../assets/blog4.png';
import Blog5 from '../assets/blog5.png';
import Blog6 from '../assets/blog6.png';



const Blog = () => {
    const articles = [
        {
            title: "Better User Interface",
            text: "Sint commodo ut excepteur esse in dolor est pariatur minim aliqua esse incididunt minim amet exercitation.",
            day: "20",
            month: "JAN",
            cover: Blog2
        },
        {
            title: "Experts Web Design Tips",
            text: "Exercitation velit dolor consequat enim veniam nulla dolor sunt laborum non magna ad veniam consequat minim.",
            day: "12",
            month: "FEB",
            cover: Blog1
        },
        {
            title: "Importance Of Web Design",
            text: "Excepteur ut commodo incididunt ut in commodo voluptate anim do elit occaecat commodo ut ea sint sunt.",
            day: "4",
            month: "MAR",
            cover: Blog4
        },
        {
            title: "Avoid These Erros In UI Design",
            text: "Occaecat dolor dolore ut ut sint deserunt dolore incididunt mollit anim magna fugiat et ex fugiat anim esse ea.",
            day: "15",
            month: "JUL",
            cover: Blog3
        },
        {
            title: "Make Mobile Website Faster",
            text: "Lorem ipsum eiusmod eiusmod aliquip tempor duis in dolor id labore sed commodo magna qui quis dolor eu.",
            day: "11",
            month: "SEP",
            cover: Blog5
        },
        {
            title: "How Sell Digital Product",
            text: "Veniam ut ex sed dolor eiusmod labore in enim elit fugiat eu proident minim ut cillum aliquip amet eiusmod.",
            day: "18",
            month: "DEC",
            cover: Blog6
        }
    ];
    const [animation, setAnimation] = useState(false);

    useEffect(()=> {
        setTimeout(()=> setAnimation(true), 100)
    }, [])


    return (
        <>
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
        </>
    )
}

export default Blog;