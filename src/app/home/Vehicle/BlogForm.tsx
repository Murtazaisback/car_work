import React from 'react'

const BlogForm = () => {
  return (
    <div className='form_section'>
        <div className="form_heading">Leave a Reply</div>
        <div>Your emial address will not be publish. Required fields are marked *</div>
        <form action="" className='comment_form'>
            <textarea name="" id="" placeholder='Your Comment *' required></textarea>
            <input type="text"  placeholder='Your Name *' required/>
            <input type="text"  placeholder='Your Email *' required/>
            <input type="text" placeholder='website'/>
            <div className="form_footer">

            <div className='checkbox_box'>
                <input type="checkbox" required />
                <div>Save my name, email, and website in this browser for the next I comment.</div>
            </div>
            <button className='form_btn'>Post Comment</button>
            </div>
        </form>

        
    </div>
  )
}

export default BlogForm
