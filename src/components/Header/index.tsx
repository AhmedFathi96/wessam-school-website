import React, { useState, useEffect } from 'react';
import * as styles from './styles.module.css';

interface IProps{
	page_name: string;
	page_background_img: string;
}
const Header :React.FC<IProps>= (props) =>{
    
    return (
        <div className={`${styles.default.wrapper}`} style={{backgroundImage: `url(${props.page_background_img})`}}>
			<p className={styles.default.header}>{props.page_name}</p>
			<span className={styles.default.pre}>{`Home > `} <p className={styles.default.pageName}>{` ${props.page_name}`}</p></span>
		</div>


    );
}

export default Header;