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
// react plugin that prints a given react component
import ReactToPrint from "react-to-print";
// react library for routing
import { Link } from "react-router-dom";
// react component for creating dynamic tables
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
// react component used to create sweet alerts
import ReactBSAlert from "react-bootstrap-sweetalert";
import * as moment from 'moment';
import 'moment/locale/pt-br';
// reactstrap components
import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  // CardHeader,
  Container,
  Row,
  Col,
  Modal,
  UncontrolledTooltip
} from "reactstrap";
// core components
import DatatableHeader from "components/Headers/DatatableHeader.jsx";
import DetailCupons from "views/pages/campanhas/cupons/DetailCupons.jsx";

import api from "services/api";

const pagination = paginationFactory({
  page: 1,
  alwaysShowAllBtns: true,
  showTotal: true,
  withFirstAndLast: false,
  sizePerPageRenderer: ({ options, currSizePerPage, onSizePerPageChange }) => (
    <div className="dataTables_length" id="datatable-basic_length">
      <label>
        Show{" "}
        {
          <select
            name="datatable-basic_length"
            aria-controls="datatable-basic"
            className="form-control form-control-sm"
            onChange={e => onSizePerPageChange(e.target.value)}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        }{" "}
        entries.
      </label>
    </div>
  )
});



const { SearchBar } = Search;

const BtExportCSV = (props) => {
  const handleClick = () => {
    props.onExport();
  };
  return (
    <>         
      <Button
          className="buttons-copy buttons-html5"
          color="default"
          size="sm"
          id="csv-tooltip"
          onClick={
            handleClick
          }
        >
          <span>Exportar</span>
      </Button>   
    </> 
  );
};

class ReactBSTablesPedido extends React.Component {
  state = {
    alert: null,
    tableData: [],
    exampleModal: false,
    idSelected: ""
  };

  //get data from API
  componentDidMount(){
    this.loadData();
    moment.locale('pt-BR');
  }

  loadData = async () => {
    const response = await api.post("/orders", { subAccounts: ["5e1f0726d1c5be03151a5de5","5e83cc7078581645a450cfc9"] });
    console.log(response);
    this.setState({
      tableData: response.data
    })    
  }


  rankFormatter = (cell, row, rowIndex, formatExtraData) => {
    return (
      <>        
        <i className={ formatExtraData[cell] } />
        <Button
            className="buttons-copy buttons-html5"
            color="info"
            size="sm"
            id="edit-tooltip"   
            to={`/admin/campanhas/cupons/edit/${row._id}`}             
            tag={Link}       
          >
            <span>Ver</span>
        </Button>  
        <Button
            className="buttons-copy buttons-html5"
            color="danger"
            size="sm"
            id="delete-tooltip"               
            onClick={() => {                
                this.setState({idSelected: row._id});
                this.confirmAlert(row._id);
              }
            }     
          >
            <span>Extornar</span>
        </Button>  
      </>

    );
  }

  statusFormatter = (cell, row, rowIndex, formatExtraData) => {

    switch(cell) {
      case 1:
        return <Badge color="primary">Aguardando pagamento</Badge>        
      case 2:  
        return <Badge color="warning">Em an??lise</Badge>
      case 3:  
        return <Badge color="info">Paga</Badge>
      case 4:  
        return <Badge color="success">Dispon??vel</Badge>
      case 5:  
        return <Badge color="warning">Em disputa</Badge>
      case 6:  
        return <Badge color="secondary">Devolvida</Badge>
      case 7:  
        return <Badge color="danger">Cancelada</Badge>
      default:
        return
    }

  }
  
  methodFormatter = (cell, row, rowIndex, formatExtraData) => {

    switch(cell) {
      case 1:
        return <Badge color="info">Cart??o de cr??dito</Badge>        
      case 2:  
        return <Badge color="info">Boleto</Badge>
      case 3:  
        return <Badge color="info">D??bito Online</Badge>
      case 4:  
        return <Badge color="info">Saldo Pagseguro</Badge>
      case 5:  
        return <Badge color="info">Oi Paggo</Badge>      
      case 7:  
        return <Badge color="info">Dep??sito em conta</Badge>
      default:
        return
    }

  }
  
  validationFormatter = (cell, row, rowIndex, formatExtraData) => {

    switch(cell) {
      case true:
        return <Badge color="success">Sim</Badge>        
      case false:  
        return <Badge color="danger">N??o</Badge>
      default:
        return <Badge color="danger">N??o</Badge>
    }

  }

  dateFormatter = (cell, row, rowIndex, formatExtraData) => {
    return (
      <>       
       {moment(moment(cell)._d).format('YYYY/MM/DD') }
      </>
    );
  }

  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  

  // this function will copy to clipboard an entire table,
  // so you can paste it inside an excel or csv file
  copyToClipboardAsTable = el => {
    var body = document.body,
      range,
      sel;
    if (document.createRange && window.getSelection) {
      range = document.createRange();
      sel = window.getSelection();
      sel.removeAllRanges();
      try {
        range.selectNodeContents(el);
        sel.addRange(range);
      } catch (e) {
        range.selectNode(el);
        sel.addRange(range);
      }
      document.execCommand("copy");
    } else if (body.createTextRange) {
      range = body.createTextRange();
      range.moveToElementText(el);
      range.select();
      range.execCommand("Copy");
    }
    this.setState({
      alert: (
        <ReactBSAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title="Copiado!"
          onConfirm={() => this.setState({ alert: null })}
          onCancel={() => this.setState({ alert: null })}
          confirmBtnBsStyle="info"
          btnSize=""
        >
          Tabela copiada para ??rea de transfer??ncia
        </ReactBSAlert>
      )
    });
  };


  deleteData = (id) => {
    console.log("Deletou registro");    
    api.delete(`/campaign/${id}`)
    .then(function (response) {
      console.log(response); 
      this.confirmedAlert()
    }.bind(this))
    .catch(function (error) {
      console.log(error);
      this.errorAlert();
    }.bind(this));
  }


  hideAlert = () => {
    this.setState({
      sweetAlert: null
    });
  };

  confirmAlert = (idSelected) => {
    this.setState({
      sweetAlert: (
        <ReactBSAlert
          warning
          style={{ display: "block", marginTop: "-100px"}}
          title="Deseja remover este registro?"
          onConfirm={() => this.deleteData(idSelected)}
          onCancel={() => this.hideAlert()}
          showCancel
          confirmBtnBsStyle="danger"
          confirmBtnText="Deletar"
          cancelBtnBsStyle="secondary"
          cancelBtnText="Cancelar"
          btnSize="" 
        >
          Essa opera????o n??o poder?? ser desfeita
        </ReactBSAlert>
      )
    });
  };
  confirmedAlert = () => {    

    this.setState({
      sweetAlert: (
        <ReactBSAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title="Deleted!"
          onConfirm={() => {
            this.hideAlert()
            window.location.reload();
          }}
          onCancel={() => {
            this.hideAlert()
            window.location.reload();
          }}
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
        {this.state.sweetAlert}      

        <Modal
          className="modal-dialog-centered modal-sideview"
          isOpen={this.state.exampleModal}
          toggle={() => this.toggleModal("exampleModal")}
          backdrop={false}
        >
          
          <DetailCupons id={this.state.idSelected} toggleModal={this.toggleModal}/>          
        </Modal>

        <DatatableHeader name="Pedidos" parentName="" pathNew="/admin/campanhas/cupons/add"/>
        <Container className="mt--6" fluid>
          <Row>
            <div className="col">
              <Card>                
                <ToolkitProvider
                  data={this.state.tableData}
                  keyField="_id"
                  columns={[ 
                    {
                      dataField: "transaction.date",
                      text: "Data",
                      sort: true
                    },                   
                    {
                      dataField: "accountFields.name",
                      text: "Conta",
                      sort: true
                    },
                    {
                      dataField: "campaignFields.name",
                      text: "Campanha",
                      sort: true
                    },
                    {
                      dataField: "transaction.sender.name",
                      text: "Cliente",
                      sort: true
                    },
                    {
                      dataField: "transaction.grossAmount",
                      text: "Valor",
                      sort: true
                    },
                    {
                      dataField: "transaction.paymentMethod.type",
                      text: "M??todo",
                      sort: true,
                      formatter: this.methodFormatter
                    },
                    {
                      dataField: "transaction.status",
                      text: "Status",
                      sort: true,
                      formatter: this.statusFormatter
                    },
                    {
                      dataField: "validation.used",
                      text: "Validado",
                      sort: true,
                      formatter: this.validationFormatter
                    },
                    // {
                    //   dataField: "actions",
                    //   text: "",
                    //   sort: false,
                    //   formatter: this.rankFormatter,
                    //   formatExtraData: {
                    //     condicao1: 'ni ni-air-baloon',
                    //     condicao2: 'ni ni-active-40'
                    //   }
                    // }
                  ]}
                  search
                  exportCSV
                >
                  {props => (
                    <div className="py-4 table-responsive">
                      <Container fluid>
                        <Row>
                          <Col xs={12} sm={6}>
                            <ButtonGroup>
                              <Button
                                className="buttons-copy buttons-html5"
                                color="default"
                                size="sm"
                                id="copy-tooltip"
                                onClick={() =>
                                  this.copyToClipboardAsTable(
                                    document.getElementById("react-bs-table")
                                  )
                                }
                              >
                                <span>Copiar</span>
                              </Button>
                              <ReactToPrint.default
                                trigger={() => (
                                  <Button
                                    color="default"
                                    size="sm"
                                    className="buttons-copy buttons-html5"
                                    id="print-tooltip"
                                  >
                                    Imprimir
                                  </Button>
                                )}
                                content={() => this.componentRef}
                              />
                                                            
                              <BtExportCSV { ...props.csvProps } />                          
                            </ButtonGroup>
                            <UncontrolledTooltip
                              placement="top"
                              target="print-tooltip"
                            >
                              Esta op????o imprime os registros apresentados na tabela
                            </UncontrolledTooltip>
                            <UncontrolledTooltip
                              placement="top"
                              target="copy-tooltip"
                            >
                              Esta op????o copia os registros apresentados na tabela
                            </UncontrolledTooltip>
                            <UncontrolledTooltip
                              placement="top"
                              target="csv-tooltip"
                            >
                              Esta exporta em excel os registros apresentados na tabela
                            </UncontrolledTooltip>
                          </Col>
                          <Col xs={12} sm={6}>
                            <div
                              id="datatable-basic_filter"
                              className="dataTables_filter px-4 pb-1 float-right"
                            >
                              <label>
                                Buscar:
                                <SearchBar
                                  className="form-control-sm"
                                  placeholder="Digite aqui"
                                  {...props.searchProps}
                                />
                              </label>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                      <BootstrapTable
                        ref={el => (this.componentRef = el)}
                        {...props.baseProps}
                        keyField='name'
                        id="react-bs-table"
                        bootstrap4={true}
                        pagination={pagination}
                        bordered={false}
                        // selectRow={ selectRow }  
                        // expandRow= { expandRow}                                              
                      />
                    </div>
                  )}
                </ToolkitProvider>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default ReactBSTablesPedido;
