import React, { useEffect } from 'react';
import * as styles from './styles.module.css';
import { IAbout } from '../../../Hooks/types';

interface IAboutProps{
    about: IAbout[];
}
const HomeAbout: React.FC<IAboutProps> = (props) =>{
    const {about} = props;


    return (
        <>
            {about.map(item=> 
                <div style={{backgroundColor: '#f8f9fa'}}>

                    <div className="container">
                        <div className={`${styles.default.wrapper}`}>
                            
                            <div className={styles.default.contentWrapper}>
                                <p className={styles.default.header}>{item.header}</p>
                                <p className={styles.default.subHeader}>Math Teacher at Manara school</p>
                                <p className={styles.default.about}>
                                {item.content}
                                </p>
                                <div className={styles.default.btnWrapper}>
                                    <button className={styles.default.courses_button}>View Courses</button>
                                    <button className={styles.default.courses_button2}>Read More</button>
                                </div>
                                
                            </div>
                            <div className={styles.default.leftImage}>
                                <img src={` api/about/website-get-about-image/${item._id}/view`} />
                            </div>
                        </div>
                    </div>
        
                </div>    
            )}
        </>
       
    
    );
}

export default HomeAbout;