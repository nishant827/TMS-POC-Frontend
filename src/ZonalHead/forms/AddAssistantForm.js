import React, { useState } from 'react';
const AddAssistantForm = props => {
    const initialFormState = { id: null, name: "", username: "", location: "" };
    const [assistant, setAssistant] = useState(initialFormState)
    const handleInputChange = event => {
        const { name, value } = event.target;
        setAssistant({ ...assistant, [name]: value })
    }
    return (
        <form onSubmit={event => {
            console.log("@@@@@satish ameda@@@@@",assistant);
            event.preventDefault(); 
            if (!assistant.name || !assistant.username) return
            props.addAssistant(assistant)
            setAssistant(initialFormState)
        }}>
            <label>Name</label>
            <input  type="text" name="name" value={assistant.name} onChange={handleInputChange}/>
            <label> Username</label>
            <input type="text" name="username" value={assistant.username} onChange={handleInputChange}/>
            <label> Location</label>
            <input type="text" name="location" value={assistant.location} onChange={handleInputChange}/>
            <button>Add new technician</button>
        </form>)
}
export default AddAssistantForm;