import React, { useState } from 'react';
import * as styles from './styles.module.css';
import { Form, Input, FormGroup, Button } from 'reactstrap';
import { createCreateContactApi } from '../../Axios/create-contact-api';
import { NavLink } from 'react-router-dom';
import { createStudentApi } from '../../Axios/create-student-api';
import { useGetCourses } from '../../Hooks/use-get-courses';
import Loader from 'react-loader-spinner';

interface IProps{
	options: any[];
}

const StudentSigningForm: React.FC<IProps>= (props) =>{
	const {options} = props;
	const [val,setVal] = useState(false);
    const {courses ,courses_is_loading} = useGetCourses();

	const handleSubmit = (event:any) =>{
		event.preventDefault();
		const form = event.target;

		
		const data = {
			name: event.target.name.value,
			email: event.target.email.value,
			parent_name: event.target.parent_name.value,
			parent_phone: event.target.parent_phone.value,
			student_phone: event.target.student_phone.value,
			address: event.target.address.value,
			course: event.target.course.value,
			grade: event.target.grade.value,
			status: "unpaid",
		}
		// const res = useCreateContact(data);
		// console.log('Data ==>'  , event.target);
		createStudentApi(data)
        .then(res => {
			form.reset();
			setVal(true)
        })
        .catch();
	}
    return (
				<div className={`${styles.default.wrapper}`}>
					<Form onSubmit={(event) => handleSubmit(event)} className={styles.default.contact_form}>
						<div className="section-title text-center mb-5">
							<h2 className={`title ${styles.default.cont}`}>Please fill your personal information</h2>
						</div>
						
							<>
								<FormGroup>
									<Input type="text" id="name" name="name" className="form-control" style={{height: "3rem"}} placeholder="Ex: Ahmed" required />
								</FormGroup>
								<FormGroup>
									<Input type="text" id="parent_name" name="parent_name" className="form-control" style={{height: "3rem"}} placeholder="Ex: Mohamed" required />
								</FormGroup>
								<FormGroup>
									<Input type="select" name="grade" id="grade"  style={{height: "3rem"}}	required>
										<option value="default">Select your grade</option>
										<option value="grade1">Grade 1</option>
										<option value="grade2">Grade 2</option>
										<option value="grade3">Grade 3</option>
										<option value="grade4">Grade 4</option>
										<option value="grade5">Grade 5</option>
									</Input>
								</FormGroup>
								<FormGroup>
								<Input type="text" name="email" placeholder="Ex: example@info.com" id="email" style={{height: "3rem"}} required/>
							</FormGroup>
							<FormGroup>
								<Input type="select" name="course" id="course" style={{height: "3rem"}} required>
									<option value="default">Select your course</option>
									{
										options.map(course=> <option value={course.value}>{course.name}</option>)
									}
								</Input>
							</FormGroup>
							<FormGroup>
								<Input type="text" name="student_phone" placeholder="Ex: 01009839804" id="student_phone" style={{height: "3rem"}} required/>
							</FormGroup>
							<FormGroup>
								<Input type="text" name="parent_phone" placeholder="Ex: 01009839804" id="parent_phone" style={{height: "3rem"}} required/>
							</FormGroup>
							<FormGroup>
								<Input type="text" name="address" placeholder="Ex: Nasr city,Cairo" id="address" style={{height: "3rem"}} required/>
							</FormGroup>
								<br />
								<div className="row">
								<FormGroup>
									<Button className={styles.default.courses_button} type="submit">Save</Button>
								</FormGroup>
								<FormGroup>
									<NavLink to='/' className={styles.default.navA}>
										<Button className={styles.default.back_button} type="submit">Back to website</Button>
									</NavLink>
								</FormGroup>
								</div>
								
							</>
		
						
					</Form>
		
					
				</div>
    );
}

export default StudentSigningForm;