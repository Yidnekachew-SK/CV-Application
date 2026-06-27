import '../Styles/form-styles.css';
import Button from './button.jsx';

function EducationForm ({setFormData, setFormId}) {
	const HandleEducationInfoSubmit = (event) => {
		event.preventDefault();

		if (event.currentTarget.checkValidity()) {
			const formData = new FormData(event.currentTarget);

			let schoolName = formData.get('school');
			let studyTitle = formData.get('studyTitle');
			let dateFrom = formData.get('dateFrom');
			let dateUpTo = formData.get('dateTo');
			let submittedData = {schoolName, studyTitle, dateFrom, dateUpTo};

			setFormData(prev => ({ ...prev, education: submittedData }));
			setFormId(1);
			event.currentTarget.reset();
		}
	}

	return (
		<form className="form educationalForm" onSubmit={HandleEducationInfoSubmit} >
			<p className="formLabel">Educational Experience Form</p>
			<div className="input">
				<label htmlFor="schoolName">School Name</label>
				<input type="text" name="school" id="schoolName" required></input>
			</div>
			<div className="input">
				<label htmlFor="lastName">Title of Study</label>
				<input type="text" name="studyTitle" id="title" required></input>
			</div>
			<div className="input">
				<label htmlFor="from">From</label>
				<input type="date" name="dateFrom" id="from" required></input>
			</div>
			<div className="input">
				<label htmlFor="to">TO</label> <br></br>
				<input type="date" name="dateTo" id="to" required></input>
			</div>

			<div className="buttons">
				<Button name="Edit" className='button' />
				<Button type="submit" name="Submit" className='button' />
			</div>
			
		</form>
	)
}

export default EducationForm