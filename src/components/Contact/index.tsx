import React, { useState, useEffect } from 'react';
import * as styles from './styles.module.css';
import ContactForm from './ContactForm';
import NavbarComponent from '../navbar';
import Header from '../Header';
import Footer from '../Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faPhone, faMailBulk, faGolfBall } from '@fortawesome/free-solid-svg-icons';


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
    
    const setWrapRefHandler = (ref:any) => {
        setWrapRef(ref)
    }
    return (
        <div className={`${styles.default.wrapper}`}>
			<div ref={setWrapRefHandler}>
				<NavbarComponent active={isActive} />
				<Header page_name="Contact-us" page_background_img={require('../../assets/breadcrumb-bg.jpg')} />
                <div className={`${styles.default.page_wrapper}`}>
                    <div className={styles.default.headerWrapper}>
                        <p className={styles.default.header}>Contact Us</p>
                        <p className={styles.default.subHeader}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <span className={styles.default.line} />
                    </div>
                    <div className="container">
                        <div className={styles.default.contactWrapper}>
                            <div className={styles.default.infoWrapper}>
                                <h2 className={`${styles.default.cont}`}>Contact Info</h2>
                                <ul>
                                    <li className={styles.default.item}><FontAwesomeIcon icon={faLocationArrow} style={{color: '#B09E80'}} /> Address: Z105 - Tan Thinh, Thai Nguyen - Viet Nam</li>
                                    <li className={styles.default.item}><FontAwesomeIcon icon={faPhone} style={{color: '#B09E80'}} /> Phone: +1.900.3456.789</li>
                                    <li className={styles.default.item}><FontAwesomeIcon icon={faMailBulk} style={{color: '#B09E80'}} /> Email: yourname@somemail.com</li>
                                    <li className={styles.default.item}><FontAwesomeIcon icon={faGolfBall} style={{color: '#B09E80'}} /> Website: http://example.com</li>
                                </ul>
                                <div className={styles.default.map} style={{marginLeft: '2.5rem'}}>
                                    <div className="gmap_canvas">
                                        <iframe width="400" height="250" id="gmap_canvas" src="https://maps.google.com/maps?q=shourbra&t=&z=13&ie=UTF8&iwloc=&output=embed"  scrolling="no" />
                                    </div>
                                </div>
                            </div>
                            <ContactForm />
                        </div>
                    </div>
        
                </div>
                <Footer />
			</div>
		</div>


    );
}

export default ContactPage;