import React, { useState, useEffect } from 'react';
import * as styles from './styles.module.css';
import SingleBlogCard from '../SingleBlog';
import RegularSingleBlogCard from '../RegularSingleBlog';
import { IBlogPost } from '../../../../Hooks/types';

interface IProps{
    posts: IBlogPost[]
}

const Blog: React.FC<IProps> = (props) =>{
    const {posts} = props;
    const data1 = posts.slice(0,3);
    const data2 = posts.slice(2,posts.length);
    return (
        <div className={`${styles.default.wrapper}`}>
            <div className={styles.default.headerWrapper}>
                <p className={styles.default.header}>My Blog</p>
                <p className={styles.default.subHeader}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <span className={styles.default.line} />
            </div>
            <div className={styles.default.blogWrapper}>
                <div className={styles.default.leftBlogWrapper}>
                    {
                        data1.map(item=>  <SingleBlogCard blog={item} />)
                    }
                
                </div>
                <div className={styles.default.rightBlogWrapper}>
                    <div className={styles.default.blogHeader}>
                        <span>Most Recent Articles</span>
                    </div>
                    {
                        data2.map(item=>  <RegularSingleBlogCard blog={item} />)
                    }
                </div> 
                
            
            
            </div>
        
        </div>
    );
}

export default Blog;