import React from 'react'  
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react'  
function UserList(props) {  

  const [data, setData] = useState([]);  
  const token=localStorage.getItem('token');
  
  const GetData = async () => {  
     
    const result = await axios('http://localhost:3030/api/user/list',{ headers: {"Authorization" : `${token}`} }); 
    console.log("@@@@@@@@@@@@@@@@result@@@@@@@",result.data.data); 
    setData(result.data.data);  

  };  
  useEffect(() => {  

   

  

    GetData();  

  }, []);  
  const deleteUser = (id) => {  
    
        
    
        axios.delete('http://localhost:3030/api/user/remove/' + id,{ headers: {"Authorization" : `${token}`} })  
    
          .then((result) => {  
            GetData()
            props.history.push('/userlist')  ;
    
          });  
    
      };  
    
      const editUser = (id) => {  
        console.log("editUser",id);
        props.history.push({  
    
          pathname: '/editUser/' + id  
    
        });  
    
      };  
    
      
    
      return (  
    
        <div className="animated fadeIn">  
    
          <Row>  
    
            <Col>  
    
              <Card>  
    
                <CardHeader>  
    
                  <i className="fa fa-align-justify"></i> User List  
    
                  </CardHeader>  
    
                <CardBody>  
    
                  <Table hover bordered striped responsive size="sm">  
    
                    <thead>  
    
                      <tr>  
    
                        <th>Firstname</th>  
    
                        <th>Lastname</th>  
    
                        <th>Email</th>  
    
                        <th>Age</th>  
    
                        <th>Country Code</th>  
                        
                       <th>MobileNo</th>  
                      
                       <th>Gender</th>

                       <th>Role</th>
                        <th>Action</th>
                      </tr>  
    
                    </thead>  
    
                    <tbody>  
    
                      {  
    
                        data.map((item, idx) => {  
    
                          return <tr key={item._id}>  
    
                            <td>{item.firstName}</td>  
    
                            <td>{item.lastName}</td>  
    
                            <td>{item.email}</td>  

                            <td>{item.age}</td>
    
                            <td>{item.contactDetails.countryCode}</td>  
    
                            <td>{item.contactDetails.mobileNo}</td>  
    
                            <td>  
    
                              {item.Gender}  
    
                            </td>  
                        <td>{item.role}</td>
    
                            <td>  
    
                              <div className="btn-group">  
    
                                <button className="btn btn-warning" onClick={() => { editUser(item._id) }}>Edit</button>  
    
                                <button className="btn btn-warning" onClick={() => { deleteUser(item._id) }}>Delete</button>  
    
                              </div>  
    
                            </td>  
    
                          </tr>  
    
                        })}  
    
                    </tbody>  
    
                  </Table>  
                    </CardBody>  
    
              </Card>  
    
            </Col>  
    
          </Row>  
    
        </div>  
    
      )  
    
    }  
    
export default UserList ; 