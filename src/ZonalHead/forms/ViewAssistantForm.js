import React from 'react';
const AssistantTable = props => (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {props.assistants.length > 0 ? (
        props.assistants.map(assistant => (
          <tr key={assistant.id}>
            <td>{assistant.name}</td>
            <td>{assistant.username}</td>
            <td>
              <button
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
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No assistants</td>
        </tr>
      )}
        </tbody>
    </table>
)
export default AssistantTable;