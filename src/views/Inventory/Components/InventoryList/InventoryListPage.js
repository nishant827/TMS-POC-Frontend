import React, { Fragment, useState,useEffect } from "react";
// import { Badge, CardHeader, Pagination, PaginationItem, PaginationLink, Table ,Modal, ModalHeader, ModalBody, ModalFooter, Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
// const token=localStorage.getItem('token');
const InventoryListPage = (props) => {
  const userData = useSelector((state) => state.loggedUser);
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  // const token = userData.user.token;

  
  

  //Intialize state
  const [Data, setData] = useState([]);
  const [SearchResult, setSearchResult] = useState(false);
  const dummydata = [{
    img:"antenna.jpg",
    name: "Antenna"
    },
    {
      img:"receiver.jpg",
      name: "Receiver"
    },
    {
      img:"antenna.jpg",
      name: "Antenna"},
    {
      img:"receiver.jpg",
      name: "Receiver"
    }];
  
  
  //get data from api and assign to state
  const GetData = async () => {  
    const result = await axios('http://localhost:3030/api/task/list',{ headers: {"Authorization" : `${token}`} }); 
    console.log("taskLaist",result);
    setData(result.data.data);  
  };  
  useEffect(() => {  
    GetData();  
  }, []); 
  //delete Item 
    const deleteItem = (id) => {  
        axios.delete('http://localhost:3030/api/task/remove/' + id,{ headers: {"Authorization" : `${token}`} })  
        .then((result) => {  
            GetData()
            props.history.push('/InventoryListPage')  ;
        });  
    };
    
    const addItem =(id) => {
        axios.post()
        .then((result) => {

        })
    };
    const searchData = async (searchVal) => {
     // setLoading(true);
      axios
        .get(`http://localhost:3030/api/user/search?searchedText=${searchVal}&limit=5&offset=0`, { headers: { "Authorization": `${token}` } })
        .then(res => {
          //setData(res.data.data);
          setSearchResult(true);
        })
        .catch(err => {
          console.log(err);
        });
      }      
  
  return (
    <Fragment>
       
<div className="container">
    <input
      type="text"
      placeholder="Search Items"
      onChange={e => searchData(e.target.value)}
    />
    {SearchResult ?
      <div className="card-deck">
        { dummydata.map((card) =>(
          <div className="card">
            <div className="card-body text-center">
              <img
                className="card-img-top"
                src={ require("../../../../assets/img/brand/"+card.img)}
                alt="item image"
              />
              <h4 className="card-title">{card.name}</h4>
              <p className="card-text">Antenna for long range communication.</p>
              <a href="#" className="btn btn-primary">Add To List</a>
            </div>
          </div>
        ))}
      </div>
      : "" }
      <br/>
      {SearchResult ?
      <div className="card-deck">
        { dummydata.map((card) =>( 
          <div className="card">
            <div className="card-body text-center">
              <img
                className="card-img-top"
                src={ require("../../../../assets/img/brand/"+card.img)}
                alt="item image"
              />
              <h4 className="card-title">{card.name}</h4>
              <p className="card-text">Antenna for long range communication.</p>
              <a href="#" className="btn btn-primary">Add To List</a>
            </div>
          </div>
        ))}
      </div> : "" }
      <br/>
    </div>
  </Fragment>
  );
};

export default InventoryListPage;