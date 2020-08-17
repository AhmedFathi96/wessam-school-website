import React from 'react';
import * as styles from './styles.module.css';
import { faDollarSign} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ICourse } from '../../../Hooks/types';
interface IProps{
    course: ICourse;
}
const SingleCourseCard: React.FC<IProps> = (props) =>{
    const {course} = props;
    return (
            <div className={styles.default.courseWrapper}>
                <div className={styles.default.header} style={course.course_type==='featured'?{background: 'linear-gradient(to bottom, #B09E80 0%, #B09E80)'}:{background: 'linear-gradient(to bottom, #fafafa 0%, #f6f6f6)'}}>
                    <span className={`${styles.default.type}  ${course.course_type==='featured'?styles.default.featured_color:styles.default.regular_color}`}>{course.plane_name}</span>
                    <span className={`${styles.default.price} ${course.course_type==='featured'?styles.default.featured_color:styles.default.regular_price}`}>
                        <FontAwesomeIcon icon={faDollarSign} style={course.course_type==='featured'?{color: '#fff'}:{color: '#B09E80'}} />{course.price}</span>
                    <span className={`${styles.default.desc} ${course.course_type==='featured'?styles.default.featured_color:styles.default.regular_color}`}>{course.desc}</span>   
                </div>
                <div className={course.course_type==='featured'?styles.default.featured_list:styles.default.regular_list}>
                    <ul className={styles.default.list}>
                        {
                            course.bullet1 !== undefined ? <li className={styles.default.item}>{course.bullet1}</li> : ''
                        }
                        {
                            course.bullet2 !== undefined ? <li className={styles.default.item}>{course.bullet2}</li> : ''
                        }
                        {
                            course.bullet3 !== undefined ? <li className={styles.default.item}>{course.bullet3}</li> : ''
                        }
                        {
                            course.bullet4 !== undefined ? <li className={styles.default.item}>{course.bullet4}</li> : ''
                        }
                        {
                            course.bullet5 !== undefined ? <li className={styles.default.item}>{course.bullet5}</li> : ''
                        }
                        
                        
                    </ul>
                    <button className={course.course_type==='featured'?styles.default.featured_button:styles.default.regular_button}>Enroll Now</button>
                </div>
            </div>

    );
}

export default SingleCourseCard;