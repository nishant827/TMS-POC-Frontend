import React from 'react';
// const AssistantTable = props => (
//     <table>
//         <thead>
//             <tr>
//                 <th>Name</th>
//                 <th>Username</th>
//                 <th>location</th>
//                 <th>Action</th>
//             </tr>
//         </thead>
//         <tbody>
//         {props.assistants.length > 0 ? (
//         props.assistants.map(assistant => (
//           <tr key={assistant.id}>
//             <td>{assistant.name}</td>
//             <td>{assistant.username}</td>
//         <td>{assistant.location}</td>
//             <td>
//               <button
//                 onClick={() => {
//                   props.editRow(assistant)
//                 }}
//                 classNameName="button muted-button"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => props.deleteAssistant(assistant.id)}
//                 classNameName="button muted-button"
//               >
//                 Delete
//               </button>
//             </td>
//           </tr>
//         ))
//       ) : (
//         <tr>
//           <td colSpan={3}>No technicians</td>
//         </tr>
//       )}
//         </tbody>
//     </table>
// )
const AssistantTable=props=>(
  <div className="table" id="results">
  
  <div className='theader' style={{"color":"#007bff"}}>
    <div className='table_header'>Name</div>
    <div className='table_header'>Username</div>
    <div className='table_header'>Location</div>
    <div className='table_header'>Action</div>
  </div>
  {props.assistants.length > 0 ? (props.assistants.map(assistant=>(
 <div className='table_row' key={assistant.id}>
 <div className='table_small'>
   <div className='table_cell'>Header One</div>
   <div className='table_cell'>{assistant.name}</div>
 </div>
 <div className='table_small'>
   <div className='table_cell'>Header Two</div>
   <div className='table_cell'>{assistant.username}</div>
 </div>
 <div className='table_small'>
   <div className='table_cell'>Header Three</div>
   <div className='table_cell'>{assistant.location}</div>
 </div>
 <div className='table_small'>
   <div className='table_cell'>Header Four</div>
   <div className='table_cell'>            <button
                onClick={() => {
                  props.editRow(assistant)
                }}
                className="button muted-button"
              >
                Edit
              </button>
                          <button
                onClick={() => props.deleteAssistant(assistant.id)}
                className="button muted-button"
              >
                Delete
              </button>
              </div>
 </div>
</div>
  ))):(
    <div className="table" id="results">
      <div className='table_row'>
  <div className='table_small'>
  <div className='table_cell'>Header Two</div>
  <div className='table_cell'>No technicians</div>
  </div>
  </div>
</div>)}
 
  </div>
)
export default AssistantTable;