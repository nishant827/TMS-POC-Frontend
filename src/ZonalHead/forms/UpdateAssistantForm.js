import React,{useState,useEffect} from 'react';
const UpdateAssistantForm=props=>{
    const [assistant,setAssistant]=useState(props.currentAssistant)
    useEffect(()=>{
        setAssistant(props.currentAssistant)
    },[props])
    const handleInputChange=event=>{
        const [name,value]=event.target;
        setAssistant({...assistant,[name]:value})
    }
    return(
    <form onSubmit={event=>{
        event.preventDefault()
        props.updateAssistant(assistant.id,assistant)
    }}>
    <lable>name</lable>
    <input type="text" name="name" value={assistant.name} onChange={handleInputChange}/>
    <label>username</label>
    <input type="text" name="username" value={assistant.username} onChange={handleInputChange}/>
    <button>Update assistant</button>
    <button onClick={()=>props.setEditiing(false)} className="button  muted-button">cancel</button>
    </form>
    )
}
 export default updateAssistant;