import React, { useState } from 'react';

const Education = ({ educationList, onSubmit, onEdit, onDelete }) => {
  const [educations, setEducations] = useState(educationList || []);
  const [newEducation, setNewEducation] = useState({
    schoolName: '',
    studyTitle: '',
    studyDate: '',
  });

  const [editMode, setEditMode] = useState(true);

  const handleChange = (e) => {
    setNewEducation({ ...newEducation, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new education to educations array
    setEducations([...educations, newEducation]);

    // Clear the form for the next entry
    setNewEducation({
      schoolName: '',
      studyTitle: '',
      studyDate: '',
    });
  };

  const handleDelete = (index) => {
    const updatedEducations = [...educations];
    updatedEducations.splice(index,1);
    setEducations(updatedEducations)
  }
  
  const handleCancel = () => {
    setNewEducation({
      schoolName:'',
      studyTitle:'',
      studyDate:'',
    })
  }

  return (
    <div className="section-container">
      <h2>Educational Experience</h2>
      <div className="scrollable-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>School Name: </label>
            <input type="text" name="schoolName" value={newEducation.schoolName} onChange={handleChange} className="input-field" />
          </div>
          <div className="form-group">
            <label>Study Title: </label>
            <input type="text" name="studyTitle" value={newEducation.studyTitle} onChange={handleChange} className="input-field" />
          </div>
          <div className="form-group">
            <label>Date of Study: </label>
            <input type="date" name="studyDate" value={newEducation.studyDate} onChange={handleChange} className="input-field" />
          </div>
          <button type="submit" className="submit-button">Add Education</button>
          <button type= 'button' onClick={handleCancel} className = "cancel-button">Cancel</button>
        </form>

        {educations.length > 0 && (
          <div>
            <h3>Previous Educations:</h3>
            {educations.map((education, index) => (
              <div key={index} className="education-entry">
                <p><strong>School Name:</strong> {education.schoolName}</p>
                <p><strong>Study Title:</strong> {education.studyTitle}</p>
                <p><strong>Date of Study:</strong> {education.studyDate}</p>
                <button onClick={() => handleDelete(index)} className='delete-button'>Delete</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Education;
