import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import PracticalExperience from './components/PracticalExperience';
import './styles/App.css';

const App = () => {
  const [generalInfo, setGeneralInfo] = useState({});
  const [education, setEducation] = useState({});
  const [experience, setExperience] = useState({});

  return (
    <div className='App'>
      <h1>CV Application</h1>
      <GeneralInfo onSubmit={(data) => setGeneralInfo(data)}/>
      <Education onSubmit ={(data) => setEducation(data)}/>
      <PracticalExperience onSubmit={(data) => setExperience(data)}/>
    </div>
  )
}

export default App;