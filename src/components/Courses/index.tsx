import React, { useState, useEffect } from 'react';
import * as styles from './styles.module.css';
import SingleCourseCard from './SingleCourse';
import NavbarComponent from '../navbar';
import Header from '../Header';
import Footer from '../Footer';
import {useGetCourses} from '../../Hooks/use-get-courses';
import Loader from 'react-loader-spinner';
import { useGetPagesHeaders } from '../../Hooks/use-get-page-headers';


const Courses: React.FC = (props) =>{

    const [isActive, setIsActive] = useState(false);
    const [topPage, setTopPage] = useState<{}>();
    const [wrapRef, setWrapRef] = useState<HTMLDivElement>();
    const {courses ,courses_is_loading} = useGetCourses();
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
    const {PagesHeaders,PagesHeaders_is_loading} = useGetPagesHeaders();

    const setWrapRefHandler = (ref:any) => {
        setWrapRef(ref)
    }
    return (
        <>
            
            {
                (courses_is_loading && PagesHeaders_is_loading)?
                <div ref={setWrapRefHandler}>   
                    <NavbarComponent active={isActive} />
                    <Header page_name="Courses" page_background_img="api/pages/view-courses-page-cover-image" />
                    <div className={`${styles.default.wrapper}`}>
                        <div className="container">
                            <div className={styles.default.headerWrapper}>
                                <p className={styles.default.header}>{PagesHeaders[0].courses_header}</p>
                                <p className={styles.default.subHeader}>{PagesHeaders[0].courses_text}</p>
                                <span className={styles.default.line} />
                            </div>
                            <div className={styles.default.coursesWrapper}>
                                {
                                    courses.map(item => <SingleCourseCard course={item}  />)
                                }
                                    
                                            
                            </div>
                        </div>
                    </div>
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
        </>
    );
}

export default Courses;