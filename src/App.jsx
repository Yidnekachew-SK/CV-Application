import './App.css'
import GeneralForm from './Components/general-info-form.jsx';
import EducationForm from './Components/educational-info-form.jsx';
import ExperienceForm from './Components/experience-info-form.jsx';

function App() {
  return (
    <div className="Forms"> 
      <GeneralForm />
      <EducationForm />
      <ExperienceForm />
    </div>
  )
  
}

export default App
