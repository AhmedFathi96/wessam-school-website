import React, { useState, useEffect } from 'react';
import * as styles from './styles.module.css';
import NavbarComponent from '../navbar';
import Footer from '../Footer';
import Header from '../Header';
import Blog from './Blog/HomeBlog';
import { useGetBlogPosts } from '../../Hooks/use-get-blog-posts';


const BlogPage: React.FC = (props) =>{
    const [isActive, setIsActive] = useState(false);
    const [topPage, setTopPage] = useState<{}>();
    const [wrapRef, setWrapRef] = useState<HTMLDivElement>();

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        
    },[topPage]);
    const handleScroll = () => {
        const { top } = (wrapRef === undefined)?{top:-999}:wrapRef.getBoundingClientRect();
        setTopPage((top - top - top));
        if ((top - top - top) > 20) {
            setIsActive(true);
        }
        if ((top - top - top) <= 20) {
            setIsActive(false);
        }
    }
    
    const setWrapRefHandler = (ref:any) => {
        setWrapRef(ref)
    }
    const {posts} = useGetBlogPosts();

    
    return (
        <div className={`${styles.default.wrapper}`}>
            <div ref={setWrapRefHandler}>
                <NavbarComponent active={isActive} />
                <Header page_name="Blog" page_background_img={require('../../assets/breadcrumb-bg.jpg')} />
                <Blog posts={posts} />

                <Footer />
            </div>
        </div>
    );
}

export default BlogPage;