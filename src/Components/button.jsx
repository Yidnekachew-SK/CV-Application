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


function selectEditSection(data, type, setId, setShowSelect, setData) {
  return (
    <div className="selectSection">
      {type === "edu" ? 
          data.education.map((d, index) => (
            <li key={`edu-${index}`} onClick={() => {
                setId(prev => ({ ...prev, edu: index }));
                setShowSelect(false);
                setData(data.education[index]);
              }} >
              {d.schoolName}
            </li>
          ))
        : data.experience.map((d, index) => (
            <li key={`exp-${index}`} onClick={() => {
                setId(prev => ({ ...prev, exp: index }));
                setShowSelect(false);
                setData(data.experience[index]);
              }} >
              {d.company}
            </li>
          ))}
    </div>
  );
}


export { Button, selectEditSection };