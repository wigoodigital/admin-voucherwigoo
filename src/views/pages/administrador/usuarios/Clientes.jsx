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
// reactstrap components
import {
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
import DetailClientes from "views/pages/clientes/DetailClientes.jsx";

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


// const selectRow = {
//   mode: 'checkbox',
//   clickToSelect: true,
//   clickToExpand: true
// };

// const expandRow = {
//   showExpandColumn: true,
//   renderer: row => (
//     <div>
//       <p>{ `This Expand row is belong to rowKey ${row}` }</p>
//       <p>You can render anything here, also you can add additional data on every row object</p>
//       <p>expandRow.renderer callback will pass the origin row object to you</p>
//     </div>
//   )
// };

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

class ReactBSTables extends React.Component {
  state = {
    alert: null,
    tableData: [],
    exampleModal: false,
    idSelected: ""
  };

  //get data from API
  componentDidMount(){
    this.loadData();
  }

  loadData = async () => {
    const response = await api.get("/account");
    this.setState({
      tableData: response.data
    })   
    console.log(response.data); 
  }


  rankFormatter = (cell, row, rowIndex, formatExtraData) => {
    return (
      <>
        {/* {console.log(cell)} */}
        {/* {console.log(row)} */}
        {/* {console.log(rowIndex)} */}
        <i className={ formatExtraData[cell] } />
        <Button
            className="buttons-copy buttons-html5"
            color="default"
            size="sm"
            id="edit-tooltip"   
            to={`/admin/clientes/edit/${row._id}`} 
            // to="/admin/clientes/edit"
            tag={Link}    
            // onClick={() => {
            //     this.toggleModal("exampleModal")
            //     this.setState({idSelected: row._id})
            //   }
            // }     
          >
            <span>Editar</span>
        </Button>  
        <Button
            className="buttons-copy buttons-html5"
            color="default"
            size="sm"
            id="delete-tooltip"               
            onClick={() => {                
                this.setState({idSelected: row._id});
                this.confirmAlert(row._id);
              }
            }     
          >
            <span>Deletar</span>
        </Button>  
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


  deleteData = (idAccount) => {
    console.log("Deletou registro");    
    api.delete(`/account/${idAccount}`)
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
          
          <DetailClientes id={this.state.idSelected} toggleModal={this.toggleModal}/>          
        </Modal>

        <DatatableHeader name="Clientes" parentName="" pathNew="/admin/clientes/add"/>
        <Container className="mt--6" fluid>
          <Row>
            <div className="col">
              <Card>                
                <ToolkitProvider
                  data={this.state.tableData}
                  keyField="name"
                  columns={[                    
                    {
                      dataField: "name",
                      text: "Nome",
                      sort: true
                    },
                    {
                      dataField: "email",
                      text: "Email",
                      sort: true
                    },
                    {
                      dataField: "utm",
                      text: "URL",
                      sort: true
                    },
                    {
                      dataField: "actions",
                      text: "",
                      sort: false,
                      formatter: this.rankFormatter,
                      formatExtraData: {
                        condicao1: 'ni ni-air-baloon',
                        condicao2: 'ni ni-active-40'
                      }
                    }
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
                              This will open a print page with the visible rows
                              of the table.
                            </UncontrolledTooltip>
                            <UncontrolledTooltip
                              placement="top"
                              target="copy-tooltip"
                            >
                              This will copy to your clipboard the visible rows
                              of the table.
                            </UncontrolledTooltip>
                            <UncontrolledTooltip
                              placement="top"
                              target="csv-tooltip"
                            >
                              This will copy to your clipboard the visible rows
                              of the table.
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

export default ReactBSTables;
