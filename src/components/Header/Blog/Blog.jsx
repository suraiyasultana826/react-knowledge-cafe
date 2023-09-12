// import { space } from 'postcss/lib/list';
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id, title, cover, author, author_img, posted_date,reading_time_minutes,hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover Pic of he title ${title}`} />
            <div className='flex justify-between mb-4 space-y-4'>
                <div className='flex'>
                    <img className='w-14 h-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>


                </div>
                <div>
                    <span>{reading_time_minutes} min read</span>
                    <button 
                    onClick={() => handleAddToBookmark(blog)}
                    className='ml-2 text-red-600 text-2xl'><FaBookmark></FaBookmark></button>

                </div>
            </div>
          <h2 className='text-4xl'>{title}</h2>
          <p>
            {
                hashtags.map((hash, idx) => <span key={idx}><a href =" ">#{hash}</a></span>)

                }</p>  
                <button onClick={() => handleMarkAsRead(id, reading_time_minutes)} className='text-purple-600 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;