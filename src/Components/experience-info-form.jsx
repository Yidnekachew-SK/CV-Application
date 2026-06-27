import Button from './button.jsx';
import '../Styles/form-styles.css';

function HandleSubmit () {

}

function ExperienceForm ({setFormData, setFormId}) {
	const HandleExperienceInfoSubmit = (event) => {
		event.preventDefault();

		if (event.currentTarget.checkValidity()) {
			const formData = new FormData(event.currentTarget);

			let CompanyName = formData.get('company');
			let position = formData.get('positionTitle');
			let responsibility = formData.get('job');
			let dateFrom = formData.get('dateFrom');
			let dateUpTo = formData.get('dateTo')
			let submittedData = {CompanyName, position, responsibility, dateFrom, dateUpTo}

			setFormData(prev => ({ ...prev, experience: submittedData }));
			setFormId(2);
			event.currentTarget.reset();
		}
	}

	return (
		<form className="form experienceForm" onSubmit={HandleExperienceInfoSubmit} >
			<p className="formLabel">Practical Experience Form</p>
			<div className="input">
				<label htmlFor="companyName">Company Name</label>
				<input type="text" name="company" id="companyName" required></input>
			</div>
			<div className="input">
				<label htmlFor="title">Position Title</label>
				<input type="text" name="positionTitle" id="title" required></input>
			</div>
			<div className="input">
				<label htmlFor="responsibility">Main responsibilities</label>
				<input type="textbox" name="job" id="responsibility" required></input>
			</div>
			<div className="input phoneInput">
				<label htmlFor="from">From</label>
				<input type="date" name="datefrom" id="from" required></input>
			</div>
			<div className="input phoneInput">
				<label htmlFor="to">TO</label>
				<input type="date" name="dateTo" id="to" required></input>
			</div>

			<div className="buttons">
				<Button name="Edit" className='button' />
				<Button name="Submit" className='button' />
			</div>
			
		</form>
	)
}

export default ExperienceForm