import React, { useState, useCallback } from 'react';
import * as styles from './styles.module.css';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

interface IProps{
    photos: any[];
}

const HomeGallery: React.FC<IProps> = (props) =>{
    const {photos} = props;

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    return (
        <div className={`${styles.default.wrapper}`}>
            <div className={styles.default.headerWrapper}>
                <p className={styles.default.header}>My Gallery</p>
                <p className={styles.default.subHeader}>I love what I do. I take great pride in what I do.</p>
                <span className={styles.default.line} />
            </div>
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                    <Carousel
                        currentIndex={currentImage}
                        views={photos.map(x => ({
                            ...x,
                            srcset: true,
                            caption: x.title,
                            source: x.src
                        }))}
                    />
                </Modal>
                ) : null}
            </ModalGateway>
        </div>

    );
}

export default HomeGallery;