import { Button } from './button.jsx';
import '../Styles/form-styles.css';

function GeneralForm ({setFormData, setFormId}) {
	const HandleGeneralInfoSubmit = (event) => {
		event.preventDefault();

		if (event.currentTarget.checkValidity()) {
			const formData = new FormData(event.currentTarget);

			let firstName = formData.get('fName');
			let lastName = formData.get('lName');
			let email = formData.get('email');
			let phone = formData.get('phone');
			let submittedData = {firstName, lastName, email, phone};
			console.log('submittedData.............................')
			console.log(submittedData)

			setFormData(prev => ({ ...prev, general: submittedData }));
			setFormId(prev => ({...prev, gen: 0}));
			event.currentTarget.reset();
		}
	};

	return (
		<form className="form generalForm" onSubmit={HandleGeneralInfoSubmit}>
			<p className="formLabel">General Information Form</p>
			<div className="input firstNameInput">
				<label htmlFor="firstName">First Name</label>
				<input type="text" name="fName" id="firstName" required></input>
			</div>
			<div className="input lastNameInput">
				<label htmlFor="lastName">Last Name</label>
				<input type="text" name="lName" id="lastName" required></input>
			</div>
			<div className="input emailInput">
				<label htmlFor="email">Email</label>
				<input type="email" name="email" id="email" required></input>
			</div>
			<div className="input phoneInput">
				<label htmlFor="phoneNumber">Phone Number</label>
				<input type="tel" name="phone" id="phoneNumber" required></input>
			</div>

			<div className="buttons">
				<Button name="Edit" className='button' />
				<Button type="submit" name="Submit" className='button' />
			</div>
			
		</form>
	)
}

export default GeneralForm