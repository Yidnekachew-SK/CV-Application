
function noInfo () {
	return (
		<div classNameName="noInfoContainer">
			<p classNameName="noInfo">No information</p>
		</div>
	)
}

function GeneralInfoDisplay ({firstName, lastName, email, phone}) {
	let fullName = firstName + ' ' + lastName;
	return (
		<div className="generalInfo">
			<p className="fullName">{fullName}</p>
			<p className="email">{email}</p>
			<p className="phone">{phone}</p>
		</div>
	)
}

function EduactionInfoDisplay ({school, title, dateFrom, dateTo}) {
	let date = dateFrom + ' - ' + dateTo;
	return (
		<div className="educationInfo">
			<p className="schoolName">{school}</p>
			<p className="studyTitle">{title}</p>
			<p className="date">{date}</p>
		</div>
	)
}

function ExperienceInfoDisplay ({company, position, dateFrom, dateTo}) {
	let date = dateFrom + ' - ' + dateTo;
	return (
		<div className="experienceInfo">
			<p className="company">{company}</p>
			<p className="position">{position}</p>
			<p className="dateWorked">{date}</p>
		</div>
	)
}

function CVDisplay () {
	return (

	)
}