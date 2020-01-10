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
  CardHeader,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.jsx";

import { dataTable } from "variables/general";

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

class ReactBSTables extends React.Component {
  state = {
    alert: null
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
          title="Good job!"
          onConfirm={() => this.setState({ alert: null })}
          onCancel={() => this.setState({ alert: null })}
          confirmBtnBsStyle="info"
          btnSize=""
        >
          Copied to clipboard!
        </ReactBSAlert>
      )
    });
  };
  render() {
    return (
      <>
        {this.state.alert}
        <SimpleHeader name="Cupons" parentName="Campanhas" />
        <Container className="mt--6" fluid>
          <Row>
            <div className="col">              
              <Card>
                <CardHeader>
                  <h3 className="mb-0">Cupons - Action buttons</h3>
                  <p className="text-sm mb-0">
                    This is an exmaple of data table using the well known
                    react-bootstrap-table2 plugin. This is a minimal setup in
                    order to get started fast.
                  </p>
                </CardHeader>
                <ToolkitProvider
                  data={dataTable}
                  keyField="name"
                  columns={[
                    {
                      dataField: "name",
                      text: "Name",
                      sort: true
                    },
                    {
                      dataField: "position",
                      text: "Position",
                      sort: true
                    },
                    {
                      dataField: "office",
                      text: "Office",
                      sort: true
                    },
                    {
                      dataField: "Age",
                      text: "age",
                      sort: true
                    },
                    {
                      dataField: "start_date",
                      text: "Start date",
                      sort: true
                    },
                    {
                      dataField: "salary",
                      text: "Salary",
                      sort: true
                    }
                  ]}
                  search
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
                                <span>Copy</span>
                              </Button>
                              <ReactToPrint.default
                                trigger={() => (
                                  <Button
                                    color="default"
                                    size="sm"
                                    className="buttons-copy buttons-html5"
                                    id="print-tooltip"
                                  >
                                    Print
                                  </Button>
                                )}
                                content={() => this.componentRef}
                              />
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
                          </Col>
                          <Col xs={12} sm={6}>
                            <div
                              id="datatable-basic_filter"
                              className="dataTables_filter px-4 pb-1 float-right"
                            >
                              <label>
                                Search:
                                <SearchBar
                                  className="form-control-sm"
                                  placeholder=""
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
                        bootstrap4={true}
                        pagination={pagination}
                        bordered={false}
                        id="react-bs-table"
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