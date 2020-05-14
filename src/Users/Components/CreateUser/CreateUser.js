import React, { useState, useEffect } from 'react'
import Select from 'react-select';
import axios from 'axios';

import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

function Createuser(props) {
   
    const [user, setuser] = useState({ firstName: '', lastName: '', email: '', password: '', age: '',  countryCode: '', mobileNo: "" , 
    Gender: "" ,role:""
    });
   const roles=[
    { value: 'SA', label:'SA' },
    { value: 'ZH', label: 'ZH'},
    { value: 'TECH', label: 'TECH'}]
    const [showLoading, setShowLoading] = useState(false);

    const apiUrl = "http://localhost:3030/api/user/register";

    const handleUserSelectChange = e => {
        console.log("e[0].value",e);
        setuser({ ...user, role: e.value });
      };

    const Insertuser = (e) => {
        console.log("Insertuser",user);
        e.preventDefault();

        debugger;

        const data = {
            firstName: user.firstName, lastName: user.lastName, email: user.email, 
            password: user.password, age: user.age, 
            contactDetails: {
                countryCode: user.countryCode,
                mobileNo: user.mobileNo
            }, Gender: user.Gender,role:user.role
        };
        console.log("apiUrl",apiUrl,"data",data);
        
        const token=localStorage.getItem('token');
        console.log("token",token);
        axios.post(apiUrl, data, { headers: {"Authorization" : `${token}`} })

            .then((result) => {
           
                props.history.push('/userlist')

            });

    };

    const onChange = (e) => {

        e.persist();



        setuser({ ...user, [e.target.name]: e.target.value });

    }



    return (

        <div className="app flex-row align-items-center">

            <Container>

                <Row className="justify-content-center">

                    <Col md="12" lg="10" xl="8">

                        <Card className="mx-4">

                            <CardBody className="p-4">

                                <Form onSubmit={Insertuser}>

                                    <h1>Create User</h1>

                                    <InputGroup className="mb-3">



                                        <Input type="text" name="firstName" id="firstName" placeholder="firstName" value={user.firstName} onChange={onChange} />

                                    </InputGroup>

                                    <InputGroup className="mb-3">



                                        <Input type="text" placeholder="Lastname" name="lastName" id="lastName" value={user.lastName} onChange={onChange} />

                                    </InputGroup>

                                    <InputGroup className="mb-3">



                                        <Input type="number" placeholder="Age" name="age" id="age" value={user.age} onChange={onChange} />

                                    </InputGroup>

                                    <InputGroup className="mb-4">



                                        <Input type="text" placeholder="Email" name="email" id="email" value={user.email} onChange={onChange} />

                                    </InputGroup>

                                    <InputGroup className="mb-4">



                                        <Input type="password" placeholder="Password" name="password" id="password" value={user.password} onChange={onChange} />

                                    </InputGroup>

                                    <InputGroup className="mb-4">



                                        <Input type="number" placeholder="countryCode" name="countryCode" id="countryCode" value={user.countryCode} onChange={onChange} />

                                    </InputGroup>
                                    <InputGroup className="mb-4">



                                        <Input type="number" placeholder="mobileNo" name="mobileNo" id="mobileNo" value={user.mobileNo} onChange={onChange} />

                                    </InputGroup>
                                    <InputGroup className="mb-4">



                                        <Input type="text" placeholder="Gender" name="Gender" id="Gender" value={user.Gender} onChange={onChange} />

                                    </InputGroup>
                                    



                                    <Select
                  name="role"
                  placeholder="select Role"
                  onChange={(e)=>handleUserSelectChange(e)}
                  options={roles}
               
                />


                                    <CardFooter className="p-4">

                                        <Row>

                                            <Col xs="12" sm="6">

                                                <Button type="submit" className="btn btn-info mb-1" block><span>Save</span></Button>

                                            </Col>

                                            <Col xs="12" sm="6">

                                                <Button className="btn btn-info mb-1" block><span>Cancel</span></Button>

                                            </Col>

                                        </Row>

                                    </CardFooter>

                                </Form>

                            </CardBody>

                        </Card>

                    </Col>

                </Row>

            </Container>

        </div>

    )

}

export default Createuser  