import React, { useState, useEffect } from 'react';
import * as styles from './styles.module.css';
import { NavLink } from 'react-router-dom';


interface IProps{
    active:boolean
}
const getWindowDimensions =() => {
    const { innerWidth: width, innerHeight: height } = window;
    // console.log('top' , width)
    return {
        width,
        height
    };
}
const NavbarComponent: React.FC<IProps> = (props) =>{
    const [toggle , setToggle] = useState(false);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [windowDimensions]);
    
    const handleClick = () =>{
        setToggle(pt => !pt);
    }
    return (
        <div className={`${styles.default.nav} ${props.active?styles.default.affix:''}  ${toggle?styles.default.activeBack:''}`}>
            <div className={`${styles.default.container} ${styles.default.wrapper}`}>
                <div className={styles.default.logo}>
                    <a href="#" className={styles.default.navLogo}><img className={`${styles.default.logoImg}`} width="130px" src={require('../../assets/250_50.png')} /></a>
                </div>  
                <div className={`${styles.default.main_list} ${toggle?styles.default.show_list:''}`}>

                    <ul className={styles.default.navLinks}>
                        <li className={styles.default.navItem}><NavLink to='/' className={styles.default.navA}>Home</NavLink></li>
                        <li className={styles.default.navItem}><NavLink to='/highlights' className={styles.default.navA}>Highlights</NavLink></li>
                        <li className={styles.default.navItem}><NavLink to='/courses' className={styles.default.navA}>Courses</NavLink></li>
                        <li className={styles.default.navItem}><NavLink to='/blog' className={styles.default.navA}>Blog</NavLink></li>
                        <li className={styles.default.navItem}><NavLink to='/contact-us' className={styles.default.navA}>Contact</NavLink></li>

                    </ul>
                </div>
                <span className={`${styles.default.navTrigger} ${toggle?styles.default.active:''}`} onClick={handleClick}>
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
            </div>
        </div>

    );
}

export default NavbarComponent;