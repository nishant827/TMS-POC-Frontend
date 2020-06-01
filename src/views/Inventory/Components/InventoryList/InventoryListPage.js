import React, { Fragment, useState,useEffect } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Badge, CardHeader, Pagination, PaginationItem, PaginationLink, Table ,Modal, ModalHeader, ModalBody, ModalFooter, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { Button } from "reactstrap";
// const token=localStorage.getItem('token');
const InventoryListPage = (props) => {
  const userData = useSelector((state) => state.loggedUser);
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  // const token = userData.user.token;

  
  

  //Intialize state
  const [Data, setData] = useState([]);
  const [SearchResult, setSearchResult] = useState(false);
  const [categeory, setCategeory] = useState('')
  
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
    },{
      img:"antenna.jpg",
      name: "Antenna"
      },
      {
        img:"receiver.jpg",
        name: "Receiver"
      },
      {
        img:"antenna.jpg",
        name: "Resistor"},
      {
        img:"receiver.jpg",
        name: "Inductor"
      }];

  // pagination
  const [currentPage, setCurrentPage] = useState({ currentPage: 0 })
  const pageSize = 4;
  const pagesCount = Math.ceil(dummydata.length / pageSize);

  const handleClick = (e, index) => {
    console.log("handle click is calling here", JSON.stringify(index));
    e.preventDefault();

    setCurrentPage({
      currentPage: index
    });

  }

  //get data from api and assign to state
  const GetData = async () => {  
    const result = await axios('http://localhost:3030/api/task/list',{ headers: {"Authorization" : `${token}`} }); 
    console.log("taskLaist",result);
    setData(result.data.data);  
  };  
  useEffect(() => {  
    // GetData();  
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
     setSearchResult(true);
      // axios
      //   .get(`http://localhost:3030/api/user/search?searchedText=${searchVal}&limit=5&offset=0`, { headers: { "Authorization": `${token}` } })
      //   .then(res => {
      //     //setData(res.data.data);
      //     setSearchResult(true);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
      }    
  
      const options = ["communication", "Networking"];
      // const defaultOption = options[0];
      const _onSelect = (e) => {
        setCategeory(e.value)
      };
  
  return (
    <Fragment>
      <div className="container">
        <Dropdown
          className="m-2"
          options={options}
          onChange={(e) => _onSelect(e)}
          // value={defaultOption}
          placeholder="Select Category"
        />
        <input
          type="text"
          placeholder="Search Items"
          onChange={(e) => searchData(e.target.value)}
        />
        <button className="btn btn-primary ml-2">Search</button>

        {SearchResult ? (
          <div className="card-deck">
            {/* {dummydata.map((card, idx) => (
              <div className="card" key={idx}>
                <div className="card-body text-center">
                  <img
                    className="card-img-top"
                    src={require("../../../../assets/img/brand/" + card.img)}
                    alt="item image"
                  />
                  <h4 className="card-title">{card.name}</h4>
                  <p className="card-text">
                    Antenna for long range communication.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Add To List
                  </a>
                </div>
              </div>
            ))} */}

            {

              dummydata.slice(currentPage.currentPage * pageSize,
                (currentPage.currentPage + 1) * pageSize).map((card, idx) => {

                  return (
                    <div className="card">
                      <div className="card-body text-center">
                        <img
                          className="card-img-top"
                          src={require("../../../../assets/img/brand/" + card.img)}
                          alt="item image"
                        />
                        <h4 className="card-title">{card.name}</h4>
                        <p className="card-text">
                          Antenna for long range communication.
    </p>
                        <a href="#" className="btn btn-primary">
                          Add To List
    </a>
                      </div>
                    </div>
                  )

                })}
          </div>
        ) : (
          ""
        )}
        <br />
        {/* {SearchResult ? (
          <div className="card-deck">
            {dummydata.map((card) => (
              <div className="card">
                <div className="card-body text-center">
                  <img
                    className="card-img-top"
                    src={require("../../../../assets/img/brand/" + card.img)}
                    alt="item image"
                  />
                  <h4 className="card-title">{card.name}</h4>
                  <p className="card-text">
                    Antenna for long range communication.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Add To List
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )} */}
        <br />
      </div>

      {SearchResult && <Pagination aria-label="Page navigation example">
        <PaginationItem disabled={currentPage.currentPage <= 0}>
          <PaginationLink
            onClick={(e) => handleClick(e, currentPage.currentPage - 1)}
            previous
            href="#"
          />
        </PaginationItem>

        {[...Array(pagesCount)].map((page, i) => (
          <PaginationItem active={i === currentPage.currentPage} key={i}>
            <PaginationLink onClick={(e) => handleClick(e, i)} href="#">
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem disabled={currentPage.currentPage >= pagesCount - 1}>
          <PaginationLink
            onClick={(e) => handleClick(e, currentPage.currentPage + 1)}
            next
            href="#"
          />
        </PaginationItem>
      </Pagination>
      }
    </Fragment>
  );
};

export default InventoryListPage;