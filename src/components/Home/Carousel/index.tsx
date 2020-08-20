import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import * as styles from './styles.module.sass';
import { ISlider } from '../../../Hooks/types';


const CustomCarousel = (props:{sliders:ISlider[]}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === props.sliders.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? props.sliders.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex:any) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }


    const slides = props.sliders.map((item) => {
        return (
        <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            className={styles.default.sliderImageWrapper}
        >
            <img src={` http://localhost:5026/api/slider/website-get-slider-image/${item._id}/view`}  />
            <CarouselCaption style={{display: 'block !important'}} className={styles.default.carouselCaption} captionText={""} captionHeader={item.caption} />
        </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={props.sliders} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default CustomCarousel;