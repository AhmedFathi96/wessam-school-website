import React from 'react';
import * as styles from './styles.module.css';
import { useGetCourses } from '../../Hooks/use-get-courses';
import Loader from 'react-loader-spinner';
import StudentSigningForm from '.';



const Students: React.FC= (props) =>{

    const {courses ,courses_is_loading} = useGetCourses();

    const data = courses.map(course =>{ return {
            name:course.plane_name,
            value:course._id
        }})
    return (
		<>
			{
				courses_is_loading?
                    <StudentSigningForm options={data} />
                :
				<div className={styles.default.loading}>
					<Loader
						type="Puff"
						color="#B09E80"
						height={100}
						width={100}
					/>
				</div>

			}
		</>
   
    );
}

export default Students;