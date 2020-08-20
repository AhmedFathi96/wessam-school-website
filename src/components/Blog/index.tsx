import React, { useState, useEffect } from 'react';
import * as styles from './styles.module.css';
import NavbarComponent from '../navbar';
import Footer from '../Footer';
import Header from '../Header';
import Blog from './Blog/HomeBlog';
import { useGetBlogPosts } from '../../Hooks/use-get-blog';
import Loader from 'react-loader-spinner';
import { useGetPagesHeaders } from '../../Hooks/use-get-page-headers';


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
    const {BlogPosts,BlogPosts_is_loading} = useGetBlogPosts();
    const {PagesHeaders,PagesHeaders_is_loading} = useGetPagesHeaders();

    
    return (
        <div className={`${styles.default.wrapper}`}>
            

            {
                (BlogPosts_is_loading) && PagesHeaders_is_loading?
                    <div ref={setWrapRefHandler}>
                        <NavbarComponent active={isActive} />
                        <Header page_name="Blog" page_background_img="http://localhost:5026/api/pages/view-blog-page-cover-image" />
                        <Blog posts={BlogPosts} header={PagesHeaders[0].blog_header} text={PagesHeaders[0].blog_text} />

                        <Footer />
                    </div>
                    :
                    <div className={styles.default.loading}>
                        <Loader
                            type="Puff"
                            color="#B09E80"
                            height={100}
                            width={100}
                        />
                    </div>
            }
        </div>
    );
}

export default BlogPage;