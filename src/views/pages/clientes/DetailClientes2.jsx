/*!

=========================================================
* Argon Dashboard PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardImg,  
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components

// react component used to create sweet alerts
import ReactBSAlert from "react-bootstrap-sweetalert";

import api from "services/api";

class Profile extends React.Component {


  constructor(props) {
    super(props);
    this.state = {      
      account: {
        _id: "",
        name: "",        
        email: "",    
        logo: "",   
        type: "",        
        status: "",
        link: ""
      }    
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //get data from API
  componentDidMount(){
    this.getData();    
  }

  getData = () => {       
    console.log(`/account/${this.props.id}`); 
    api.get(`/account/${this.props.id}`)
    .then(function (response) {
      // handle success      
      this.setState({
        account: response.data
      });      
      console.log(response.data);
    }.bind(this))
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
      console.log("finalizado GET");
    });
  }

  postData = accountData => {
    console.log("Inseriu mais um registro");
    console.log(`/account/${this.state.account._id}`);
    api.post("/account", {
      ...accountData
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  putData = accountData => {
    console.log("Inseriu mais um registro");
    console.log(`/account/${this.state.account._id}`);
    api.put(`/account/${this.state.account._id}`, {
      ...accountData
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  handleChange(event) {    
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState(prevState => ({
      account: {   
        ...prevState.account,     
        [name]: value
      }
    }));
  }

  handleSubmit(event) {    
    console.log(this.state.account);
    event.preventDefault();
    this.confirmAlert();    
  }


  hideAlert = () => {
    this.setState({
      alert: null
    });
  };

  confirmAlert = () => {
    this.setState({
      alert: (
        <ReactBSAlert
          warning
          style={{ display: "block", marginTop: "-100px"}}
          title="Are you sure?"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.confirmedAlert()}
          showCancel
          confirmBtnBsStyle="default"
          confirmBtnText="Cancel"
          cancelBtnBsStyle="danger"
          cancelBtnText="Yes, delete it!"
          btnSize=""
        >
          You won't be able to revert this!
        </ReactBSAlert>
      )
    });
  };
  confirmedAlert = () => {
    // Update data 
    this.putData(this.state.account);

    this.setState({
      alert: (
        <ReactBSAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title="Deleted!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="primary"
          confirmBtnText="Ok"
          btnSize=""
        >
          Your file has been deleted.
        </ReactBSAlert>
      )
    });
  };

  render() {
    return (
      <>
        {this.state.alert}
        <Form onSubmit={this.handleSubmit}> 
          <div className="modal-header">
              {/* <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5> */}          
              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
                onClick={() => this.props.toggleModal("exampleModal")}
              >
                <span aria-hidden={true}>×</span>
              </button>
          </div>
          <div className="modal-body">   

            <Container fluid>
              <Row>
                <Col className="order-xl-1" xl="12">
                  <Card className="card-profile">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/img-1-1000x600.jpg")}
                      top
                    />
                    <Row className="justify-content-center">
                      <Col className="order-lg-2" lg="3">
                        <div className="card-profile-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              className="rounded-circle"
                              src={require("assets/img/theme/team-4.jpg")}
                            />
                          </a>
                        </div>
                      </Col>
                    </Row>
                    <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                      <div className="d-flex justify-content-between">
                        <Button
                          className="mr-4"
                          color="info"
                          href="#pablo"
                          onClick={ () => {
                            this.putData({
                              name: "Teste View", 
                              email: "teste@view.com.br",
                              type: 0,
                              status: true,
                              link: "teste2"
                            })
                          }}
                          size="sm"
                        >
                          Connect
                        </Button>
                        <Button
                          className="float-right"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Message
                        </Button>
                      </div>
                    </CardHeader>
                    <CardBody className="pt-0">
                      <Row>
                        <div className="col">
                          <div className="card-profile-stats d-flex justify-content-center">
                            <div>
                              <span className="heading">22</span>
                              <span className="description">Friends</span>
                            </div>
                            <div>
                              <span className="heading">10</span>
                              <span className="description">Photos</span>
                            </div>
                            <div>
                              <span className="heading">89</span>
                              <span className="description">Comments</span>
                            </div>
                          </div>
                        </div>
                      </Row>
                      <div className="text-center">
                        <h5 className="h3">
                          Jessica Jones
                          <span className="font-weight-light">, 27</span>
                        </h5>
                        <div className="h5 font-weight-300">
                          <i className="ni location_pin mr-2" />
                          Bucharest, Romania
                        </div>
                        <div className="h5 mt-4">
                          <i className="ni business_briefcase-24 mr-2" />
                          Solution Manager - Creative Tim Officer
                        </div>
                        <div>
                          <i className="ni education_hat mr-2" />
                          University of Computer Science<br/>
                          {this.state.account._id}<br/>
                          {this.state.account.name}<br/>
                          {this.state.account.email}<br/>
                          {this.state.account.link}
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  
                </Col>
                <Col className="order-xl-2" xl="12">              
                  <Card>
                    <CardHeader>
                      <Row className="align-items-center">
                        <Col xs="8">
                          <h3 className="mb-0">Edit profile</h3>
                        </Col>
                        <Col className="text-right" xs="4">
                          <Button
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            size="sm"
                          >
                            Settings
                          </Button>
                        </Col>
                      </Row>
                    </CardHeader>
                    <CardBody>
                        <h6 className="heading-small text-muted mb-4">
                          User information
                        </h6>
                        <div className="pl-lg-4">
                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-name"
                                >Name
                                </label>
                                <Input                                
                                  id="input-name"
                                  placeholder="Name"
                                  name="name"
                                  type="text"
                                  value={this.state.account.name}
                                  onChange={this.handleChange}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-email"
                                >
                                  Email address
                                </label>
                                <Input
                                  id="input-email"
                                  placeholder="jesse@example.com"
                                  name="email"
                                  type="email"
                                  value={this.state.account.email}
                                  onChange={this.handleChange}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-first-name"
                                >
                                  First name
                                </label>
                                <Input
                                  defaultValue="Lucky"
                                  id="input-first-name"
                                  placeholder="First name"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-last-name"
                                >
                                  Last name
                                </label>
                                <Input
                                  defaultValue="Jesse"
                                  id="input-last-name"
                                  placeholder="Last name"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>
                        <hr className="my-4" />

                        <h6 className="heading-small text-muted mb-4">
                          Contact information
                        </h6>
                        <div className="pl-lg-4">
                          <Row>
                            <Col md="12">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-address"
                                >
                                  Address
                                </label>
                                <Input
                                  defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                  id="input-address"
                                  placeholder="Home Address"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-city"
                                >
                                  City
                                </label>
                                <Input
                                  defaultValue="New York"
                                  id="input-city"
                                  placeholder="City"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-country"
                                >
                                  Country
                                </label>
                                <Input
                                  defaultValue="United States"
                                  id="input-country"
                                  placeholder="Country"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-country"
                                >
                                  Postal code
                                </label>
                                <Input
                                  id="input-postal-code"
                                  placeholder="Postal code"
                                  type="number"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>
                        <hr className="my-4" />

                        <h6 className="heading-small text-muted mb-4">About me</h6>
                        <div className="pl-lg-4">
                          <FormGroup>
                            <label className="form-control-label">About Me</label>
                            <Input
                              placeholder="A few words about you ..."
                              rows="4"
                              type="textarea"
                              defaultValue="A beautiful premium dashboard for Bootstrap 4."
                            />
                          </FormGroup>
                        </div>                      
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>

          </div>
          <div className="modal-footer">
            <Button
              color="secondary"
              data-dismiss="modal"
              type="button"
              onClick={() => this.props.toggleModal("exampleModal")}
            >
              Close
            </Button>
            <Button color="primary" type="submit">
              Save changes
            </Button>
          </div>
        </Form>
        
        
      </>
    );
  }
}

export default Profile;
