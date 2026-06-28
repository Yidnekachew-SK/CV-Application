import { useState } from 'react';
import { Button, selectEditSection } from './button.jsx';
import '../Styles/form-styles.css';

function GeneralForm ({formData, setFormData, formId, setFormId}) {
	const [localData, setLocalData] = useState({ firstName: "",lastName: "",
			email: "",phone: "" });

	const HandleGeneralInfoSubmit = (event) => {
		event.preventDefault();

		if (event.currentTarget.checkValidity()) {
			const submitData = new FormData(event.currentTarget);

			let firstName = submitData.get('firstName');
			let lastName = submitData.get('lastName');
			let email = submitData.get('email');
			let phone = submitData.get('phone');
			let submittedData = {firstName, lastName, email, phone};
			console.log('submittedData.............................')
			console.log(submittedData)

			setFormData(prev => ({ ...prev, general: submittedData }));
			setFormId(prev => ({...prev, gen: 0}));
			setLocalData({ firstName: "",lastName: "",email: "",phone: "" })
			event.currentTarget.reset();
		}
	};

	const HandleGeneralInfoEdit = () => {
		setLocalData(formData.general);
		console.log("localdata......................................");
		console.log(formData.general)
	};

	const HandleChange = (e) => {
	    const { name, value } = e.target;
	    setLocalData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<form className="form generalForm" onSubmit={HandleGeneralInfoSubmit} >
			<p className="formLabel">General Information Form</p>
			<div className="input firstNameInput">
				<label htmlFor="fName">First Name</label>
				<input type="text" name="firstName" id="fName" required value={localData.firstName}
					onChange={HandleChange} ></input>
			</div>
			<div className="input lastNameInput">
				<label htmlFor="lName">Last Name</label>
				<input type="text" name="lastName" id="lName" required value={localData.lastName}
					onChange={HandleChange} ></input>
			</div>
			<div className="input emailInput">
				<label htmlFor="email">Email</label>
				<input type="email" name="email" id="email" required value={localData.email} 
					onChange={HandleChange} ></input>
			</div>
			<div className="input phoneInput">
				<label htmlFor="phoneNumber">Phone Number</label>
				<input type="tel" name="phone" id="phoneNumber" required value={localData.phone} 
					onChange={HandleChange} ></input>
			</div>

			<div className="buttons">
				<Button name="Edit" className='button' onClick={HandleGeneralInfoEdit}/>
				<Button type="submit" name="Submit" className='button' />
			</div>
			
		</form>
	)
}

export default GeneralForm