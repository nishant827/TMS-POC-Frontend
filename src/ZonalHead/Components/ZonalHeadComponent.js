import React, { useState, Fragment } from 'react';
import AddAssistantForm from '../forms/AddAssistantForm';
import UpdateAssistantForm from '../forms/UpdateAssistantForm';
import AssistantTableForm from '../forms/ViewAssistantForm';
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
                        <h2>
                            Update technician
                    </h2>
                        <UpdateAssistantForm
                            editing={editing}
                            setEdit={setEdit}
                            currentAssistant={currentAssistant}
                            updateAssistant={updateAssistant} />


                    </Fragment>) : (<Fragment>
                        <h2>Add technician</h2>
                        <AddAssistantForm addAssistant={addAssistant} />
                    </Fragment>)}
                </div>
                <div className="flex-large">
                    <h2>
                        View technicians
                 </h2>
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