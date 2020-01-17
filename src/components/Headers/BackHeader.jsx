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
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react library for routing
import { Link } from "react-router-dom";
// reactstrap components
import {  
  BreadcrumbItem,
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

class TimelineHeader extends React.Component {


  parentRender = parent => {
    
    if (parent !== "") {
      return (
        <BreadcrumbItem>
          <a href="#pablo" onClick={e => e.preventDefault()}>
            {parent}
          </a>
        </BreadcrumbItem>
      );
    } else {
      return null;
    }
    
  };
  
  btnNewRender = parent => {
    
    if (parent !== "") {
      return (
        <BreadcrumbItem>
          <a href="#pablo" onClick={e => e.preventDefault()}>
            {parent}
          </a>
        </BreadcrumbItem>
      );
    } else {
      return null;
    }
    
  };

  render() {
    return (
      <>
        <div className="header header-dark bg-info pb-6 content__title content__title--calendar">
          <Container fluid>
            <div className="header-body">
              <Row className="align-items-center py-4">
                <Col lg="6" xs="7">
                  <Button 
                    className="btn-icon btn-2 btn-back" 
                    color="info" 
                    type="button"
                    to={this.props.parentPath}                     
                    tag={Link}    
                  >
                    <span className="btn-inner--icon">
                      <i className="fas fa-arrow-left"></i>
                    </span>
                  </Button><br/>
                  <h6 className="fullcalendar-title h2 text-white d-inline-block mb-0">
                    {`${this.props.parentName} -  ${this.props.name}`}
                  </h6>{" "}
                  
                </Col>              
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

TimelineHeader.propTypes = {
  name: PropTypes.string,
  parentName: PropTypes.string,
  listView: PropTypes.bool
};

export default TimelineHeader;
