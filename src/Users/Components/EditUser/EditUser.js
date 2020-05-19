import React, { useState, useEffect } from 'react'  
import { useSelector } from "react-redux";

import axios from 'axios';  
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';  



function Edituser(props) {  
  const userData = useSelector((state) => state.loggedUser);
 
  const [modal, setModal] = useState(false);
  const [message,setMessage]=useState(false)
  const token = userData.user.token;
 
        console.log()
        const [user, setuser]=  useState({ firstName: '', lastName: '', email: '', password: '', age: '',  countryCode: '', mobileNo: "" , 
        Gender: "" ,role:""
        });  

        const Url = "http://localhost:3030/api/user/" + props.match.params.id;  
        const toggle = () =>  setModal(!modal);
        const redirect=()=> props.history.push('/userlist') ;
        
        // const token=localStorage.getItem('token');
        
        // const [modal, setModal] = useState(false);
        useEffect(() => {  

          const GetData = async () => {  

            const result = await axios(Url,{ headers: {"Authorization" : `${token}`} });  
            console.log("@@33333333333333333333333#########",result.data.data);
            const newObj={...result.data.data,countryCode:result.data.data.contactDetails.countryCode,mobileNo:result.data.data.contactDetails.mobileNo};
            console.log("newObj",newObj);
            setuser(newObj);  

            

          };  

        

          GetData();  

        }, []);  

        

        const Updateuser = (e) => {  

          e.preventDefault();  

          const data = {firstName:user.firstName, lastName: user.lastName,
             email: user.email, age:user.age, contactDetails: {
                countryCode: user.countryCode,
                mobileNo: user.mobileNo
            },gender: user.Gender,role: user.role};  
           console.log("#####Data#####",data);
           console.log("$$$token$$",token);
           console.log("props.match.params.id",props.match.params.id);
          
          axios.put(`http://localhost:3030/api/user/update/${props.match.params.id}`, data,{ headers: {"Authorization" : `${token}`} })  

            .then((result) => {  
              console.log("calling result@@@@@@@@@@",result);
        
              setMessage(true)
              // setModal(!modal)
              // props.history.push('/userlist')  

            }).catch((err)=>{
            
              setMessage(false)
            });  

        };  

        console.log("message",message);

        const onChange = (e) => {  

          e.persist();  

          setuser({...user, [e.target.name]: e.target.value});  

        }  

        

        return (  

                <div className="app flex-row align-items-center">  

                <Container>  

                  <Row className="justify-content-center">  

                    <Col md="12" lg="10" xl="8">  

                      <Card className="mx-4">  

                        <CardBody className="p-4">  

                          <Form onSubmit={Updateuser}>  

                            <h1>Update user</h1>  

                        

                            <InputGroup className="mb-3">  

            

                              <Input type="text" name="firstName" id="firstName" placeholder="Firstname" value={user.firstName} onChange={ onChange }  />  

                            </InputGroup>  

                             <InputGroup className="mb-3">  

            

                              <Input type="text" placeholder="LastName" name="lastName" id="lastName" value={user.lastName} onChange={ onChange }/>  

                            </InputGroup>  

                            <InputGroup className="mb-3">  

            

                              <Input type="email" placeholder="Email" name="email" id="email"  value={user.email} onChange={ onChange }  />  

                            </InputGroup>  

                            <InputGroup className="mb-4">  

            

                              <Input type="text" placeholder="Age" name="age" id="age" value={user.age} onChange={ onChange }  />  

                            </InputGroup>  

                            <InputGroup className="mb-4">  

            

                              <Input type="text" placeholder="countryCode" name="countryCode" id="countryCode" value={user.countryCode} onChange={ onChange } />  

                            </InputGroup>  

                            <InputGroup className="mb-4">   

            

                               <Input type="number" placeholder="MobileNo" name="mobileNo" id= "mobileNo" value={user.mobileNo} onChange={ onChange } />  

                            </InputGroup>   
                            <InputGroup className="mb-4">   

            

<Input type="text" placeholder="Gender" name="gender" id= "gender" value={user.Gender} onChange={ onChange } />  

</InputGroup> 
<InputGroup className="mb-4">   

            

<Input type="text" placeholder="Role" name="role" id= "role" value={user.role} onChange={ onChange } />  


</InputGroup> 
                             

                      <CardFooter className="p-4">  

                          <Row>  

                            <Col xs="12" sm="6">  

                              <Button type="submit" onClick={toggle}  className="btn btn-info mb-1" block><span>Save</span></Button>  

                            </Col>  

                            <Col xs="12" sm="6">  

                              <Button className="btn btn-info mb-1" block ><span>Cancel</span></Button>  

                            </Col>  

                          </Row>  

                        </CardFooter>  

                          </Form>  

                        </CardBody>                 

                      </Card>  

                    </Col>  

                  </Row>  

                </Container>  
                <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          {message?"User updated successfully":"Something went wrong"}
        </ModalBody>
        <ModalFooter>
        <Button color="secondary" onClick={redirect}>Close</Button>
        </ModalFooter>
      </Modal>

              </div>  

        )  

}  

  

export default Edituser;


