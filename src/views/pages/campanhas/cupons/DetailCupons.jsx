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
  CardFooter,
  CardImg,
  CardTitle,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,  
  InputGroupAddon,
  InputGroupText,
  InputGroup,
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
// react plugin that creates an input with badges
import TagsInput from "react-tagsinput";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";
// react plugin used to create datetimepicker
import * as moment from 'moment';
import 'moment/locale/pt-br';

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
      campaign: {
        _id: "",
        account: {
          id: "",
          name: ""
        },     
        name: "",        
        utm: "",    
        color: "#11cdef",
        category: {
          id: "",
          name: ""
        },     
        logo: "",    
        background: "",    
        images: {
          image1: "",
          image2: "",
          image3: "",
          image4: ""
        },       
        status: true,                                                         
        voucher: {
          title: "",   
          spotlight: "",   
          promotion: "",   
          description: "",   
          period: "",
          rules: "",
          redirect: "",
        },
        period: {
          start: "",
          end: ""
        },
        tags: ["Wigoo", "Voucher", "Desconto", "Promoção"],
        observations:"",
        unique: true    
      }, 
      categories: [
        { id: "Restaurante", text: "Restaurante" },
        { id: "Academia", text: "Academia" },
        { id: "Vestuário", text: "Vestuário" },
        { id: "Serviços", text: "Serviços" },
        { id: "Cursos", text: "Cursos" },
        { id: "Clínica", text: "Clínica" }
      ],  
      accounts: [], 
      new: this.props.match.params.action === "add" ? true : false ,
      newObjectId: new ObjectID(),
      loading:{
        logo: false,
        bg: false,
        image1: false,
        image2: false,
        image3: false,
        image4: false,
      }
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleVoucher = this.handleVoucher.bind(this);
    this.handleSocial = this.handleSocial.bind(this);
    this.handleTextEditor = this.handleTextEditor.bind(this);    
    this.fileInputLogo = React.createRef();    
    this.fileInputLogoLabel = React.createRef();    
    this.fileInputImage1 = React.createRef();    
    this.fileInputimage1Label = React.createRef();    
    this.fileInputImage2 = React.createRef();    
    this.fileInputimage2Label = React.createRef();    
    this.fileInputImage3 = React.createRef();    
    this.fileInputimage3Label = React.createRef();    
    this.fileInputImage4 = React.createRef();    
    this.fileInputimage4Label = React.createRef();        
  }

  //get data from API
  componentDidMount(){      
    moment.locale('pt-BR');     
    
    if(this.props.match.params.id) 
      this.getData(); 
      
    this.getDataAccount()     
        

  }  
  
  getData = () => {           
    api.get(`/campaign/${this.props.match.params.id}`)
    .then(function (response) {
      // handle success      
      this.setState(prevState => ({
        campaign: {   
          ...prevState.campaign,
          ...response.data,  
          period: {
            start: moment(response.data.period.start),
            end: moment(response.data.period.end),
          }             
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

  postData = campaignData => {
    console.log("Inseriu mais um registro");        
    campaignData._id = this.newObjectId;    
    api.post("/campaign", {
      ...campaignData
    })
    .then(function (response) {
      console.log(response);
      this.confirmedAlert()
      this.setState({ new: false });
      this.setState(prevState => ({
        campaign: {   
          ...prevState.campaign,     
          _id: response.data._id
        }
      }));
    }.bind(this))
    .catch(function (error) {
      console.log(error);
      this.errorAlert();
    }.bind(this));
  }
  
  putData = campaignData => {
    console.log("Alterou registro");      
    api.put(`/campaign/${this.state.campaign._id}`, {
      ...campaignData
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
    api.delete(`/campaign/${this.state.campaign._id}`)
    .then(function (response) {
      console.log(response);
      this.props.history.push('/admin/campanhas/cupons');
    }.bind(this))
    .catch(function (error) {
      console.log(error);
      this.errorAlert();
    }.bind(this));
  }


  getDataAccount = () => {           
    api.get(`/account/select`)
    .then(function (response) {
      // handle success     
      let itemsAccount = [];
      response.data.map((item) =>
        itemsAccount.push({ id: item._id, text: item.name})
      );           
      this.setState({ accounts: itemsAccount });         
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


  putDataImage = imageUpload => {
    console.log("Adicionou imagem");      
    api.put(`/image/${this.state.campaign._id}`, {
      imageUpload
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


  handleChange(event) {    
                

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    console.log(value);


    this.setState(prevState => ({
      campaign: {   
        ...prevState.campaign,     
        [name]: value
      }
    }));

    console.log(this.state.campaign);
    
  }

  handleSelect(event){    
    const id = event.params.data.id;           
    const value = event.params.data.text;  
    
    console.log(id);
    console.log(value);
    console.log(event);

    switch(event.target.id) {
      case 'select-account':
        this.setState(prevState => ({
          campaign: {   
            ...prevState.campaign,     
            account: {
              id: id,
              name: value
            }
          }
        }));
        return
      case 'select-category':
        this.setState(prevState => ({
          campaign: {   
            ...prevState.campaign,     
            category: {
              id: id,
              name: value
            }
          }
        }));  
        console.log(this.state.campaign);      
        return
      default:
        return
    }

    
  }

  handleImage(e, typeImage) {

    const file = new Blob([e.target.files[0]], { type:  'image/png'}); // kind of works and choses stream as content type of file (not request)    

    let formData = new FormData();    
    formData.append('file', file, file.fileName);


    switch(typeImage) {

      case 'logo':

        const currentLogo =  this.state.campaign.logo;
          
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
              campaign: {   
                ...prevState.campaign,                 
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

        const currentBg =  this.state.campaign.background;
          
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
              campaign: {   
                ...prevState.campaign,                 
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

        
          const currentImage =  this.state.campaign.images[typeImage];
          
          formData.append('id', new ObjectID().toHexString() );
          if(currentImage !== ""){
            formData.append('idRemove', currentImage );
            formData.append('remove', true);
          } else {            
            formData.append('remove', false);
          }
          
            
          this.setState(prevState => ({
            loading: {   
              ...prevState.loading,                 
              [typeImage]: true
            }
          }));

                    
          this['fileInput' + typeImage + 'Label'].current.innerText = e.target.files[0].name;  

          api.post("/image", formData, {
            headers: {
              "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
            }
          })
          .then(function (response) {
            
            this.setState(prevState => ({
              campaign: {   
                ...prevState.campaign,                 
                images: {
                  ...prevState.campaign.images, 
                  [typeImage]: response.data.public_id
                }
              }
            }));
            this.setState(prevState => ({
              loading: {   
                ...prevState.loading,                 
                [typeImage]: false
              }
            }));
            
          }.bind(this))
          .catch(function (error) {
            console.log(error);
          });        


        return;        
    }    
  }

  handleTextEditor = value => {
    this.setState(prevState => ({
      campaign: {   
        ...prevState.campaign, 
        voucher: {
          ...prevState.campaign.voucher, 
          rules: value
        } 
      }
    }));
        
  };

  handleVoucher(event) {                    
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;;

    this.setState(prevState => ({
      campaign: {   
        ...prevState.campaign,   
        voucher: {
          ...prevState.campaign.voucher, 
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
      campaign: {   
        ...prevState.campaign,   
        social: {
          ...prevState.campaign.social, 
          [name]: value
        }        
      }
    }));    
  }

  handleTagsinput = tags => {    
    this.setState(prevState => ({
      campaign: {   
        ...prevState.campaign,   
        tags: tags   
      }
    })); 
  };

  createMarkup() {
    return {
      __html: this.state.campaign.voucher.rules
    };
  }

  handleClick = (element) => {    

    switch(element) {
      case 'fileInputLogo':        
        this.fileInputLogo.current.click();     
        return;

      case 'fileInputImagem1':        
        this.fileInputImage1.current.click();     
        return;
        
      case 'fileInputImagem2':
        this.fileInputImage2.current.click();     
        return;
        
      case 'fileInputImagem3':
        this.fileInputImage3.current.click();     
        return;
        
      case 'fileInputImagem4':
        this.fileInputImage4.current.click();     
        return;
        
      default:
        return
    }

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
          onConfirm={() => this.state.new ? this.postData(this.state.campaign) : this.putData(this.state.campaign) }           
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
          onConfirm={() => this.deleteData(this.state.campaign) }           
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

  render() {

    const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'djmiq2iq6'});
    return (
      <>
        {this.state.alert}
        {this.state.new ? (
          <SimpleHeader name="Novo Cupom" parentName="Cupom" />
        ) : (
          <BackHeader name={this.state.campaign.name} parentName="Cupom" parentPath="/admin/campanhas/cupons" />
        )}     
        <img src={cloudinaryCore.url('')} alt=""/>   
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
                                src={require("assets/img/theme/placeholder.png")}
                              />
                            </a>
                          </Col>
                          <div className="col ml--2">
                            <h4 className="mb-0">
                              <a href="#1" onClick={e => e.preventDefault()}>
                                Campanha Teste
                              </a>
                            </h4>
                            <span className="text-success">●</span>{" "}
                            <small>Online</small>
                          </div>
                          <Col className="col-auto">
                            <Button color="primary" size="sm" type="button">
                              Ver
                            </Button>
                          </Col>
                        </Row>
                      </ListGroupItem>                      
                    </ListGroup>
                  </CardBody>
                </Card>

                <Card className="card-profile sticky-top">                  
                  {this.state.campaign.background !== undefined && this.state.campaign.background !== "" ? (
                      <CardImg
                        alt="..."
                        src={this.state.campaign.background}
                        top
                      />
                    ) : (
                      // <CardImg
                      //   alt="..."
                      //   src={require("assets/img/theme/placeholder.png")}
                      //   top
                      // />
                      <CardHeader style={{ height: "180px", backgroundColor: this.state.campaign.color}}>                        
                      </CardHeader>
                    )}  
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#1" onClick={e => e.preventDefault()}>
                          
                          {this.state.campaign.logo !== undefined && this.state.campaign.logo !== "" ? (
                            <img
                              alt="..."
                              className="rounded-circle"                              
                              src={cloudinaryCore.url(this.state.campaign.logo)}
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
                        href={`${BASE_URL}/${this.state.campaign.utm}`}    
                        target="_blank"                    
                        size="sm"
                      >
                        Ver Página
                      </Button>
                      <Button
                        className="float-right"
                        color="default"
                        type="button"
                        href={this.state.campaign.website !== undefined && this.state.campaign.website !== ""  ? this.state.campaign.utm : `${BASE_URL}/${this.state.campaign.utm}`}                           
                        target="_blank"  
                        size="sm"
                      >
                        Website
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody className="pt-0">                    
                    <div className="text-center">
                      <h5 className="h3">
                        {this.state.campaign.voucher.title}                        
                      </h5>
                      <div className="h5 font-weight-300">
                        <i className="ni location_pin mr-2" />
                        {this.state.campaign.voucher.spotlight}
                      </div>
                      <div className="h5 mt-2">                                                
                        <div className="display-2">
                          {this.state.campaign.voucher.promotion}
                        </div>
                      </div>             
                      <div className="mt-2">                        
                        {this.state.campaign.voucher.description}
                      </div>             
                      <div className="h5 mt-2">                        
                        {this.state.campaign.voucher.period}
                      </div>     
                      <div className="mt-4">                        
                        {/* {{__html: this.state.campaign.voucher.rules}} */}
                        <div className="voucher-rules" dangerouslySetInnerHTML={this.createMarkup()} />
                      </div>  
                      <div className="h5 mt-2">                        
                        {this.state.campaign.voucher.redirect}
                      </div>          
                    </div>
                  </CardBody>
                  <CardFooter className="bg-transparent">
                    <div className="text-center">
                      <div className="h5">
                        <p>Apresente o código abaixo</p>                        
                      </div> 
                      <img src={require("assets/img/theme/qrcode.jpg")} alt=""/>
                    </div>
                  </CardFooter>
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
                          <h3 className="mb-0">Novo Cupom</h3>
                        ) : (
                          <h3 className="mb-0">Editar Cupom</h3>
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
                          <Col lg="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-category"
                              >
                                Cliente
                              </label>
                              <Select2
                                  value={ this.state.campaign.account.id }
                                  className="form-control"
                                  defaultValue="Outros" 
                                  id="select-account"                                 
                                  options={{
                                    placeholder: "Cliente",                                    
                                  }}
                                  data={this.state.accounts}
                                  onSelect={event => this.handleSelect(event)}                                  
                                />
                            </FormGroup>
                          </Col>
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
                                placeholder="Nome da campanha"
                                type="text"
                                name="name"
                                value={this.state.campaign.name}
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
                                value={this.state.campaign.utm}
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
                                value={this.state.campaign.color}                                
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
                                  value={ this.state.campaign.category.id }
                                  className="form-control"
                                  defaultValue="Outros"   
                                  id='select-category'                               
                                  options={{
                                    placeholder: "Categoria",
                                    tags: true
                                  }}
                                  data={this.state.categories}
                                  onSelect={event => this.handleSelect(event)}                                  
                                />
                            </FormGroup>
                            
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={6}>
                            <FormGroup>
                              <label
                                className="form-control-label"                              
                              >
                                Data inicial
                              </label>
                              <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="ni ni-calendar-grid-58" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <ReactDatetime
                                  inputProps={{
                                    placeholder: "Data inicial"
                                  }}                                  
                                  value={this.state.campaign.period.start}                                  
                                  timeFormat={false}
                                  renderDay={(props, currentDate, selectedDate) => {
                                    let classes = props.className;
                                    if (
                                      this.state.campaign.period.start &&
                                      this.state.campaign.period.end &&
                                      this.state.campaign.period.start._d + "" === currentDate._d + ""
                                    ) {
                                      classes += " start-date";
                                    } else if (
                                      this.state.campaign.period.start &&
                                      this.state.campaign.period.end &&
                                      new Date(this.state.campaign.period.start._d + "") <
                                        new Date(currentDate._d + "") &&
                                      new Date(this.state.campaign.period.end._d + "") >
                                        new Date(currentDate._d + "")
                                    ) {
                                      classes += " middle-date";
                                    } else if (
                                      this.state.campaign.period.end &&
                                      this.state.campaign.period.end._d + "" === currentDate._d + ""
                                    ) {
                                      classes += " end-date";
                                    }
                                    return (
                                      <td {...props} className={classes}>
                                        {currentDate.date()}
                                      </td>
                                    );
                                  }}
                                  isValidDate={(current) => {
                                      return current.isAfter( ReactDatetime.moment().subtract(1, 'day') );                                         
                                    }
                                  }
                                  onChange={e => {
                                      console.log(e);                                 
                                      console.log(this.state.campaign.period.start);                                 
                                      console.log(this.state.campaign.period.end);           
                                      this.setState({ startDate: e});
                                      // const dateL = moment(e._d).format('YYYY-MM-D');
                                      const dateL = e;
                                      this.setState(prevState => ({
                                        campaign: {   
                                          ...prevState.campaign, 
                                          period: {
                                            ...prevState.campaign.period,
                                            start: dateL
                                          }
                                        }
                                      }));                                                                 
                                      console.log(this.state.campaign.period);                                 
                                    }
                                  }
                                />
                              </InputGroup>
                            </FormGroup>
                          </Col>
                          <Col xs={6}>
                            <label
                              className="form-control-label"                              
                            >
                              Data final
                            </label>
                            <FormGroup>
                              <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="ni ni-calendar-grid-58" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <ReactDatetime
                                  inputProps={{
                                    placeholder: "Data final"
                                  }}
                                  value={this.state.campaign.period.end}  
                                  timeFormat={false}
                                  renderDay={(props, currentDate, selectedDate) => {
                                    let classes = props.className;
                                    if (
                                      this.state.campaign.period.start &&
                                      this.state.campaign.period.end &&
                                      this.state.campaign.period.start._d + "" === currentDate._d + ""
                                    ) {
                                      classes += " start-date";
                                    } else if (
                                      this.state.campaign.period.start &&
                                      this.state.campaign.period.end &&
                                      new Date(this.state.campaign.period.start._d + "") <
                                        new Date(currentDate._d + "") &&
                                      new Date(this.state.campaign.period.end._d + "") >
                                        new Date(currentDate._d + "")
                                    ) {
                                      classes += " middle-date";
                                    } else if (
                                      this.state.campaign.period.end &&
                                      this.state.campaign.period.end._d + "" === currentDate._d + ""
                                    ) {
                                      classes += " end-date";
                                    }
                                    return (
                                      <td {...props} className={classes}>
                                        {currentDate.date()}
                                      </td>
                                    );
                                  }}
                                  isValidDate={(current) => {
                                      return current.isAfter( ReactDatetime.moment().subtract(1, 'day') );                                         
                                    }
                                  }
                                  onChange={e => {
                                      this.setState({ endDate: e });
                                      // const dateL = moment(e._d).format('YYYY-MM-D');
                                      const dateL = e;
                                      this.setState(prevState => ({
                                        campaign: {   
                                          ...prevState.campaign, 
                                          period: {
                                            ...prevState.campaign.period,
                                            end: dateL
                                          }
                                        }
                                      }));  

                                      console.log(this.state.campaign.period)
                                    } 
                                  }
                                />
                              </InputGroup>
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
                          <Col lg="6">
                            <label
                              className="form-control-label"                              
                            >
                              Imagem 1
                            </label>
                            <div className="sweet-loading" style={{textAlign: "center"}}>
                              <BeatLoader
                                size={15}
                                //size={"150px"} this also works
                                color={"#123abc"}
                                loading={this.state.loading.image1}
                              />
                            </div>

                            {this.state.campaign.images.image1 !== undefined && this.state.campaign.images.image1 !== "" ? (
                              <Card>
                                <CardImg
                                  alt="..."                                                                   
                                  src={cloudinaryCore.url(this.state.campaign.images.image1)}
                                  top
                                  onClick={() => this.handleClick("fileInputImagem1")}
                                />
                              </Card>
                            ) : (
                              <Card>
                                <CardImg
                                  alt="..."
                                  src={require("assets/img/theme/placeholder.png")}
                                  top
                                  onClick={() => this.handleClick("fileInputImagem1")}
                                />
                              </Card>
                            )}
                            
                            <FormGroup>
                              <div className="custom-file">
                                <input
                                  className="custom-file-input"
                                  id="input-image1"
                                  lang="pt-br"
                                  type="file"
                                  name="image1"
                                  ref={this.fileInputImage1}                                                                 
                                  onChange={event => this.handleImage(event, "image1")}
                                />
                                <label className="custom-file-label" htmlFor="input-image1" ref={this.fileInputimage1Label}>
                                  Selecionar Imagem1
                                </label>
                              </div>
                            </FormGroup>    
                                                      
                          </Col>
                          <Col lg="6">
                            <label
                              className="form-control-label"                              
                            >
                              Imagem 2
                            </label>
                            <div className="sweet-loading" style={{textAlign: "center"}}>
                              <BeatLoader
                                size={15}
                                //size={"150px"} this also works
                                color={"#123abc"}
                                loading={this.state.loading.image2}
                              />
                            </div>
                            {this.state.campaign.images.image2 !== undefined && this.state.campaign.images.image2 !== "" ? (
                              <Card>
                                <CardImg
                                  alt="..."                                                                    
                                  src={cloudinaryCore.url(this.state.campaign.images.image2)}
                                  top
                                  onClick={() => this.handleClick("fileInputImagem2")}
                                />
                              </Card>
                            ) : (
                              <Card>
                                <CardImg
                                  alt="..."
                                  src={require("assets/img/theme/placeholder.png")}
                                  top
                                  onClick={() => this.handleClick("fileInputImagem2")}

                                />
                              </Card>
                            )}  
                            <FormGroup>
                              <div className="custom-file">
                                <input
                                  className="custom-file-input"
                                  id="input-image2"
                                  lang="pt-br"
                                  type="file"
                                  name="image2"
                                  ref={this.fileInputImage2}                                                                 
                                  onChange={event => this.handleImage(event, "image2")}
                                />
                                <label className="custom-file-label" htmlFor="input-image2" ref={this.fileInputimage2Label}>
                                  Selecionar Imagem2
                                </label>
                              </div>
                            </FormGroup>                            
                          </Col>
                          <Col lg="6">
                            <label
                              className="form-control-label"                              
                            >
                              Imagem 3
                            </label>
                            <div className="sweet-loading" style={{textAlign: "center"}}>
                              <BeatLoader
                                size={15}
                                //size={"150px"} this also works
                                color={"#123abc"}
                                loading={this.state.loading.image3}
                              />
                            </div>
                            {this.state.campaign.images.image3 !== undefined && this.state.campaign.images.image3 !== "" ? (
                              <Card>
                                <CardImg
                                  alt="..."                                                                    
                                  src={cloudinaryCore.url(this.state.campaign.images.image3)}
                                  top
                                  onClick={() => this.handleClick("fileInputImagem3")}
                                />
                              </Card>
                            ) : (
                              <Card>
                                <CardImg
                                  alt="..."
                                  src={require("assets/img/theme/placeholder.png")}
                                  top
                                  onClick={() => this.handleClick("fileInputImagem3")}

                                />
                              </Card>
                            )}  
                            <FormGroup>
                              <div className="custom-file">
                                <input
                                  className="custom-file-input"
                                  id="input-image3"
                                  lang="pt-br"
                                  type="file"
                                  name="image3"
                                  ref={this.fileInputImage3}                                                                 
                                  onChange={event => this.handleImage(event, "image3")}
                                />
                                <label className="custom-file-label" htmlFor="input-image3" ref={this.fileInputimage3Label}>
                                  Selecionar Imagem 3
                                </label>
                              </div>
                            </FormGroup>                            
                          </Col>
                          <Col lg="6">
                            <label
                              className="form-control-label"                              
                            >
                              Imagem 4
                            </label>
                            <div className="sweet-loading" style={{textAlign: "center"}}>
                              <BeatLoader
                                size={15}
                                //size={"150px"} this also works
                                color={"#123abc"}
                                loading={this.state.loading.image4}
                              />
                            </div>
                            {this.state.campaign.images.image4 !== undefined && this.state.campaign.images.image4 !== "" ? (
                              <Card>
                                <CardImg
                                  alt="..."                                                                    
                                  src={cloudinaryCore.url(this.state.campaign.images.image4)}
                                  top
                                  onClick={() => this.handleClick("fileInputImagem4")}
                                />
                              </Card>
                            ) : (
                              <Card>
                                <CardImg
                                  alt="..."
                                  src={require("assets/img/theme/placeholder.png")}
                                  top
                                  onClick={() => this.handleClick("fileInputImagem4")}

                                />
                              </Card>
                            )}  
                            <FormGroup>
                              <div className="custom-file">
                                <input
                                  className="custom-file-input"
                                  id="input-image4"
                                  lang="pt-br"
                                  type="file"
                                  name="image4"
                                  ref={this.fileInputImage4}                                                                 
                                  onChange={event => this.handleImage(event, "image4")}
                                />
                                <label className="custom-file-label" htmlFor="input-image4" ref={this.fileInputimage4Label}>
                                  Selecionar Imagem 4
                                </label>
                              </div>
                            </FormGroup>                            
                          </Col>
                          
                        </Row>
                        <Row>
                          <Col lg="12">
                            <FormGroup>
                              <label
                                  className="form-control-label"
                                  htmlFor="input-tags"
                                >
                                  Tags
                              </label><br/>
                              <TagsInput
                                onlyUnique
                                className="bootstrap-tagsinput"
                                onChange={this.handleTagsinput}
                                value={this.state.campaign.tags}
                                tagProps={{ className: "tag badge mr-1" }}
                                inputProps={{
                                  className: "",
                                  placeholder: ""
                                }}
                              />
                            </FormGroup>
                            
                          </Col>
                          <Col lg="12">
                            <FormGroup>
                              <label
                                  className="form-control-label"
                                  htmlFor="input-unique"
                                >
                                  Voucher Único
                              </label><br/>
                              <label className="custom-toggle">
                                <input                                    
                                  type="checkbox" 
                                  name="unique"
                                  checked={this.state.campaign.unique}                                
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
                                  checked={this.state.campaign.status}                                
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

                      <h6 className="heading-small text-muted mb-4">
                        Informações do cupom
                      </h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-title"
                              >
                                Título
                              </label>
                              <Input                                
                                id="input-title"
                                placeholder="Promoção de..."
                                type="text"
                                name="title"
                                value={this.state.campaign.voucher.title}
                                onChange={this.handleVoucher}
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-spotlight"
                              >
                                Destaque
                              </label>
                              <Input                                
                                id="input-spotlight"
                                placeholder="Vale um"
                                type="text"
                                name="spotlight"
                                value={this.state.campaign.voucher.spotlight}
                                onChange={this.handleVoucher}
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-promotion"
                              >
                                Promoção
                              </label>
                              <Input                                
                                id="input-promotion"
                                placeholder="50%"
                                type="text"
                                name="promotion"
                                value={this.state.campaign.voucher.promotion}
                                onChange={this.handleVoucher}
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="12">                            
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-description"
                              >
                                Descrição
                              </label>
                              <Input                                
                                id="input-description"
                                placeholder="Voucher equivale a 50% de desconto..."
                                type="text"
                                name="description"
                                value={this.state.campaign.voucher.description}
                                onChange={this.handleVoucher}
                              />
                            </FormGroup>                           
                          </Col>
                          <Col lg="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-period"
                              >
                                Período
                              </label>
                              <Input                                
                                id="input-period"
                                placeholder="Válido até dia 31/01/2019"
                                type="text"
                                name="period"
                                value={this.state.campaign.voucher.period}
                                onChange={this.handleVoucher}
                              />
                            </FormGroup>
                          </Col>   
                          <Col lg="12">
                            <label
                              className="form-control-label"                              
                            >
                              Regulamento
                            </label>
                            <FormGroup>
                              <ReactQuill
                                value={this.state.campaign.voucher.rules}
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
                          <Col md="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-redirect"
                              >
                                Redirect
                              </label>
                              <Input                                
                                id="input-redirect"
                                placeholder="https://www.example.com.br"
                                type="text"
                                name="redirect"
                                value={this.state.campaign.voucher.redirect}
                                onChange={this.handleVoucher}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                      <hr className="my-4" />

                      <h6 className="heading-small text-muted mb-4">Extras</h6>
                      <div className="pl-lg-4">
                        <FormGroup>
                          <label className="form-control-label">Observações</label>
                          <Input
                            placeholder="Digite suas observações aqui"
                            rows="4"
                            type="textarea"   
                            name="observations"
                            value={this.state.campaign.observations}
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
