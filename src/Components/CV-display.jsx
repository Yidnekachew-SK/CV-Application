import '../Styles/cv-display.css';

function NoInformation () {
	return (
		<div className="noInfoContainer">
			<p className="noInfo">No information</p>
		</div>
	)
}

function GeneralInfoDisplay ({data}) {
	let {firstName, lastName, email, phone} = data;
	let fullName = firstName + ' ' + lastName;
	return (
		<div className="generalInfo">
			<p className="fullName">{fullName}</p>
			<p className="email">{email}</p>
			<p className="phone">{phone}</p>
		</div>
	)
}

function EducationInfoDisplay ({data}) {
	let {schoolName, studyTitle, dateFrom, dateUpTo} = data;
	let date = dateFrom + ' - ' + dateUpTo;
	return (
		<div className="educationInfo">
			<p className="schoolName">{schoolName}</p>
			<p className="studyTitle">{studyTitle}</p>
			<p className="date">{date}</p>
		</div>
	)
}

function ExperienceInfoDisplay ({data}) {
	let {CompanyName, position, responsibility, dateFrom, dateUpTo} = data;
	let date = dateFrom + ' - ' + dateUpTo;
	return (
		<div className="experienceInfo">
			<p className="company">{company}</p>
			<p className="position">{position}</p>
			<p className="dateWorked">{date}</p>
		</div>
	)
}

function CVDisplay ({id, data}) {
	if (id === 0) {
		return (
			<GeneralInfoDisplay data={data.general} />
		)
	} else if (id === 1) {
		return (
			<EducationInfoDisplay data={data.education} />
		)	
	} else if (id === 2) {
		return (
			<ExperienceInfoDisplay data={data.experience} />
		)
	} else {
		return (
			<NoInformation />
		)
	}
}

export default CVDisplay