import React, {useState} from 'react';

const Education = ({onSubmit}) => {
    const [editMode, setEditMode] = useState(true);
    const [education, setEducation] = useState ({
        schoolName:'',
        titleOfStudy:'',
        dateOfStudy:'',
    });

    const handleChange = (e) => {
        setEducation({...education, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditMode(false);
        onSubmit(education);
    }

    return (
        <div>
        {editMode ? (
          <form onSubmit={handleSubmit}>
            <div>
              <label>School Name: </label>
              <input type="text" name="schoolName" value={education.schoolName} onChange={handleChange} />
            </div>
            <div>
              <label>Title of Study: </label>
              <input type="text" name="titleOfStudy" value={education.titleOfStudy} onChange={handleChange} />
            </div>
            <div>
              <label>Date of Study: </label>
              <input type="text" name="dateOfStudy" value={education.dateOfStudy} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
            <p>School Name: {education.schoolName}</p>
            <p>Title of Study: {education.titleOfStudy}</p>
            <p>Date of Study: {education.dateOfStudy}</p>
            <button onClick={() => setEditMode(true)}>Edit</button>
          </div>
        )}
      </div>
    );

}

export default Education;