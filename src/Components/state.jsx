import { useState } from 'react';
import '../Styles/state-styles.css'
import CVDisplay from './CV-display.jsx';
import GeneralForm from './general-info-form.jsx';
import EducationForm from './educational-info-form.jsx';
import ExperienceForm from './experience-info-form.jsx';

function State () {
	const [formData, setFormData] = useState({});
	const [formId, setFormId] = useState(5);

	return (
		<div className="entirePage">
			<div className="formContainer">
				<GeneralForm setFormData={setFormData} setFormId={setFormId} />
				<EducationForm setFormData={setFormData} setFormId={setFormId} />
				<ExperienceForm setFormData={setFormData} setFormId={setFormId} />
			</div>
			<div className="displayContainer">
				<CVDisplay id={formId} data={formData} />
			</div>
		</div>
	)
}

export default State