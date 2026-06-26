import '../Styles/form-styles.css';
import Button from './button.jsx';

function HandleSubmit () {

}

function EducationForm () {
	return (
		<form className="form educationalForm">
			<p className="formLabel">Educational Experience Form</p>
			<div className="input">
				<label htmlFor="schoolName">School Name</label>
				<input type="text" name="school" id="schoolName" required></input>
			</div>
			<div className="input">
				<label htmlFor="lastName">Title of Study</label>
				<input type="text" name="lName" id="lastName" required></input>
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
				<Button name="Edit" className='button' onClick={HandleSubmit} />
				<Button name="Submit" className='button' onClick={HandleSubmit} />
			</div>
			
		</form>
	)
}

export default EducationForm