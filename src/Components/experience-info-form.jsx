import { useState } from 'react';
import { Button, selectEditSection } from './button.jsx'
import '../Styles/form-styles.css';

function ExperienceForm ({formData, setFormData, formId, setFormId, isEdited, setIsEdited}) {
	const [localExpData, setLocalExpData] = useState({ company: "", position: "", job: "",  
		dateFrom: "", dateTo: "" });
	const [showSelect, setShowSelect] = useState(false);

	const HandleExperienceInfoSubmit = (event) => {
		event.preventDefault();

		if (event.currentTarget.checkValidity()) {
			const formData = new FormData(event.currentTarget);

			let company = formData.get('company');
			let position = formData.get('position');
			let job = formData.get('job');
			let dateFrom = formData.get('dateFrom');
			let dateTo = formData.get('dateTo')
			let submittedData = {company, position, job, dateFrom, dateTo};

			if (isEdited) {
				let id = formId.exp;
				setFormData(prev => ({ ...prev, experience: prev.experience.map((item, index) =>
      						index === id ? submittedData : item
    				)}));
				setIsEdited(false);
			} else {
				setFormData(prev => ({ ...prev, experience: [...prev.experience, submittedData] }));
			}
			
			setLocalExpData({ company: "", position: "", job: "", dateFrom: "", dateTo: "" });
			event.currentTarget.reset();
		}
	}

	const HandleExperienceInfoEdit = () => {
		setShowSelect(true);
		setIsEdited(true);
	};

	const HandleChange = (e) => {
	    const { name, value } = e.target;
	    setLocalExpData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<form className="form experienceForm" onSubmit={HandleExperienceInfoSubmit} >
			<p className="formLabel">Practical Experience Form</p>
			<div className="input">
				<label htmlFor="companyName">Company Name</label>
				<input type="text" name="company" id="companyName" required value={localExpData.company}
					onChange={HandleChange} ></input>
			</div>
			<div className="input">
				<label htmlFor="title">Position Title</label>
				<input type="text" name="position" id="title" required value={localExpData.position}
					onChange={HandleChange} ></input>
			</div>
			<div className="input">
				<label htmlFor="responsibility">Main responsibilities</label>
				<input type="textbox" name="job" id="responsibility" required value={localExpData.job}
					onChange={HandleChange} ></input>
			</div>
			<div className="input phoneInput">
				<label htmlFor="from">From</label>
				<input type="date" name="dateFrom" id="from" required value={localExpData.dateFrom}
					onChange={HandleChange} ></input>
			</div>
			<div className="input phoneInput">
				<label htmlFor="to">TO</label>
				<input type="date" name="dateTo" id="to" required value={localExpData.dateTo}
					onChange={HandleChange} ></input>
			</div>

			<div className="buttons">
				<Button name="Edit" className='button' onClick={HandleExperienceInfoEdit} />
				<Button type="submit" name="Submit" className='button' />
			</div>

			{showSelect && (
			  <div className="selectSectionOverlay">
			    {selectEditSection(formData, "exp", setFormId, setShowSelect, setLocalExpData, setIsEdited)}
			  </div>
			)}
			
		</form>
	)
}

export default ExperienceForm