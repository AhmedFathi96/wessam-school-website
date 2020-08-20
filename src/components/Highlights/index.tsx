import React, { useState, useEffect } from 'react';
import * as styles from './styles.module.css';
import NavbarComponent from '../navbar';
import HomeGallery from './Gallery';
import Footer from '../Footer';
import Header from '../Header';
import { useGetGallery } from '../../Hooks/use-get-gallery';
import Loader from 'react-loader-spinner';
import { useGetPagesHeaders } from '../../Hooks/use-get-page-headers';


const HighlightsPage: React.FC = (props) =>{
    const [isActive, setIsActive] = useState(false);
    const [topPage, setTopPage] = useState<{}>();
    const [wrapRef, setWrapRef] = useState<HTMLDivElement>();
    const {gallery,gallery_is_loading} = useGetGallery();
    const {PagesHeaders,PagesHeaders_is_loading} = useGetPagesHeaders();

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
    
    const data = Array.from(gallery, x => ({
        src: ` http://localhost:5026/api/gallery/website-get-gallery-image/${x._id}/view`,
        width: x.width_ration,
        height: x.height_ration,
        title: 'test image'
    }))

    const setWrapRefHandler = (ref:any) => {
        setWrapRef(ref)
    }

    
    return (
        <div className={`${styles.default.wrapper}`}>
            {
                (gallery_is_loading && PagesHeaders_is_loading)?
                    <div ref={setWrapRefHandler}>
                        <NavbarComponent active={isActive} />
                        <Header page_name="Highlights" page_background_img="http://localhost:5026/api/pages/view-highlights-page-cover-image" />
                        <HomeGallery photos={data} header={PagesHeaders[0].highlights_header} text={PagesHeaders[0].highlights_text} />

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

export default HighlightsPage;