function Button({ type = "button", name, className, onClick=null }) {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
    >
      {name}
    </button>
  );
};


function selectEditSection(data, type, setId, setShowSelect, setData, setIsEdited) {
  return (
    <div className="selectSection">
      <h2>Click the entry you want to edit</h2>
      {type === "edu" ? 
          data.education.map((d, index) => (
            <div className="editSection eduSection" key={`edu-${index}`} onClick={() => {
                setId(prev => ({ ...prev, edu: index }));
                setShowSelect(false);
                setData(data.education[index]);
              }} >
              <p>{`school: ${d.schoolName}`}</p>
              <p>{`Study Title: ${d.studyTitle}`}</p>
              <p>{`Date From: ${d.dateFrom}`}</p>
              <p>{`Date To: ${d.dateTo}`}</p>
            </div>
          ))
        : data.experience.map((d, index) => (
            <div className="editSection expSection" key={`exp-${index}`} onClick={() => {
                setId(prev => ({ ...prev, exp: index }));
                setShowSelect(false);
                setData(data.experience[index]);
              }} >
              <p>{`Company: ${d.company}`}</p>
              <p>{`Position: ${d.psoition}`}</p>
              <p>{`Responsibility: ${d.job}`}</p>
              <p>{`Date From: ${d.dateFrom}`}</p>
              <p>{`Date To: ${d.dateTo}`}</p>
            </div>
          ))}
    </div>
  );
}


export { Button, selectEditSection };