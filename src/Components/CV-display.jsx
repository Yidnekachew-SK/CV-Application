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
			<p className="fullName">{`I am ${fullName}`}</p>
			<p className="email">{email}</p>
			<p className="phone">{phone}</p>
		</div>
	)
}

function EducationInfoDisplay ({data}) {
	let {schoolName, studyTitle, dateFrom, dateTo} = data;
	let date = dateFrom + ' - ' + dateTo;
	return (
		<div className="eduEntryContainer">
			<div className="institutionInfo">
				<p className="schoolName">{`${schoolName}`}</p>
				<p className="studyTitle">{studyTitle}</p>
			</div>
			<p className="date">{date}</p>
		</div>
	)
}

function ExperienceInfoDisplay ({data}) {
	let {company, position, job, dateFrom, dateTo} = data;
	let date = dateFrom + ' - ' + dateTo;
	return (
		<div className="expEntryContainer">
			<div className="">
				<p className="company">{`At: ${company}`}</p>
				<p className="position">{`${position}`}</p>
				<p className="job">{job}</p>
			</div>
			<p className="dateWorked">{date}</p>
		</div>
	)
}

function CVDisplay ({id, data}) {
	return (
		<div className="dataDisplayer">
			<div className="generalInfo">
				{data.general ? (
					<GeneralInfoDisplay data={data.general} /> 
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