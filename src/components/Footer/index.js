import React, { useState, useEffect } from 'react';
import * as styles from './styles.module.css';
import { Facebook } from 'react-feather';
import { Twitter } from 'react-feather';
import { Instagram } from 'react-feather';



const Footer= (props) =>{
    
    return (
        <footer className={`${styles.default.footer}`}>
			
			<div className={styles.default.social_wrapper} style={{display: "flex", flexDirection: "column"}}>
				<div className={styles.default.footer_widget}>
					<ul className={styles.default.footer_social}>
						<li><a href="https://www.facebook.com/AlHakmiah/"><Facebook /></a></li>
						<li><a href="https://www.instagram.com/alhakmiah"><Twitter /></a></li>
						<li><a href="https://www.youtube.com/user/Alhakmiah1"><Instagram /></a></li> 


					</ul>
				</div>

				<p className={styles.default.meow}>All Copywriters Reserved &copy;<script>document.write(new Date().getFullYear());</script> For Company Name </p>
			
            </div>
	</footer>


    );
}

export default Footer;