import React, { useState, useEffect } from 'react';
const UpdateAssistantForm = props => {
    console.log("UpdateAssistantForm",props);
    const [assistant, setAssistant] = useState(props.currentAssistant)
    useEffect(() => {
        setAssistant(props.currentAssistant)
    }, [props])
    const handleNameInputChange = name => {
        // event.preventDefault();
        // console.log("@@@handleInputChange@@@",event);
        // const [name, value] = event;
        setAssistant({ ...assistant, name:name  })
    }
    const handleUsernameInputChange=username=>{
        setAssistant({...assistant,username:username})
    }
    const handleLocationInputChange=loc=>{
      setAssistant({...assistant,location:loc})
    }
    return (
        <form onSubmit={event => {
            event.preventDefault()
            props.updateAssistant(assistant.id, assistant)
        }}>
            <label>name</label>
            {/* <input type="text" name="name" value={assistant.name} onChange={handleInputChange} /> */}
            <input type="text" name="name" defaultValue={assistant.name} onChange={event => handleNameInputChange(event.target.value)}/>
            <label>username</label>
            <input type="text" name="username" defaultValue={assistant.username} onChange={event=>handleUsernameInputChange(event.target.value)} />
            <label>location</label>
            <input type="text" name="location" defaultValue={assistant.location} onChange={event=>handleLocationInputChange(event.target.value)} />
            <button>Update technician</button>
            <button onClick={() => props.setEdit()} className="button  muted-button">cancel</button>
        </form>
    )
}
export default UpdateAssistantForm;