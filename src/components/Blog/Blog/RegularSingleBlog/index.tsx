import React, { useState } from 'react';
import * as styles from './styles.module.css';
import { faTags , faComment , faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IBlogPost } from '../../../../Hooks/types';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';



interface IProps{
    blog: IBlogPost;
}

const RegularSingleBlogCard: React.FC<IProps> = (props) =>{
    const {blog} =props;
    const [active , setActive] = useState(false);
    const handleActive = () =>{
        setActive(true);
    }
    const handleInactive = () =>{
        setActive(false);
    }
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <>
            <Modal isOpen={modal} toggle={toggle} className={styles.default.modal}>
                <ModalHeader toggle={toggle}>{blog.header}</ModalHeader>
                <ModalBody>
                    <div className={styles.default.blogCoverWrapper}>
                        <img src={`api/blog/get-blog-post-cover-image/${blog._id}/view`} />
                    </div>
                    {blog.content_body}
                </ModalBody>
                <ModalFooter>
                <Button color="#b09e80" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
            <div className={`${styles.default.blog_card} ${styles.default.blog_card_blog}`} onMouseLeave={handleInactive} onMouseEnter={handleActive}>
                <div className={styles.default.content}>
                    <div className={styles.default.ftr}>
                        <div className={styles.default.stats}> <FontAwesomeIcon icon={faTags} style={{color: '#B09E80'}} /> BY: MR/Wessam </div> 
                        <span style={{margin: '0 0.5rem'}}>|</span>
                        <div className={styles.default.stats}> <FontAwesomeIcon icon={faComment} style={{color: '#B09E80'}} /> 0 Comment</div>
                    </div>
                    <div className={styles.default.blog_table}>
                        <h4 className={styles.default.blog_card_caption}>
                            <a >{blog.header}</a>
                        </h4>
                        <p className={styles.default.blog_card_description}>{blog.post_content}</p>
                        <button className={styles.default.readMore} onClick={toggle}>Read More  <FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default RegularSingleBlogCard;