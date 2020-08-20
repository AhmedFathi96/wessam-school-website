import React from 'react';
import * as styles from './styles.module.css';
import { ITestimonial } from '../../../../Hooks/types';

interface IProps{
    testimonial:ITestimonial;
}

const SingleTestimonialCard: React.FC<IProps> = (props) =>{
    const {testimonial} =props;
    return (
        <div className="testimonial4_slide">
            <img src={` http://localhost:5026/api/testimonial/get-testimonial-image/${testimonial._id}/view`} className={`${styles.default.img_circle} ${styles.default.img_responsive}`} />
            <p>{testimonial.content}</p>
            <h4>{testimonial.author}</h4>
        </div>
    );
}

export default SingleTestimonialCard;