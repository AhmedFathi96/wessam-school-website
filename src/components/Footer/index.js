import React, { useState, useEffect } from 'react';
import * as styles from './styles.module.css';
import { Facebook } from 'react-feather';
import { Twitter } from 'react-feather';
import { Instagram } from 'react-feather';
import {useGetInfo} from '../../Hooks/use-get-info'


const Footer= (props) =>{
    const {Info} = useGetInfo();
    return (
        <footer className={`${styles.default.footer}`}>
			
			<div className={styles.default.social_wrapper} style={{display: "flex", flexDirection: "column"}}>
				<div className={styles.default.footer_widget}>
					<ul className={styles.default.footer_social}>
						<li><a href={Info.facebook_url}><Facebook /></a></li>
						<li><a href={Info.twitter_url}><Twitter /></a></li>
						<li><a href={Info.instagram_url}><Instagram /></a></li> 


					</ul>
				</div>

				<p className={styles.default.meow}>All Copywriters Reserved &copy;<script>document.write(new Date().getFullYear());</script> For {Info.company_name} </p>
			
            </div>
	</footer>


    );
}

export default Footer;