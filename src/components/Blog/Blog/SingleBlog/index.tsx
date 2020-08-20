import React, { useState } from 'react';
import * as styles from './styles.module.css';
import { faTags , faComment , faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IBlogPost } from '../../../../Hooks/types';
import { convertDate } from '../../../Home';

interface IProps{
    blog: IBlogPost;
}

const SingleBlogCard: React.FC<IProps> = (props) =>{
    const {blog} = props;
    const [active , setActive] = useState(false);
    const handleActive = () =>{
        setActive(true);
    }
    const handleInactive = () =>{
        setActive(false);
    }
    const date = convertDate(blog.createdAt)
    return (
            <div className={`${styles.default.blog_card} ${styles.default.blog_card_blog}`} onMouseLeave={handleInactive} onMouseEnter={handleActive}>
                <div className={`${styles.default.blog_card_image}`}>
                    <img className={styles.default.img} src={` http://localhost:5026/api/blog/get-blog-post-image/${blog._id}/view`} /> 
                    <div className={`${styles.default.post_date} ${active?styles.default.post_date_active:styles.default.post_date_inactive}`}>{date}</div>
                </div>
                <div className={styles.default.content}>
                    <div className={styles.default.ftr}>
                        <div className={styles.default.stats}> <FontAwesomeIcon icon={faTags} style={{color: '#B09E80'}} /> BY: MR/Wessam </div> 
                        <span style={{margin: '0 0.5rem'}}>|</span>
                        <div className={styles.default.stats}> <FontAwesomeIcon icon={faComment} style={{color: '#B09E80'}} /> 0 Comment</div>
                    </div>
                    <div className={styles.default.blog_table}>
                        <h4 className={styles.default.blog_card_caption}>
                            <a >{blog.header}</a>
                        </h4>
                        <p className={styles.default.blog_card_description}>{blog.post_content}</p>
                        <button className={styles.default.readMore}>Read More  <FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                </div>

            </div>

    );
}

export default SingleBlogCard;