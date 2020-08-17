import React, { useState, useEffect } from 'react';
import * as styles from './styles.module.css';
import SingleCourseCard from './SingleCourse';
import NavbarComponent from '../navbar';
import Header from '../Header';
import Footer from '../Footer';
import {useGetCourses} from '../../Hooks/use-get-courses';


const Courses: React.FC = (props) =>{

    const [isActive, setIsActive] = useState(false);
    const [topPage, setTopPage] = useState<{}>();
    const [wrapRef, setWrapRef] = useState<HTMLDivElement>();
    const {courses} = useGetCourses();
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
    return (

        <div ref={setWrapRefHandler}>
            <NavbarComponent active={isActive} />
            <Header page_name="Courses" page_background_img={require('../../assets/breadcrumb-bg.jpg')} />
            <div className={`${styles.default.wrapper}`}>
                <div className="container">
                    <div className={styles.default.headerWrapper}>
                        <p className={styles.default.header}>Courses Pricing</p>
                        <p className={styles.default.subHeader}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
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

    );
}

export default Courses;