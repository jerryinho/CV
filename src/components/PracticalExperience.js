import React, { useState } from 'react';

const PracticalExperience = ({ onSubmit }) => {
  const [editMode, setEditMode] = useState(true);
  const [experience, setExperience] = useState({
    companyName: '',
    positionTitle: '',
    mainResponsibilities: '',
    dateFrom: '',
    dateUntil: '',
  });

  const handleChange = (e) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
    onSubmit(experience);
  };

  return (
    <div>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Company Name: </label>
            <input type="text" name="companyName" value={experience.companyName} onChange={handleChange} />
          </div>
          <div>
            <label>Position Title: </label>
            <input type="text" name="positionTitle" value={experience.positionTitle} onChange={handleChange} />
          </div>
          <div>
            <label>Main Responsibilities: </label>
            <textarea name="mainResponsibilities" value={experience.mainResponsibilities} onChange={handleChange} />
          </div>
          <div>
            <label>Date From: </label>
            <input type="date" name="dateFrom" value={experience.dateFrom} onChange={handleChange} />
          </div>
          <div>
            <label>Date Until: </label>
            <input type="date" name="dateUntil" value={experience.dateUntil} onChange={handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Company Name: {experience.companyName}</p>
          <p>Position Title: {experience.positionTitle}</p>
          <p>Main Responsibilities: {experience.mainResponsibilities}</p>
          <p>Date From: {experience.dateFrom}</p>
          <p>Date Until: {experience.dateUntil}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default PracticalExperience;
