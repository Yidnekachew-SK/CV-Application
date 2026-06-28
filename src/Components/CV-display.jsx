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
		<div>
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
		<div>
			<p className="schoolName">{schoolName}</p>
			<p className="studyTitle">{studyTitle}</p>
			<p className="date">{date}</p>
		</div>
	)
}

function ExperienceInfoDisplay ({data}) {
	let {companyName, position, responsibility, dateFrom, dateUpTo} = data;
	console.log({companyName, position, responsibility, dateFrom, dateUpTo})
	let date = dateFrom + ' - ' + dateUpTo;
	return (
		<div>
			<p className="company">{companyName}</p>
			<p className="position">{position}</p>
			<p className="dateWorked">{responsibility}</p>
			<p className="dateWorked">{date}</p>
		</div>
	)
}

function CVDisplay ({id, data}) {
	return (
		<div className="dataDisplayer">
			<div className="generalInfo">
				{data.general ? (
					<>
						<h2> General Information </h2>
						<GeneralInfoDisplay data={data.general} /> 
					</>
        		)	: <NoInformation/>
        		}
			</div>
			
			<div className="educationInfo">
         		{data.education.length > 0 ? (
         			<>
         				<h2> Educational Experience </h2>
         	    		{data.education.map((edu, index) => (
         	       			<EducationInfoDisplay key={`edu-${index}`} data={edu} /> ))}
         	    	</>
         		) : (
         	   		<NoInformation />
         		)}
         	</div>
      		
      		<div className="experienceInfo">
      			{data.experience.length > 0 ? (
      				<>
      					<h2> Career Experience </h2>
      		    		{data.experience.map((exp, index) => (
      		       			<ExperienceInfoDisplay key={`exp-${index}`} data={exp} /> ))}
      		    	</>
      			) : ( 
      		    	<NoInformation />
      		    )}
      		</div>
        </div>
	);
}

export default CVDisplay