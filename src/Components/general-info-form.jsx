import Button from './button.jsx';
import '../Styles/form-styles.css';

function HandleInfoSubmit () {

}

function GeneralForm () {
	return (
		<form className="form generalForm">
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
				<Button name="Edit" className='button' onClick={HandleInfoSubmit} />
				<Button name="Submit" className='button' onClick={HandleInfoSubmit} />
			</div>
			
		</form>
	)
}

export default GeneralForm