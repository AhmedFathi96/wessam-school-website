import React, { useState } from 'react';
import * as styles from './styles.module.css';
import { Form, Input, FormGroup, Button } from 'reactstrap';
import { createCreateContactApi } from '../../../Axios/create-contact-api';



const ContactForm: React.FC= (props) =>{

	const [val,setVal] = useState(false);
 
	const handleSubmit = (event:any) =>{
		event.preventDefault();
		const form = event.target;

		
		const data = {
			first_name: event.target.first_name.value,
			last_name: event.target.last_name.value,
			email: event.target.email.value,
			phone: event.target.phone.value,
			message: event.target.message.value,
		}
		// const res = useCreateContact(data);
		console.log('Data ==>'  , event.target);
		createCreateContactApi(data)
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
					<h2 className={`title ${styles.default.cont}`}>Contact Form</h2>
				</div>
				{
					val && <div className="section-title text-center mb-5">
							<span style={{fontSize: '25px',color:'#B09E80'}}>Thank you for contacting us</span>
						</div>
	
				}
				{
					!val && 
					<>
						<div className="row mb-4">
							<div className="col-md-6 mb-4 mb-md-0">
								<FormGroup>
									<Input type="text" id="first_name" name="first_name" className="form-control" style={{height: "3rem"}} placeholder="First name" required />
								</FormGroup>
							</div>
							<div className="col-md-6">
								<FormGroup>
									<Input type="text" id="	" name="last_name" className="form-control" style={{height: "3rem"}} placeholder="Last name"  required />
								</FormGroup>
							</div>		
						</div>

						<FormGroup>
							<Input type="email" id="email" name="email" className="form-control" style={{height: "3rem"}} placeholder="Email" required />
						</FormGroup>
						<FormGroup>
							<Input type="text" id="phone" name="phone" className="form-control" style={{height: "3rem"}} placeholder="Phone Number"  required />
						</FormGroup>
						<FormGroup>
							<Input type="textarea" className="form-control" id="message" name="message" rows={5} cols={3} placeholder="Message" required />
						</FormGroup>
						<br />
						<FormGroup>
							<Button className={styles.default.courses_button} type="submit">Save</Button>
						</FormGroup>
					</>
				}
				
			</Form>

			
		</div>


    );
}

export default ContactForm;