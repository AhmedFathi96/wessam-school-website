import React, { useState, useEffect } from 'react';
import * as styles from './styles.module.css';
import ContactForm from './ContactForm';
import NavbarComponent from '../navbar';
import Header from '../Header';
import Footer from '../Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faPhone, faMailBulk, faGolfBall } from '@fortawesome/free-solid-svg-icons';
import { useGetPagesHeaders } from '../../Hooks/use-get-page-headers';
import Loader from 'react-loader-spinner';
import { useGetInfo } from '../../Hooks/use-get-info';


const ContactPage: React.FC= (props) =>{
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
    const {PagesHeaders,PagesHeaders_is_loading} = useGetPagesHeaders();
    const {Info,Info_is_loading} = useGetInfo();


    const setWrapRefHandler = (ref:any) => {
        setWrapRef(ref)
    }
    return (
        <div className={`${styles.default.wrapper}`}>
            {
                (PagesHeaders_is_loading && Info_is_loading)?
                <div ref={setWrapRefHandler}>
                    <NavbarComponent active={isActive} />
                    <Header page_name="Contact-us" page_background_img="api/pages/view-contact-page-cover-image" />
                    <div className={`${styles.default.page_wrapper}`}>
                        <div className={styles.default.headerWrapper}>
                            <p className={styles.default.header}>{PagesHeaders[0].contact_header}</p>
                            <p className={styles.default.subHeader}>{PagesHeaders[0].contact_text}</p>
                            <span className={styles.default.line} />
                        </div>
                        <div className="container">
                            <div className={styles.default.contactWrapper}>
                                <div className={styles.default.infoWrapper}>
                                    <h2 className={`${styles.default.cont}`}>Contacts Info</h2>
                                    <ul>
                                        <li className={styles.default.item}><FontAwesomeIcon icon={faLocationArrow} style={{color: '#B09E80'}} /> Address: {Info?.address}</li>
                                        <li className={styles.default.item}><FontAwesomeIcon icon={faPhone} style={{color: '#B09E80'}} /> Phone: {Info?.phone}</li>
                                        <li className={styles.default.item}><FontAwesomeIcon icon={faMailBulk} style={{color: '#B09E80'}} /> Email: {Info?.email}</li>
                                    </ul>
                                    <div className={styles.default.map} style={{marginLeft: '2.5rem'}}>
                                        <div className="gmap_canvas">
                                            <iframe width="400" height="250" id="gmap_canvas" src={Info?.map_url}  scrolling="no" />
                                        </div>
                                    </div>
                                </div>
                                <ContactForm />
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
	
        </div>


    );
}

export default ContactPage;