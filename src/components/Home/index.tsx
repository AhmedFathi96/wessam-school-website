import React, { useState, useEffect } from 'react';
import * as styles from './styles.module.css';
import NavbarComponent from '../navbar';
import HomeAbout from './HomeAbout';
import CustomCarousel from './Carousel';
import HomeGallery from './HomeGallery';
import HomeBlog from './Blog/HomeBlog';
import Footer from '../Footer';
import Testimonial from '../Home/Testimonial';
import HomeContact from './Contact';
import { useGetAbout } from '../../Hooks/use-get-about';
import { useGetSliders } from '../../Hooks/use-get-sliders';
import { useGetGallery } from '../../Hooks/use-get-gallery';
import { useGetBlogPosts } from '../../Hooks/use-get-blog-posts';
import { useGetTestimonials } from '../../Hooks/use-get-testimonial';


export const convertDate = (time:string) =>{
    const dateObject = new Date(time)

    // const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15

    // dateObject.toLocaleString("en-US", {weekday: "long"}) // Monday
    const month = dateObject.toLocaleString("en-US", {month: "long"}) // December
    const day = dateObject.toLocaleString("en-US", {day: "numeric"}) // 9

    return `${month.substring(0,3).toLocaleUpperCase()} 
    ${day}`;

}
const HomePage: React.FC = (props) =>{
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


    const {testimonials} = useGetTestimonials();
    const {about}        = useGetAbout();
    const {sliders}      = useGetSliders();
    const {gallery}      = useGetGallery();
    const {posts}        = useGetBlogPosts();
    const data = Array.from(gallery, x => ({
        src: `http://localhost:5026/api/gallery/website-get-gallery-image/${x._id}/view`,
        width: x.width_ration,
        height: x.height_ration,
        title: 'test image'
    }))

    React.useEffect(() =>{
        console.log('Testimonial' ,testimonials)
    } ,[])

    return (
        <div className={`${styles.default.wrapper}`}>
            <div ref={setWrapRefHandler}>
                <NavbarComponent active={isActive} />
                <CustomCarousel sliders={sliders} />
                <HomeAbout about={about} />
                <HomeGallery photos={data}  />       
                <HomeBlog posts={posts} />         
                <Testimonial testimonial={testimonials} /> 
                <HomeContact />
                <Footer />
            </div>
        </div>
    );
}

export default HomePage;