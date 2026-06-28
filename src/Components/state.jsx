import { useState } from 'react';
import '../Styles/state-styles.css'
import CVDisplay from './CV-display.jsx';
import GeneralForm from './general-info-form.jsx';
import EducationForm from './educational-info-form.jsx';
import ExperienceForm from './experience-info-form.jsx';

function State () {
	const [formData, setFormData] = useState({general: null, education: [], experience: []});
	const [formId, setFormId] = useState({gen: -1, edu: -1, exp: -1});

	return (
		<div className="entirePage">
			<div className="formContainer">
				<GeneralForm formData={formData} setFormData={setFormData} formId={formId} setFormId={setFormId} />
				<EducationForm formData={formData} setFormData={setFormData} formId={formId} setFormId={setFormId} />
				<ExperienceForm formData={formData} setFormData={setFormData} formId={formId} setFormId={setFormId} />
			</div>
			<div className="displayContainer">
				<CVDisplay id={formId} data={formData} />
			</div>
		</div>
	)
}

export default State