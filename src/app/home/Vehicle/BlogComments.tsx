import React from 'react'
import { Profile } from '../../imgs'

const BlogComments = () => {
    return (
        <div>
            <div className="blogform_heading">2 Comments</div>
            <div className="comments">
                <img src={Profile} alt="profile" />
                <div className='comment_body'>
                    <div className="comment_head">
                        <div className='comment_head_inner'>
                            <div className="comment_title">Lorem, ipsum.</div>
                            <div className="com_date">10 April 2023</div>
                        </div>
                        <div>Reply</div>
                    </div>
                    <div className="comment_body">
                        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque maiores architecto harum exercitationem corporis dolorem saepe non nemo unde culpa quaerat iste labore veniam voluptatem ipsam in, molestiae vero.</div>
                    </div>

                </div>
            </div>
            <div className="reply">
                <img src={Profile} alt="profile" />
                <div className='comment_body'>
                    <div className="comment_head">
                        <div className='comment_head_inner'>
                            <div className="comment_title">Lorem, ipsum.</div>
                            <div className="com_date">10 April 2023</div>
                        </div>
                        <div>Reply</div>
                    </div>
                    <div className="comment_body">
                        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque maiores architecto harum exercitationem corporis dolorem saepe non nemo unde culpa quaerat iste labore veniam voluptatem ipsam in, molestiae vero.</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BlogComments
