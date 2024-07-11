import React, { useState } from 'react';

const GeneralInfo = ({onSubmit}) => {
    const [editMode, setEditMode] = useState (true);
    const [info, setInfo] = useState ({
        name: '',
        email: '',
        phone: '',
    })

    const handleChange = (e) => {
        setInfo ({...info, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditMode(false);
        onSubmit(info);
    }

    return (
        <div>
            {editMode ? (
                <form onSubmit = {handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input type = "text" name = "name" value = {info.name} onChange = {handleChange}/>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" name = "email" value = {info.email} onChange = {handleChange}/>
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input type="text" name="phone" value= {info.phone} onChange= {handleChange}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div>
                    <p>Name: {info.name}</p>
                    <p>Email: {info.email}</p>
                    <p>Phone: {info.phone}</p>
                    <button onClick={() => setEditMode(true)}>Edit</button>
                </div>

            )}
        </div>
    )


}

export default GeneralInfo;