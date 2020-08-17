import React from 'react';
import * as styles from './styles.module.css';
import ContactForm from '../../Contact/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow , faPhone , faMailBulk , faGolfBall} from '@fortawesome/free-solid-svg-icons';


const HomeContact: React.FC = (props) =>{
    
    return (
        <div className={`${styles.default.wrapper}`}>
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

    );
}

export default HomeContact;