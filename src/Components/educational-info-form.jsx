import { useState } from 'react';
import '../Styles/form-styles.css';
import { Button, selectEditSection } from './button.jsx';

function EducationForm ({formData, setFormData, formId, setFormId}) {
	const [localEduData, setLocalEduData] = useState({ schoolName: "", studyTitle: "",  
		dateFrom: "", dateTo: "" });
	const [showSelect, setShowSelect] = useState(false);

	const HandleEducationInfoSubmit = (event) => {
		event.preventDefault();

		if (event.currentTarget.checkValidity()) {
			const submitData = new FormData(event.currentTarget);

			let schoolName = submitData.get('schoolName');
			let studyTitle = submitData.get('studyTitle');
			let dateFrom = submitData.get('dateFrom');
			let dateTo = submitData.get('dateTo');
			let submittedData = {schoolName, studyTitle, dateFrom, dateTo};

			setFormData(prev => ({ ...prev, education: [...prev.education, submittedData] }));
			setLocalEduData({ schoolName: "", studyTitle: "", dateFrom: "", dateTo: "" });
			event.currentTarget.reset();
		}
	}

	const HandleEducationInfoEdit = () => {
		setShowSelect(true)
	};

	const HandleChange = (e) => {
	    const { name, value } = e.target;
	    setLocalEduData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<>
		<form className="form educationalForm" onSubmit={HandleEducationInfoSubmit} >
			<p className="formLabel">Educational Experience Form</p>
			<div className="input">
				<label htmlFor="school">School Name</label>
				<input type="text" name="schoolName" id="school" required value={localEduData.schoolName}
					onChange={HandleChange} ></input>
			</div>
			<div className="input">
				<label htmlFor="lastName">Title of Study</label>
				<input type="text" name="studyTitle" id="title" required value={localEduData.studyTitle}
					onChange={HandleChange} ></input>
			</div>
			<div className="input">
				<label htmlFor="from">From</label>
				<input type="date" name="dateFrom" id="from" required value={localEduData.dateFrom}
					onChange={HandleChange} ></input>
			</div>
			<div className="input">
				<label htmlFor="to">TO</label> <br></br>
				<input type="date" name="dateTo" id="to" required value={localEduData.dateTo}
					onChange={HandleChange} ></input>
			</div>

			<div className="buttons">
				<Button name="Edit" className='button' onClick={HandleEducationInfoEdit} />
				<Button type="submit" name="Submit" className='button' />
			</div>
			
		</form>

		{showSelect && (
		  <div className="selectSectionOverlay">
		    {selectEditSection(formData, "edu", setFormId, setShowSelect, setLocalEduData)}
		  </div>
		)}

		</>
	)
}

export default EducationForm