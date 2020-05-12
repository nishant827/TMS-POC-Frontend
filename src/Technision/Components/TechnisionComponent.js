import React, { useState, Fragment } from 'react';
import AddAssistantForm from '../forms/AddTechnisionForm';
import UpdateAssistantForm from '../forms/UpdateTechnisionForm';
import AssistantTableForm from '../forms/ViewTechnisionForm';
const ZonalHeadOperations = () => {
    //Data
    const AssistantData = [
        { id: 1, name: 'satish', username: "satish01",location:"hyderabad" }
        , { id: 2, name: 'ramesh', username: "ramesh01",location:"chennai" },
        { id: 3, name: 'manish', username: "manish01",location:"pune" }
    ];
    const initialFormState = { id: null, name: "", username: '',location:"" };
    //setting State
    const [assistants, setAssistants] = useState(AssistantData);
    const [currentAssistant, setCurrentAssistant] = useState(initialFormState);
    const [editing, setEditing] = useState(false);
    //crud operations
    const addAssistant = assistant => {
        assistant.id = assistants.length + 1;
        setAssistants([...assistants, assistant])
    }
    const deleteAssistant = id => {
        setEditing(false)
        setAssistants(assistants.filter(assistant => assistant.id !== id))
    }
    const updateAssistant = (id, updateAssistant) => {
        setEditing(false)
        setAssistants(assistants.map(assistant => (assistant.id === id ? updateAssistant : assistant)))
    }
    const setEdit=()=>{
        console.log("setEdit is calling");
        setEditing(false)
    }
    const editRow = assistant => {
        setEditing(true);
        setCurrentAssistant({ id: assistant.id, name: assistant.name, username: assistant.username,location:assistant.location })
    }
    return (
        <div className="container">
            {/* <h1>ZonalHeadOperations</h1> */}
            <div className="flex-row">
                <div >
                    {editing ? (<Fragment>
                    
                    <h3 className="large text-primary">Update technician</h3>
                        <UpdateAssistantForm
                            editing={editing}
                            setEdit={setEdit}
                            currentAssistant={currentAssistant}
                            updateAssistant={updateAssistant} />


                    </Fragment>) : (<Fragment>
                        <h3 className="large text-primary">Add technician</h3>
                        <AddAssistantForm addAssistant={addAssistant} />
                    </Fragment>)}
                </div>
                <div className="flex-large">
                <h3 className="large text-primary">View technicians</h3>
                 
                    <AssistantTableForm
                        assistants={assistants}
                        editRow={editRow}
                        deleteAssistant={deleteAssistant} />
                </div>
            </div>
        </div>
    )
}
export default ZonalHeadOperations;