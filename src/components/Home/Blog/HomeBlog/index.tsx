import React, { useState, useEffect } from 'react';
import * as styles from './styles.module.css';
import SingleBlogCard from '../SingleBlog';
import { IBlogPost } from '../../../../Hooks/types';

interface IProps{
    posts: IBlogPost[]
}

const HomeBlog: React.FC<IProps> = (props) =>{
    const {posts} = props;
    const custom_posts = posts.slice(0,5)
    return (
        <div className={`${styles.default.wrapper}`}>
            <div className={styles.default.headerWrapper}>
                <p className={styles.default.header}>My Blog</p>
                <p className={styles.default.subHeader}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <span className={styles.default.line} />
            </div>
            <div className={styles.default.blogWrapper}>
                {

                    custom_posts.map(item => <SingleBlogCard blog={item}  />)
                }
        
            </div>
        
        </div>

    );
}

export default HomeBlog;