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
  CardTitle,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  ListGroupItem,
  ListGroup,
  // Progress,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import BackHeader from "components/Headers/BackHeader.jsx";
import SimpleHeader from "components/Headers/SimpleHeader.jsx";

// react component used to create sweet alerts
import ReactBSAlert from "react-bootstrap-sweetalert";
import Select2 from "react-select2-wrapper";
// import InputMask from "react-input-mask";
// react plugin that creates text editor
import ReactQuill from "react-quill";

// react library for routing
import { Link } from "react-router-dom";


import { ObjectID } from 'bson';
import FormData from 'form-data'

import cloudinary from 'cloudinary-core';
import { BeatLoader } from "react-spinners";


import {BASE_URL} from "variables/general.jsx"

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
        background: "",   
        type: 0,   
        status: true,
        utm: "",          
        color: "#11cdef",
        owner: "",        
        description: "",        
        observations: "",   
        category: {
          id: "",
          name: ""
        },     
        local: {
          address: "",
          city: "",
          country: "Brasil",
          postalCode: ""
        }, 
        social: {
          facebook: "",
          instagram: "",          
        },
        maps: "",
        website: "",
        ifood: "",
        appAndroid: "",
        appIos: "",
        phone: "",
        emailPagseguro: "",
        tokenPagseguro: "",
        units: "",        
        subAccounts: []     
      }, 
      category: {
        id: "",
        name: ""
      },         
      loading:{
        logo: false,
        bg: false
      }, 
      campaigns: [{
        _id: "",
        name: "",
        utm: "",
        images: {
          image1: "",
          image2: "",
          image3: "",
          image4: ""
        }
      }],
      accounts:[],
      newObjectId: new ObjectID(),
      new: this.props.match.params.action === "add" ? true : false 
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleSocial = this.handleSocial.bind(this);
    this.handleTextEditorLocal = this.handleTextEditorLocal.bind(this);
    this.fileInputLogo = React.createRef();    
    this.fileInputLogoLabel = React.createRef();    
    this.fileInputBg = React.createRef();    
    this.fileInputBgLabel = React.createRef();    
  }

  //get data from API
  componentDidMount(){        
    if(this.props.match.params.id) {
      this.getData(); 
      this.getDataCampaigns();
    }
    this.getDataAccount();
               
  }

  getData = () => {           
    api.get(`/account/${this.props.match.params.id}`)
    .then(function (response) {
      // handle success      
      this.setState(prevState => ({
        account: {   
          ...prevState.account,
          ...response.data               
        }
      }));         
    }.bind(this))
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
      console.log("end GET");
    });
  }


  getDataCampaigns = () => {           
    api.get(`campaign/account/${this.props.match.params.id}`)
    .then(function (response) {
      // handle success      
      this.setState( {
        campaigns: {             
          ...response.data               
        }
      });    
      console.log(response.data);
      console.log(this.state.campaigns);     
    }.bind(this))
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
      console.log("end GET");
    });
  }

  getDataAccount = () => {           
    api.get(`/account/select`)
    .then(function (response) {
      // handle success     
      let itemsAccount = [];
      console.log(response);
      response.data.map((item) =>
        itemsAccount.push({ id: item._id, text: item.name, units: item.units})
      );           
      this.setState({ accounts: itemsAccount });        
      console.log(this.state.accounts) 
    }.bind(this))
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
      console.log("end GET Account");
    });
  }



  postData = accountData => {
    console.log("Inseriu mais um registro");       
    delete accountData._id;    
    api.post("/account", {
      ...accountData
    })
    .then(function (response) {
      console.log(response);
      this.confirmedAlert()
      this.setState({ new: false });
      this.setState(prevState => ({
        account: {   
          ...prevState.account,     
          _id: response.data._id
        }
      }));
    }.bind(this))
    .catch(function (error) {
      console.log(error);
      this.errorAlert();
    }.bind(this));
  }
  
  putData = accountData => {
    console.log("Alterou registro");      
    api.put(`/account/${this.state.account._id}`, {
      ...accountData
    })
    .then(function (response) {
      console.log(response);
      this.confirmedAlert()
    }.bind(this))
    .catch(function (error) {
      console.log(error);
      this.errorAlert();
    }.bind(this));
  }
  
  deleteData = () => {
    console.log("Deletou registro");    
    api.delete(`/account/${this.state.account._id}`)
    .then(function (response) {
      console.log(response);
      this.props.history.push('/admin/clientes');
    }.bind(this))
    .catch(function (error) {
      console.log(error);
      this.errorAlert();
    }.bind(this));
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

  handleSelect(event){    
    const id = event.target.value;    
    const value = event.target.options[event.target.value -1].label;    

    this.setState(prevState => ({
      account: {   
        ...prevState.account,     
        category: {
          id: id,
          name: value
        }
      }
    }));

    this.setState({ 
      category: {
        id: id
      }
    })    
  }

  handleImage(e, typeImage) {    

    const file = new Blob([e.target.files[0]], { type:  'image/png'}); // kind of works and choses stream as content type of file (not request)    

    let formData = new FormData();    
    formData.append('file', file, file.fileName);


    switch(typeImage) {

      case 'logo':

        const currentLogo = this.state.account.logo;
          
          formData.append('id', new ObjectID().toHexString() );
          if(currentLogo !== ""){                        
            formData.append('idRemove', currentLogo );
            formData.append('remove', true);
          } else {                                   
            formData.append('remove', false);
          }
          
            
          this.setState(prevState => ({
            loading: {   
              ...prevState.loading,                 
              logo: true
            }
          }));

                    
          this.fileInputLogoLabel.current.innerText = e.target.files[0].name;  

          api.post("/image", formData, {
            headers: {
              "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
            }
          })
          .then(function (response) {
            
            this.setState(prevState => ({
              account: {   
                ...prevState.account,                 
                logo: response.data.public_id                
              }
            }));
            this.setState(prevState => ({
              loading: {   
                ...prevState.loading,                 
                logo: false
              }
            }));
            
          }.bind(this))
          .catch(function (error) {
            console.log(error);
          });   
        


        return;
      case 'bg':

        const currentBg =  this.state.account.background;
          
          formData.append('id', new ObjectID().toHexString() );
          if(currentBg !== ""){
            formData.append('idRemove', currentBg );
            formData.append('remove', true);
          } else {            
            formData.append('remove', false);
          }
          
            
          this.setState(prevState => ({
            loading: {   
              ...prevState.loading,                 
              bg: true
            }
          }));

                    
          this.fileInputBgLabel.current.innerText = e.target.files[0].name;  

          api.post("/image", formData, {
            headers: {
              "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
            }
          })
          .then(function (response) {
            
            this.setState(prevState => ({
              account: {   
                ...prevState.account,                 
                background: response.data.public_id                
              }
            }));
            this.setState(prevState => ({
              loading: {   
                ...prevState.loading,                 
                bg: false
              }
            }));
            
          }.bind(this))
          .catch(function (error) {
            console.log(error);
          });   

        return;

      default:
        return;        
    }  
    

  }

  handleTextEditor = value => {
    this.setState(prevState => ({
      account: {   
        ...prevState.account, 
        description: value,        
      }
    }));
        
  };

  handleTextEditorLocal = value => {
    this.setState(prevState => ({
      account: {   
        ...prevState.account, 
        units: value
      }
    }));
        
  };

  handleAddress(event) {                    
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;;

    this.setState(prevState => ({
      account: {   
        ...prevState.account,   
        local: {
          ...prevState.account.local, 
          [name]: value
        }        
      }
    }));    
  }
  
  handleSocial(event) {                    
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;;

    this.setState(prevState => ({
      account: {   
        ...prevState.account,   
        social: {
          ...prevState.account.social, 
          [name]: value
        }        
      }
    }));    
  }

  handleClick = (element) => {    

    switch(element) {
      case 'fileInputLogo':        
        this.fileInputLogo.current.click();     
        return;

      case 'fileInputBg':        
        this.fileInputBg.current.click();     
        return;        
        
      default:
        return
    }

  }

  


  handleChangeSubAccount(event, index){

    const id = event.params.data.id;           
    const value = event.params.data.text;  

    const subAccountsArray = this.state.account.subAccounts.map((item, i) => {
      if (i === index) {
        return id;
      } else {
        return item;
      }
    });  

    this.setState(prevState => ({
      account: {   
        ...prevState.account,   
        subAccounts: subAccountsArray
      }
      
    }));  
    
    
  }
  
  handleAddSubAccount(){

    this.setState(prevState => ({
      account: {   
        ...prevState.account,   
        subAccounts: [ ...prevState.account.subAccounts, ""]        
      }
      
    }));  
    
  }
  
  
  handleRemoveSubAccount(id){

    let subAccountsArray = this.state.account.subAccounts;

    subAccountsArray = subAccountsArray.filter((item, j) => id !== j);

    this.setState(prevState => ({
      account: {   
        ...prevState.account,   
        subAccounts: subAccountsArray
      }
      
    }));   
    
  }


  handleSubmit(event) {        
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
          title="Salvar as Alterações?"
          onConfirm={() => this.state.new ? this.postData(this.state.account) : this.putData(this.state.account) }           
          onCancel={() => this.hideAlert()}
          showCancel
          confirmBtnBsStyle="primary"
          confirmBtnText="Confirmar Alterações"
          cancelBtnBsStyle="secondary"
          cancelBtnText="Descartar"
          btnSize=""          
        >
          Deseja salvar as alterações realizadas
        </ReactBSAlert>
      )
    });
  };
  
  confirmDelete = () => {
    this.setState({
      alert: (
        <ReactBSAlert
          warning
          style={{ display: "block", marginTop: "-100px"}}
          title="Deseja remover este registro?"
          onConfirm={() => this.deleteData(this.state.account) }           
          onCancel={() => this.hideAlert()}
          showCancel
          confirmBtnBsStyle="danger"
          confirmBtnText="Deletar"
          cancelBtnBsStyle="secondary"
          cancelBtnText="Cancelar"
          btnSize=""          
        >
          Essa operação não poderá ser desfeita
        </ReactBSAlert>
      )
    });
  };
  confirmedAlert = () => {   

    this.setState({
      alert: (
        <ReactBSAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title="OK"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="primary"
          confirmBtnText="Ok"
          btnSize=""
        >
          Operação realizada com sucesso
        </ReactBSAlert>
      )
    });
  };
  errorAlert = () => {    

    this.setState({
      alert: (
        <ReactBSAlert
          danger
          style={{ display: "block", marginTop: "-100px" }}
          title="Erro"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="primary"
          confirmBtnText="Ok"
          btnSize=""
        >
          Ocorreu um erro ao salvar registro. <br/>
          Tente novamente
        </ReactBSAlert>
      )
    });
  };

  renderCampaigns(props) {
    const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'djmiq2iq6'});

    
    const campaigns = this.state.campaigns;
    const listItems = (
      <>     
        {Object.values(campaigns).map((campaign, i) =>  
          <ListGroupItem className="px-0">
            <Row className="align-items-center">
              <Col className="col-auto">
                <a
                  className="avatar rounded-circle"
                  href="#1"
                  onClick={e => e.preventDefault()}
                >
                  <img
                    alt="..."    
                    style={{ objectFit: "cover", height: "100%" }}            
                    src={ campaign.images.image1 !== undefined ? cloudinaryCore.url(campaign.images.image1) : require("assets/img/theme/placeholder.png")}
                  />
                </a>
              </Col>
              <div className="col ml--2">
                <h4 className="mb-0">
                  <a href="#1" onClick={e => e.preventDefault()}>
                    {campaign.name}
                  </a>
                </h4>
                <span className="text-success">●</span>{" "}
                <small>Online</small>
              </div>
              <Col className="col-auto">
                <Button color="primary" size="sm" type="button" to={`/admin/campanhas/cupons/edit/${campaign._id}`} tag={Link}>
                  Ver
                </Button>
              </Col>
            </Row>
          </ListGroupItem> 
        )}
      </>
    );
    
    return listItems;
    
  }

  

  render() {

    const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'djmiq2iq6'});
    return (
      <>
        {this.state.alert}
        {this.state.new ? (
          <SimpleHeader name="Novo Cliente" parentName="Cliente" />
        ) : (
          <BackHeader name={this.state.account.name} parentName="Cliente" parentPath="/admin/clientes" />
        )}        
        <Form onSubmit={this.handleSubmit}> 
          <Container className="mt--6" fluid>
            <Row>
              <Col className="order-xl-2" xl="4">

                <Card>
                  <CardHeader>
                    <h5 className="h3 mb-0">Campanhas Ativas</h5>
                  </CardHeader>

                  <CardBody>
                    <ListGroup className="list my--3" flush>                                  

                     {this.renderCampaigns()} 

                    </ListGroup>
                  </CardBody>
                </Card>

                <Card className="card-profile sticky-top">                  
                  {this.state.account.background !== undefined && this.state.account.background !== "" ? (
                      <CardImg
                        alt="..."                        
                        src={cloudinaryCore.url(this.state.account.background)}
                        top
                        onClick={() => this.handleClick("fileInputBg")}
                      />
                    ) : (
                      <CardImg
                        alt="..."
                        src={require("assets/img/theme/placeholder.png")}
                        top
                        onClick={() => this.handleClick("fileInputBg")}
                      />
                    )}  
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#1" onClick={e => e.preventDefault()}>
                          
                          {this.state.account.logo !== undefined && this.state.account.logo !== "" ? (
                            <img
                              alt="..."
                              className="rounded-circle"                              
                              src={cloudinaryCore.url(this.state.account.logo)}
                              onClick={() => this.handleClick("fileInputLogo")}
                            />
                          ) : (
                            <img
                              alt="..."
                              className="rounded-circle"
                              src={require("assets/img/theme/placeholder.png")}
                              onClick={() => this.handleClick("fileInputLogo")}
                            />
                          )}  
                          
                        </a>
                      </div>
                    </Col>
                  </Row>
                  <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                    <div className="d-flex justify-content-between">
                      <Button
                        className="mr-4"
                        color="info"
                        type="button"
                        href={`${BASE_URL}/${this.state.account.utm}`}    
                        target="_blank"                    
                        size="sm"
                      >
                        Ver Página
                      </Button>
                      <Button
                        className="float-right"
                        color="default"
                        type="button"
                        href={this.state.account.website !== undefined && this.state.account.website !== ""  ? this.state.account.utm : `${BASE_URL}/${this.state.account.utm}`}                           
                        target="_blank"  
                        size="sm"
                      >
                        Website
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody className="pt-0">
                    <Row>
                      <div className="col">
                        <div className="card-profile-stats d-flex justify-content-center">
                          <div>
                            <span className="heading">0</span>
                            <span className="description">Visitas</span>
                          </div>
                          <div>
                            <span className="heading">0</span>
                            <span className="description">Cadastros</span>
                          </div>
                          <div>
                            <span className="heading">0</span>
                            <span className="description">Cupons</span>
                          </div>
                        </div>
                      </div>
                    </Row>
                    <div className="text-center">
                      <h5 className="h3">
                        {this.state.account.name}                        
                      </h5>
                      <div className="h5 font-weight-300">
                        <i className="ni location_pin mr-2" />
                        {this.state.account.utm}
                      </div>
                      <div className="h5 mt-2">
                        <i className="ni business_briefcase-24 mr-2" />
                        {this.state.account.category.name}
                      </div>             
                    </div>
                  </CardBody>
                </Card>

                

              </Col>
              <Col className="order-xl-1" xl="8">
                <Row>
                  <Col lg="6">
                    <Card className="bg-gradient-success border-0">
                      <CardBody>
                        <Row>
                          <div className="col">
                            <CardTitle
                              className="text-uppercase text-muted mb-0 text-white"
                              tag="h5"
                            >
                              Total de visitas
                            </CardTitle>
                            <span className="h2 font-weight-bold mb-0 text-white">
                              0
                            </span>
                          </div>
                          <Col className="col-auto">
                            <div className="icon icon-shape bg-white text-dark rounded-circle shadow">
                              <i className="ni ni-active-40" />
                            </div>
                          </Col>
                        </Row>
                        <p className="mt-3 mb-0 text-sm">
                          <span className="text-white mr-2">
                            <i className="fa fa-arrow-up" />
                            0%
                          </span>
                          <span className="text-nowrap text-light">
                            Desde o último mês
                          </span>
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="6">
                    <Card className="bg-gradient-danger border-0" tag="h5">
                      <CardBody>
                        <Row>
                          <div className="col">
                            <CardTitle className="text-uppercase text-muted mb-0 text-white">
                              Cupons utilizados
                            </CardTitle>
                            <span className="h2 font-weight-bold mb-0 text-white">
                              0
                            </span>
                          </div>
                          <Col className="col-auto">
                            <div className="icon icon-shape bg-white text-dark rounded-circle shadow">
                              <i className="ni ni-spaceship" />
                            </div>
                          </Col>
                        </Row>
                        <p className="mt-3 mb-0 text-sm">
                          <span className="text-white mr-2">
                            <i className="fa fa-arrow-up" />
                            0%
                          </span>
                          <span className="text-nowrap text-light">
                            Desde o último mês
                          </span>
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Card>
                  <CardHeader>
                    <Row className="align-items-center">
                      <Col xs="8">                        
                        {this.state.new ? (
                          <h3 className="mb-0">Novo Cliente</h3>
                        ) : (
                          <h3 className="mb-0">Editar Cliente</h3>
                        )}  
                      </Col>
                      <Col className="text-right" xs="4">                        
                        <UncontrolledDropdown >
                          
                          {this.state.new ? (
                            <DropdownToggle
                              className="btn-icon-only text-light"
                              color=""
                              role="button"
                              size="sm"
                              disabled
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>

                          ) : (
                            <DropdownToggle
                              className="btn-icon-only text-light"
                              color=""
                              role="button"
                              size="sm"                              
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>

                          )}
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#1"
                              onClick={() => this.confirmDelete()}                              
                            >
                              <span>
                                <i className="far fa-trash-alt pr-1"></i> Excluir
                              </span>
                            </DropdownItem>
                            <DropdownItem
                              href="#1"
                              onClick={() => this.setState({new: true })}
                            >
                              <span>
                              <i className="far fa-clone pr-1"></i> Duplicar
                              </span>
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                      <h6 className="heading-small text-muted mb-4">
                        Informações gerais
                      </h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-name"
                              >
                                Nome 
                              </label>
                              <Input                                
                                id="input-name"                                
                                placeholder="Nome da conta"
                                type="text"
                                name="name"
                                value={this.state.account.name}
                                onChange={this.handleChange}
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-utm"
                              >
                                URL
                              </label>
                              <Input
                                id="input-utm"
                                placeholder="/nome-do-cliente"
                                type="text"
                                name="utm"
                                value={this.state.account.utm}
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
                                htmlFor="input-color"
                              >
                                Cor
                              </label>
                              <Input                                
                                id="input-color"
                                type="color"
                                name="color"
                                value={this.state.account.color}                                
                                onChange={this.handleChange}
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-category"
                              >
                                Categoria
                              </label>
                              <Select2
                                  value={ this.state.category.id }
                                  className="form-control"
                                  defaultValue="Outros"                                  
                                  options={{
                                    placeholder: "Categoria",
                                    tags: true
                                  }}
                                  data={[
                                    { id: "1", text: "Restaurante" },
                                    { id: "2", text: "Academia" },
                                    { id: "3", text: "Vestuário" },
                                    { id: "4", text: "Serviços" },
                                    { id: "5", text: "Cursos" },
                                    { id: "6", text: "Clínica" },
                                    { id: "7", text: "Entrega" },
                                  ]}
                                  onSelect={event => this.handleSelect(event)}                                  
                                />
                            </FormGroup>
                            
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="12">
                            <label
                              className="form-control-label"                              
                            >
                              Logo
                            </label>
                            <div className="sweet-loading" style={{textAlign: "center"}}>
                              <BeatLoader
                                size={15}
                                //size={"150px"} this also works
                                color={"#123abc"}
                                loading={this.state.loading.logo}
                              />
                            </div>
                            <FormGroup>
                              <div className="custom-file">
                                <input
                                  className="custom-file-input"
                                  id="input-logo"
                                  lang="pt-br"
                                  type="file"
                                  name="logo"
                                  ref={this.fileInputLogo}                                                                 
                                  onChange={event => this.handleImage(event, "logo")}
                                />
                                <label className="custom-file-label" htmlFor="input-logo" ref={this.fileInputLogoLabel}>
                                  Selecionar Imagem de Logo
                                </label>
                              </div>
                            </FormGroup>                            
                          </Col>
                          <Col lg="12">
                            <label
                              className="form-control-label"                              
                            >
                              Background
                            </label>
                            <div className="sweet-loading" style={{textAlign: "center"}}>
                              <BeatLoader
                                size={15}
                                //size={"150px"} this also works
                                color={"#123abc"}
                                loading={this.state.loading.bg}
                              />
                            </div>
                            <FormGroup>
                              <div className="custom-file">
                                <input
                                  className="custom-file-input"
                                  id="input-background"
                                  lang="pt-br"
                                  type="file"
                                  name="background"
                                  ref={this.fileInputBg}                                                                 
                                  onChange={event => this.handleImage(event, "bg")}
                                />
                                <label className="custom-file-label" htmlFor="input-background" ref={this.fileInputBgLabel}>
                                  Selecionar Imagem de Background
                                </label>
                              </div>
                            </FormGroup>                            
                          </Col>
                          <Col lg="12">
                            <label
                              className="form-control-label"                              
                            >
                              Descrição
                            </label>
                            <FormGroup>
                              <ReactQuill
                                value={this.state.account.description}
                                onChange={this.handleTextEditor}
                                theme="snow"
                                modules={{
                                  toolbar: [
                                    ["bold", "italic"],
                                    ["link", "blockquote", "code", "image"],
                                    [
                                      {
                                        list: "ordered"
                                      },
                                      {
                                        list: "bullet"
                                      }
                                    ]
                                  ]
                                }}
                              />
                            </FormGroup>                            
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-email"
                              >
                                Email Pagseguro
                              </label>
                              <Input
                                id="input-email"
                                placeholder="example@example.com"
                                type="email"
                                name="emailPagseguro"
                                value={this.state.account.emailPagseguro}
                                onChange={this.handleChange}
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-email"
                              >
                                Token Pagseguro
                              </label>
                              <Input
                                id="input-token"
                                placeholder="8E86BFCB5168439382865BBB5897B900"
                                type="text"
                                name="tokenPagseguro"
                                value={this.state.account.tokenPagseguro}
                                onChange={this.handleChange}
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="12">
                            <FormGroup>
                              <label
                                  className="form-control-label"
                                  htmlFor="input-status"
                                >
                                  Status
                              </label><br/>
                              <label className="custom-toggle">
                                <input                                    
                                  type="checkbox" 
                                  name="status"
                                  checked={this.state.account.status}                                
                                  onChange={this.handleChange}
                                />
                                <span
                                  className="custom-toggle-slider rounded-circle"
                                  data-label-off="off"
                                  data-label-on="on"
                                />
                              </label>
                            </FormGroup>
                            
                          </Col>
                        </Row>
                      </div>
                      <hr className="my-4" />
                     
                      
                      <h6 className="heading-small text-muted mt-2 mb-4">
                        Subcontas
                      </h6>
                      <div className="pl-lg-4">                        
                   
                        {this.state.account.subAccounts.map((subAccount, idx) => (                                                                                  
                          <Row className="mb-5">
                            <Col md="12">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-address"
                                >
                                  Subconta
                                </label>
                                <Select2
                                  value={ subAccount }
                                  className="form-control"
                                  defaultValue="Nenhum" 
                                  id={`select-subAccount${idx}`}
                                  options={{
                                    placeholder: "Nenhum",                                    
                                  }}
                                  data={this.state.accounts}
                                  onSelect={event => this.handleChangeSubAccount(event, idx)}                                  
                                />
                              </FormGroup>
                              <div style={{ textAlign: "left" }}>                                           
                                {/* <Button color="danger" type="button" onClick={this.handleRemoveSubAccount(idx)}> */}
                                <Button color="danger" type="button" onClick={ () => this.handleRemoveSubAccount(idx) } >
                                  Remover conta
                                </Button>                                  
                              </div>
                            </Col>                                                
                          </Row>
                        ))}
       
                          <div className="mt-3" style={{ textAlign: "right" }}>                                                                             
                            <Button color="success" type="button" onClick={ () => this.handleAddSubAccount() } >  
                              Adicionar conta
                            </Button>
                          </div>

                      </div>
                      
                      <hr className="my-4" />
                      
                      
                      <h6 className="heading-small text-muted mb-4">
                        Informações de contato
                      </h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-owner"
                              >
                                Responsável
                              </label>
                              <Input                                
                                id="input-owner"
                                placeholder="Nome do responsável"
                                type="text"
                                name="owner"
                                value={this.state.account.owner}
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
                                Email
                              </label>
                              <Input
                                id="input-email"
                                placeholder="example@example.com"
                                type="email"
                                name="email"
                                value={this.state.account.email}
                                onChange={this.handleChange}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-address"
                              >
                                Endereço
                              </label>
                              <Input                                
                                id="input-address"
                                placeholder="Endereço"
                                type="text"
                                name="address"
                                value={this.state.account.local.address}
                                onChange={this.handleAddress}
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
                                Cidade
                              </label>
                              <Input                                
                                id="input-city"
                                placeholder="Cidade"
                                type="text"
                                name="city"
                                value={this.state.account.local.city}
                                onChange={this.handleAddress}
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-country"
                              >
                                País
                              </label>
                              <Input                                
                                id="input-country"
                                placeholder="País"
                                type="text"
                                name="country"
                                value={this.state.account.local.country}
                                onChange={this.handleAddress}
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-country"
                              >
                                CEP
                              </label>
                              <Input
                                id="input-postal-code"
                                placeholder="CEP"
                                type="number"
                                name="postalCode"
                                value={this.state.account.local.postalCode}
                                onChange={this.handleAddress}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-phone"
                              >
                                Telefone
                              </label>
                              <Input                                
                                id="input-phone"
                                placeholder="(XX) XXXX-XXXX"
                                type="text"
                                name="phone"
                                value={this.state.account.phone}
                                onChange={this.handleChange}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-website"
                              >
                                Website
                              </label>
                              <Input                                
                                id="input-website"
                                placeholder="https://www.example.com.br"
                                type="text"
                                name="website"
                                value={this.state.account.website}
                                onChange={this.handleChange}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-ifood"
                              >
                                iFood
                              </label>
                              <Input                                
                                id="input-ifood"
                                placeholder="https://www.ifood.com.br"
                                type="text"
                                name="ifood"
                                value={this.state.account.ifood}
                                onChange={this.handleChange}
                              />
                            </FormGroup>
                          </Col>
                        </Row>                        
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-appAndroid"
                              >
                                Aplicativo Android
                              </label>
                              <Input                                
                                id="input-appAndroid"
                                placeholder="https://play.google.com/store/apps/"
                                type="text"
                                name="appAndroid"
                                value={this.state.account.appAndroid}
                                onChange={this.handleChange}
                              />
                            </FormGroup>
                          </Col>
                        </Row>                        
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-appIos"
                              >
                                Aplicativo IOS
                              </label>
                              <Input                                
                                id="input-appIos"
                                placeholder="https://apps.apple.com/us/app/"
                                type="text"
                                name="appIos"
                                value={this.state.account.appIos}
                                onChange={this.handleChange}
                              />
                            </FormGroup>
                          </Col>
                        </Row>                        
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-facebook"
                              >
                                Facebook
                              </label>
                              <Input                                
                                id="input-facebook"
                                placeholder="https://www.facebook.com/"
                                type="text"
                                name="facebook"
                                value={this.state.account.social.facebook}
                                onChange={this.handleSocial}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-instagram"
                              >
                                Instagram
                              </label>
                              <Input                                
                                id="input-instagram"
                                placeholder="https://www.instagram.com/"
                                type="text"
                                name="instagram"
                                value={this.state.account.social.instagram}
                                onChange={this.handleSocial}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-maps"
                              >
                                Google Maps
                              </label>
                              <Input                                
                                id="input-maps"
                                placeholder='<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14636.432338298344!2d-46.8477273!3d-23.4926161!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd13582041b4609f6!2sWigoo!5e0!3m2!1spt-BR!2sbr!4v1579277691583!5m2!1spt-BR!2sbr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>'
                                type="text"
                                name="maps"
                                value={this.state.account.maps}
                                onChange={this.handleChange}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                      <hr className="my-4" />

                      <h6 className="heading-small text-muted mb-4">Extras</h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="12">
                            <label
                              className="form-control-label"                              
                            >
                              Unidades
                            </label>
                            <FormGroup>
                              <ReactQuill
                                value={this.state.account.units}
                                onChange={this.handleTextEditorLocal}
                                theme="snow"
                                modules={{
                                  toolbar: [
                                    ["bold", "italic"],
                                    ["link", "blockquote", "code", "image"],
                                    [
                                      {
                                        list: "ordered"
                                      },
                                      {
                                        list: "bullet"
                                      }
                                    ]
                                  ]
                                }}
                              />
                            </FormGroup>                            
                          </Col>
                        </Row>
                        <FormGroup>
                          <label className="form-control-label">Observações</label>
                          <Input
                            placeholder="Digite suas observações aqui"
                            rows="4"
                            type="textarea"   
                            name="observations"
                            value={this.state.account.observations}
                            onChange={this.handleChange}                         
                          />
                        </FormGroup>
                      </div>                      
                      <div style={{ textAlign: "right" }}>                                           
                        <Button color="primary" type="submit">
                          Salvar Alterações
                        </Button>
                      </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </Form>
      </>
    );
  }
}

export default Profile;
