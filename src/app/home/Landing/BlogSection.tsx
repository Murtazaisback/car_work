import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/LandingPageComponent.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faCalendar,faMessage } from '@fortawesome/free-regular-svg-icons';
import { Gift } from '../../imgs'

const BlogSection = () => {

    const maxCharacters = 100; // Maximum characters to display before truncating
    const [showFullContent, setShowFullContent] = useState(false);

    const blogText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, molestias facere obcaecati eum earum inventore dolores vitae voluptates ea, impedit, libero iusto nisi similique iure ipsam? Repellendus nulla odit neque?";

    const truncatedContent = showFullContent ? blogText : blogText.slice(0, maxCharacters);

    const handleClick = () => {
        setShowFullContent(!showFullContent);
    };

    return (
        <div className='Landing_section'>
            <div className="header_blog">
                <div className="bar_blogs"></div>
                <h2 className='Blog_section_h'>More About Our Services</h2>
                <FontAwesomeIcon icon={faChevronRight} size="lg" />
            </div>
            <div className="section_blogs_box">
                <div className="section_blog">
                    <img src={Gift} alt="fwe" />
                    <h3 className='blog_title'>This is how our shipping with purchase protection works</h3>
                    <p className='blog_info'>
                        {truncatedContent}
                        {!showFullContent && (
                            <>
                                <span style={{ margin: '0 5px' }}>...</span>
                                <Link to="/blog" style={{ color: 'blue', cursor: 'pointer', textDecoration: 'none' }}>
                                    Read more
                                </Link>
                            </>
                        )}
                    </p>
                    <div className='blog_section_seperator'></div>
                    <div className="bottom_blog_sec">
                        <FontAwesomeIcon icon={faCalendar} style={{color: "#979698"}} />
                        <div className="blog_date">14-7-2022</div>
                        <span className='date_seperator'></span>
                        
                        <FontAwesomeIcon icon={faMessage} style={{color: "#979698"}} />
                        <p>comments</p><span>(4)</span>
                    </div>
                </div>
                <div className="section_blog">
                    <img src={Gift} alt="fwe" />
                    <h3 className='blog_title'>This is how our shipping with purchase protection works</h3>
                    <p className='blog_info'>
                        {truncatedContent}
                        {!showFullContent && (
                            <>
                                <span style={{ margin: '0 5px' }}>...</span>
                                <Link to="/blog" style={{ color: 'blue', cursor: 'pointer', textDecoration: 'none' }}>
                                    Read more
                                </Link>
                            </>
                        )}
                    </p>
                    <div className='blog_section_seperator'></div>
                    <div className="bottom_blog_sec">
                        <FontAwesomeIcon icon={faCalendar} style={{color: "#979698"}} />
                        <div className="blog_date">14-7-2022</div>
                        <span className='date_seperator'></span>
                        
                        <FontAwesomeIcon icon={faMessage} style={{color: "#979698"}} />
                        <p>comments</p><span>(4)</span>
                    </div>
                </div>
                <div className="section_blog">
                    <img src={Gift} alt="fwe" />
                    <h3 className='blog_title'>This is how our shipping with purchase protection works</h3>
                    <p className='blog_info'>
                        {truncatedContent}
                        {!showFullContent && (
                            <>
                                <span style={{ margin: '0 5px' }}>...</span>
                                <Link to="/blog" style={{ color: 'blue', cursor: 'pointer', textDecoration: 'none' }}>
                                    Read more
                                </Link>
                            </>
                        )}
                    </p>
                    <div className='blog_section_seperator'></div>
                    <div className="bottom_blog_sec">
                        <FontAwesomeIcon icon={faCalendar} style={{color: "#979698"}} />
                        <div className="blog_date">14-7-2022</div>
                        <span className='date_seperator'></span>
                        
                        <FontAwesomeIcon icon={faMessage} style={{color: "#979698"}} />
                        <p>comments</p><span>(4)</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default BlogSection
