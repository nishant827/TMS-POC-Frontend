import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import "./todo.css";

/*const AddItemForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    );
  }
*/
function AddItemForm({ addItem }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addItem(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}


const Item = ({ item }) => <div className="todo" >{item.itemName} </div>;
const AddItemPage = () => {
  const [formData, setFormData] = useState([{
      id: 1,
      itemName: "Receiver",
    },
    {
      id:2,
      itemName: "Transmitter", 
    },
    {
      id:3,
      itemName: "Battery",
    }
  ]);
  
  const addItem = itemName => {
    const newItems = [...formData, { itemName }];
    setFormData(newItems);
  };

  const removeItem = index => {
    const newItems = [...formData];
    newItems.splice(index, 1);
    setFormData(newItems);
  };
  return (
    <Fragment>
      <h1 className="large text-primary">Add Item</h1> 
      <div className="todo-list" > 
      {formData.map((item, index) => (
        <Item
          key={index}
          index={index}
          item={item}
        />
      ))}
      <AddItemForm addItem={addItem } />
      </div>
    </Fragment>
  );
};

export default AddItemPage;