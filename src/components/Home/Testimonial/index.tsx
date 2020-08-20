import React, { useState } from 'react';
import * as styles from './styles.module.css';
import {
    MDBContainer,
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,

    MDBIcon
} from 'mdbreact';
import { ITestimonial } from '../../../Hooks/types';


interface IProps{
    testimonial:ITestimonial[];
}

const TestimonialsPage: React.FC<IProps> = (props) => {
    const { testimonial } =props;
    return (
        <div className={styles.default.testimonial_area}>
            <div className={styles.default.testimonial_area_overlay}>
                <div className={styles.default.headerWrapper}>
                    <p className={styles.default.header}>Testimonial</p>
                    <p className={styles.default.subHeader}>What they say about me</p>
                    <span className={styles.default.line} />
                </div>
            </div>
    
            <MDBContainer style={{marginTop: '10rem'}}>
                <section className='text-center my-5'>

                    <MDBCarousel
                        activeItem={1}
                        length={testimonial.length}
                        testimonial
                        showIndicators={false}
                        className='no-flex'
                    >
                        <MDBCarouselInner>
                            {
                                testimonial.map((item)=>
                                    {  
                                        return ( 
                                            <MDBCarouselItem itemId={item.order}>
                                                <div className={styles.default.itemWrapper}>
                                                    <div className='mx-auto mb-4'>
                                                        <img
                                                            src={` http://localhost:5026/api/testimonial/get-testimonial-image/${item._id}/view`}
                                                            className='rounded-circle img-fluid'
                                                            alt=''
                                                        />
                                                    </div>
                                                    <p className={styles.default.paragraph}>
                                                    <MDBIcon icon='quote-left' /> {item.content}</p>
                                                    <h4>{item.author}</h4>
                                                    <h6 className='my-3'>{item.about_author}</h6>
                                                    <MDBIcon icon='star' className='blue-text' />
                                                    <MDBIcon icon='star' className='blue-text' />
                                                    <MDBIcon icon='star' className='blue-text' />
                                                    <MDBIcon icon='star' className='blue-text' />
                                                    <MDBIcon far icon='star-half' className='blue-text' />
                                                </div>
                                            </MDBCarouselItem> 
                                        )
                                    }
                                    
                                )
                            }
                        </MDBCarouselInner>
                        
                    </MDBCarousel>
                </section>
            </MDBContainer>
        </div>
    );
};

export default TestimonialsPage;