import React from 'react'
// import { } from 'reactstrap'; 
import { Badge, CardHeader, Pagination, PaginationItem, PaginationLink, Table, Modal, ModalHeader, ModalBody, ModalFooter, Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Select from 'react-select';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'
import { NotificationContainer, NotificationManager } from 'react-notifications';
function UserList(props) {
  const userData = useSelector((state) => state.loggedUser);
  const token = userData.user.token;
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [delmodal, setDelModal] = useState(false);
  const [message,setMessage]=useState(0);
  const [loading, setLoading] = useState(false);
  const [user, setuser] = useState({
    firstName: '', lastName: '', email: '', password: '', age: '', countryCode: '', mobileNo: "",
    Gender: "", role: ""
  });
  const toggle = () => setModal(!modal);
  const deltoggle=()=> setDelModal(!delmodal);
  const Nobtn=()=>{

  }
  const submit = (data) => {
    confirmAlert({
      title: 'Confirm to Delete',
      message: `Are you sure want to delete ${data.firstName}`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => deleteUser(data._id)
        },
        {
          label: 'No',
          onClick: () => Nobtn()
        }
      ]
    
    })
  };
  const roles = [
    { value: 'SuperAdmin', label: 'SuperAdmin' },
    { value: 'ZonalHead', label: 'ZonalHead' },
    { value: 'Technision', label: 'Technision' }];
  const [showLoading, setShowLoading] = useState(false);
  const GetData = async () => {
    const result = await axios('http://localhost:3030/api/user/list', { headers: { "Authorization": `${token}` } });
    console.log("@@@@@@@@@@@@@@@@result@@@@@@@", result.data.data);
    setData(result.data.data);
  };
  const searchData = async (searchVal) => {
    console.log("searchValSatish###############", searchVal);
    setLoading(true);
    axios
      .get(`http://localhost:3030/api/user/search?searchedText=${searchVal}&limit=5&offset=1`, { headers: { "Authorization": `${token}` } })
      .then(res => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }
  const apiUrl = "http://localhost:3030/api/user/register";

  const handleUserSelectChange = e => {
    console.log("e[0].value", e);
    setuser({ ...user, role: e.value });
  };

  const Insertuser = (e) => {
    console.log("Insertuser", user);
    e.preventDefault();



    const data = {
      firstName: user.firstName, lastName: user.lastName, email: user.email,
      password: user.password, age: user.age,
      contactDetails: {
        countryCode: user.countryCode,
        mobileNo: user.mobileNo
      }, Gender: user.Gender, role: user.role
    };
    console.log("apiUrl", apiUrl, "data", data);

    // const token = localStorage.getItem('token');
    // const user = useSelector((state) => state.loggedUser);
    // const token =  user.user.token;
    console.log("token", token);
    axios.post(apiUrl, data, { headers: { "Authorization": `${token}` } })

      .then((result) => {
        NotificationManager.success('Success message', 'User added successfully');
        // console.log(NotificationManager);
        setuser({
          firstName: '', lastName: '', email: '', password: '', age: '', countryCode: '', mobileNo: "",
          Gender: "", role: ""
        })
        setDelModal(true);
        setMessage(1);
        GetData();
        // props.history.push('/userlist')

      }).catch((err)=>{
        setMessage(0);
      });

  };

  const onChange = (e) => {
     e.persist();
    setuser({ ...user, [e.target.name]: e.target.value });
  }
  useEffect(() => {
     GetData();
    }, []);
    const redirect=()=>{
      setDelModal(false)
      GetData()
    }
  const deleteUser = (id) => {
      axios.delete('http://localhost:3030/api/user/remove/' + id, { headers: { "Authorization": `${token}` } })
        .then((result) => {
          setDelModal(true);
          setMessage(2);
          GetData()
          deltoggle();
        

        // props.history.push('/userlist');

      }).catch((err)=>{
        setMessage(0);
        setDelModal(false)
      });

  };

  const editUser = (id) => {
    console.log("editUser", id);
    props.history.push({

      pathname: '/editUser/' + id

    });

  };

  const checkRole = (role) => {
    if(role === "ZH"){
      return "Zonal Head"

    }
    else if(role === "SA"){
      return "Super Admin"
    }
    else{
      return "Technician"
    }
  }
  let displayMessage;
  if(message===1){
    displayMessage="user added successfully";
  } else if (message===2){
    displayMessage="user deleted successfully";
  } else {
    displayMessage="somethig went wrong";

  }
 console.log("message@@@@@@@@@@@@@@@@@@@@@@",message)
  return (

    <div className="animated fadeIn">

      <Row>

        <Col>

          <Card>

            <CardHeader>



            </CardHeader>

            <CardBody>

              <Button style={{ "background": "#0366ee" }} onClick={toggle}>Add User</Button>
              {/* <Button onClick={submit}>Confirm dialog</Button> */}
              <input
                type="text"
                placeholder="Search Users"
                onChange={e => searchData(e.target.value)}
              />
              <Table hover bordered striped responsive size="sm" style={{ "marginTop": "6px" }}>

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

                        <td>{item.contactDetails ? item.contactDetails.countryCode : null}</td>

                        <td>{item.contactDetails ? item.contactDetails.mobileNo : null}</td>

                        <td>

                          {item.Gender}

                        </td>
                        <td>{checkRole(item.role)}</td>

                        <td>

                          <div >

                            <Button style={{ "background": "#0366ee" }} onClick={() => { editUser(item._id) }}>Edit</Button>
                                 &nbsp;
                                <Button style={{ "background": "#0366ee" }} onClick={() => { submit(item) }}>Delete</Button>

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
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create user</ModalHeader>
        <ModalBody>
          <div className="app flex-row align-items-center">

            <Form onSubmit={Insertuser}>
              <div className="modal-body row" style={{ width: "110%" }}>
                <div className="col-md-6">
                  <Input type="text" name="firstName" id="firstName" placeholder="firstName" value={user.firstName} onChange={onChange} />
                  <Input type="text" placeholder="Lastname" name="lastName" id="lastName" value={user.lastName} onChange={onChange} />
                  <Input type="number" placeholder="Age" name="age" id="age" value={user.age} onChange={onChange} />
                  <Input type="text" placeholder="Email" name="email" id="email" value={user.email} onChange={onChange} />
                  <Select
                    name="role"
                    placeholder="select Role"
                    onChange={(e) => handleUserSelectChange(e)}
                    options={roles}

                  />
                </div>
                <div className="col-md-6">
                  <Input type="password" placeholder="Password" name="password" id="password" value={user.password} onChange={onChange} />
                  <Input type="number" placeholder="countryCode" name="countryCode" id="countryCode" value={user.countryCode} onChange={onChange} />
                  <Input type="number" placeholder="mobileNo" name="mobileNo" id="mobileNo" value={user.mobileNo} onChange={onChange} />
                  <Input type="text" placeholder="Gender" name="Gender" id="Gender" value={user.Gender} onChange={onChange} />
                </div>
              </div>
              <div className="modal-body row">
                <div className="col-md-6">
                  <Button type="submit" onClick={toggle} className="btn btn-info mb-1" block><span>Save</span></Button>
                </div>
                <div className="col-md-6">
                  <Button onClick={toggle} className="btn btn-info mb-1" block><span>Cancel</span></Button>
                </div>
              </div>


            </Form>
          </div>
        </ModalBody>
        <ModalFooter>

        </ModalFooter>
      </Modal>
      <Modal isOpen={delmodal} toggle={deltoggle}>
        <ModalHeader toggle={deltoggle}></ModalHeader>
        <ModalBody>
          {displayMessage}
        </ModalBody>
        <ModalFooter>
        <Button color="secondary" onClick={redirect}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>

  )

}

export default UserList; 