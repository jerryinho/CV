import React, { useState } from 'react';

const PracticalExperience = ({ onSubmit }) => {
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState({
    companyName: '',
    positionTitle: '',
    mainResponsibilities: '',
    dateFrom: '',
    dateUntil: '',
  });
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setNewJob({ ...newJob, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Date validation
    if (!isValidDateRange(newJob.dateFrom, newJob.dateUntil)) {
      alert('Date Until cannot be before Date From');
      return;
    }

    // Add new job to jobs array
    setJobs([...jobs, newJob]);

    // Clear the form for the next entry
    setNewJob({
      companyName: '',
      positionTitle: '',
      mainResponsibilities: '',
      dateFrom: '',
      dateUntil: '',
    });
  };

  const isValidDateRange = (dateFrom, dateUntil) => {
    return new Date(dateUntil) >= new Date(dateFrom);
  };

  const handleEdit = (index) => {
    const jobToEdit = jobs[index];
    setNewJob({
      companyName: jobToEdit.companyName,
      positionTitle: jobToEdit.positionTitle,
      mainResponsibilities: jobToEdit.mainResponsibilities,
      dateFrom: jobToEdit.dateFrom,
      dateUntil: jobToEdit.dateUntil,
    });
    // Remove the job from the list to be edited
    setJobs(jobs.filter((job, idx) => idx !== index));

    setEditMode(true);
  };

  const handleDelete = (index) => {
    const updatedJobs = [...jobs];
    updatedJobs.splice(index, 1);
    setJobs(updatedJobs);
  };

  const handleCancel = () => {
    setNewJob({
      companyName: '',
      positionTitle: '',
      mainResponsibilities: '',
      dateFrom: '',
      dateUntil: '',
    })

    setEditMode(false);
  }

  return (
    <div className="section-container">
      <h2>Practical Experience</h2>
      <div className="scrollable-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Company Name: </label>
            <input type="text" name="companyName" value={newJob.companyName} onChange={handleChange} className="input-field" />
          </div>
          <div className="form-group">
            <label>Position Title: </label>
            <input type="text" name="positionTitle" value={newJob.positionTitle} onChange={handleChange} className="input-field" />
          </div>
          <div className="form-group">
            <label>Main Responsibilities: </label>
            <textarea name="mainResponsibilities" value={newJob.mainResponsibilities} onChange={handleChange} className="input-field" />
          </div>
          <div className="form-group">
            <label>Date From: </label>
            <input type="date" name="dateFrom" value={newJob.dateFrom} onChange={handleChange} className="input-field" />
          </div>
          <div className="form-group">
            <label>Date Until: </label>
            <input type="date" name="dateUntil" value={newJob.dateUntil} onChange={handleChange} className="input-field" />
          </div>
          {editMode ? (
            <div>
              <button type="submit" className="submit-button">Update Job</button>
              <button type = "button" onClick = {handleCancel}>Cancel</button>
            </div>
          ): (
            <button type="submit" className="submit-button">Add Job</button>

          )}

        </form>

        {jobs.length > 0 && (
          <div>
            <h3>Previous Jobs:</h3>
            {jobs.map((job, index) => (
              <div key={index} className="job-entry">
                <p><strong>Company Name:</strong> {job.companyName}</p>
                <p><strong>Position Title:</strong> {job.positionTitle}</p>
                <p><strong>Main Responsibilities:</strong> {job.mainResponsibilities}</p>
                <p><strong>Date From:</strong> {job.dateFrom}</p>
                <p><strong>Date Until:</strong> {job.dateUntil}</p>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)} className='delete-button'>Delete</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticalExperience;

