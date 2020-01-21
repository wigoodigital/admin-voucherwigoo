webpackHotUpdate("main",{

/***/ "./src/views/pages/campanhas/cupons/DetailCupons.jsx":
/*!***********************************************************!*\
  !*** ./src/views/pages/campanhas/cupons/DetailCupons.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var components_Headers_BackHeader_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Headers/BackHeader.jsx */ "./src/components/Headers/BackHeader.jsx");
/* harmony import */ var components_Headers_SimpleHeader_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Headers/SimpleHeader.jsx */ "./src/components/Headers/SimpleHeader.jsx");
/* harmony import */ var react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap-sweetalert */ "./node_modules/react-bootstrap-sweetalert/index.js");
/* harmony import */ var react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_select2_wrapper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-select2-wrapper */ "./node_modules/react-select2-wrapper/lib/components/Select2.js");
/* harmony import */ var react_select2_wrapper__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_select2_wrapper__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-quill */ "./node_modules/react-quill/lib/index.js");
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_tagsinput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-tagsinput */ "./node_modules/react-tagsinput/react-tagsinput.js");
/* harmony import */ var react_tagsinput__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_tagsinput__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-datetime */ "./node_modules/react-datetime/DateTime.js");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_datetime__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var moment_locale_pt_br__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! moment/locale/pt-br */ "./node_modules/moment/locale/pt-br.js");
/* harmony import */ var moment_locale_pt_br__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(moment_locale_pt_br__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var variables_general_jsx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! variables/general.jsx */ "./src/variables/general.jsx");
/* harmony import */ var services_api__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! services/api */ "./src/services/api.js");








var _jsxFileName = "/Users/gabrieldossantos/OneDrive - Fatec Centro Paula Souza/Projetos Desenvolvimento/Wigoo/voucherwigoo.com.br/voucherwigoo/app-web/src/views/pages/campanhas/cupons/DetailCupons.jsx";

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
 // reactstrap components

 // core components


 // react component used to create sweet alerts


 // import InputMask from "react-input-mask";
// react plugin that creates text editor

 // react plugin that creates an input with badges

 // react plugin used to create datetimepicker

 // react plugin used to create datetimepicker






var Profile =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Profile, _React$Component);

  function Profile(props) {
    var _this;

    Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Profile);

    _this = Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Profile).call(this, props));

    _this.getDataAccount = function () {
      services_api__WEBPACK_IMPORTED_MODULE_20__["default"].get("/account/select").then(function (response) {
        // handle success     
        var itemsAccount = [];
        response.data.map(function (item) {
          return itemsAccount.push({
            id: item._id,
            text: item.name
          });
        });
        this.setState({
          accounts: itemsAccount
        });
      }.bind(Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this))).catch(function (error) {
        // handle error
        console.log(error);
      }).finally(function () {
        // always executed
        console.log("end GET Account");
      });
    };

    _this.getData = function () {
      services_api__WEBPACK_IMPORTED_MODULE_20__["default"].get("/campaign/".concat(_this.props.match.params.id)).then(function (response) {
        // handle success      
        this.setState(function (prevState) {
          return {
            campaign: Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState.campaign, response.data, {
              period: {
                start: moment__WEBPACK_IMPORTED_MODULE_17__(response.data.period.start),
                end: moment__WEBPACK_IMPORTED_MODULE_17__(response.data.period.end)
              }
            })
          };
        });
      }.bind(Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this))).catch(function (error) {
        // handle error
        console.log(error);
      }).finally(function () {
        // always executed
        console.log("end GET");
      });
    };

    _this.postData = function (campaignData) {
      console.log("Inseriu mais um registro");
      delete campaignData._id;
      services_api__WEBPACK_IMPORTED_MODULE_20__["default"].post("/campaign", Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, campaignData)).then(function (response) {
        console.log(response);
        this.confirmedAlert();
        this.setState({
          new: false
        });
        this.setState(function (prevState) {
          return {
            campaign: Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState.campaign, {
              _id: response.data._id
            })
          };
        });
      }.bind(Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this))).catch(function (error) {
        console.log(error);
        this.errorAlert();
      }.bind(Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)));
    };

    _this.putData = function (campaignData) {
      console.log("Alterou registro");
      services_api__WEBPACK_IMPORTED_MODULE_20__["default"].put("/campaign/".concat(_this.state.campaign._id), Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, campaignData)).then(function (response) {
        console.log(response);
        this.confirmedAlert();
      }.bind(Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this))).catch(function (error) {
        console.log(error);
        this.errorAlert();
      }.bind(Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)));
    };

    _this.deleteData = function () {
      console.log("Deletou registro");
      services_api__WEBPACK_IMPORTED_MODULE_20__["default"].delete("/campaign/".concat(_this.state.campaign._id)).then(function (response) {
        console.log(response);
        this.props.history.push('/admin/campanhas/cupons');
      }.bind(Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this))).catch(function (error) {
        console.log(error);
        this.errorAlert();
      }.bind(Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)));
    };

    _this.handleTextEditor = function (value) {
      _this.setState(function (prevState) {
        return {
          campaign: Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState.campaign, {
            voucher: Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState.campaign.voucher, {
              rules: value
            })
          })
        };
      });
    };

    _this.handleTagsinput = function (tags) {
      _this.setState(function (prevState) {
        return {
          campaign: Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState.campaign, {
            tags: tags
          })
        };
      });
    };

    _this.handleClick = function (element) {
      switch (element) {
        case 'fileInputLogo':
          _this.fileInputLogo.current.click();

          return;

        case 'fileInputImagem1':
          _this.fileInputImage1.current.click();

          return;

        case 'fileInputImagem2':
          _this.fileInputImage2.current.click();

          return;

        case 'fileInputImagem3':
          _this.fileInputImage3.current.click();

          return;

        case 'fileInputImagem4':
          _this.fileInputImage4.current.click();

          return;

        default:
          return;
      }
    };

    _this.hideAlert = function () {
      _this.setState({
        alert: null
      });
    };

    _this.confirmAlert = function () {
      _this.setState({
        alert: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_12___default.a, {
          warning: true,
          style: {
            display: "block",
            marginTop: "-100px"
          },
          title: "Salvar as Altera\xE7\xF5es?",
          onConfirm: function onConfirm() {
            return _this.state.new ? _this.postData(_this.state.campaign) : _this.putData(_this.state.campaign);
          },
          onCancel: function onCancel() {
            return _this.hideAlert();
          },
          showCancel: true,
          confirmBtnBsStyle: "primary",
          confirmBtnText: "Confirmar Altera\xE7\xF5es",
          cancelBtnBsStyle: "secondary",
          cancelBtnText: "Descartar",
          btnSize: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 487
          },
          __self: this
        }, "Deseja salvar as altera\xE7\xF5es realizadas")
      });
    };

    _this.confirmDelete = function () {
      _this.setState({
        alert: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_12___default.a, {
          warning: true,
          style: {
            display: "block",
            marginTop: "-100px"
          },
          title: "Deseja remover este registro?",
          onConfirm: function onConfirm() {
            return _this.deleteData(_this.state.campaign);
          },
          onCancel: function onCancel() {
            return _this.hideAlert();
          },
          showCancel: true,
          confirmBtnBsStyle: "danger",
          confirmBtnText: "Deletar",
          cancelBtnBsStyle: "secondary",
          cancelBtnText: "Cancelar",
          btnSize: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 509
          },
          __self: this
        }, "Essa opera\xE7\xE3o n\xE3o poder\xE1 ser desfeita")
      });
    };

    _this.confirmedAlert = function () {
      _this.setState({
        alert: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_12___default.a, {
          success: true,
          style: {
            display: "block",
            marginTop: "-100px"
          },
          title: "OK",
          onConfirm: function onConfirm() {
            return _this.hideAlert();
          },
          onCancel: function onCancel() {
            return _this.hideAlert();
          },
          confirmBtnBsStyle: "primary",
          confirmBtnText: "Ok",
          btnSize: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 531
          },
          __self: this
        }, "Opera\xE7\xE3o realizada com sucesso")
      });
    };

    _this.errorAlert = function () {
      _this.setState({
        alert: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_12___default.a, {
          danger: true,
          style: {
            display: "block",
            marginTop: "-100px"
          },
          title: "Erro",
          onConfirm: function onConfirm() {
            return _this.hideAlert();
          },
          onCancel: function onCancel() {
            return _this.hideAlert();
          },
          confirmBtnBsStyle: "primary",
          confirmBtnText: "Ok",
          btnSize: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 550
          },
          __self: this
        }, "Ocorreu um erro ao salvar registro. ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 560
          },
          __self: this
        }), "Tente novamente")
      });
    };

    _this.state = {
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
          redirect: ""
        },
        period: {
          start: moment__WEBPACK_IMPORTED_MODULE_17__(),
          end: moment__WEBPACK_IMPORTED_MODULE_17__().day(30)
        },
        tags: ["Wigoo", "Voucher", "Desconto", "Promoção"],
        observations: "",
        unique: true
      },
      categories: [{
        id: "Restaurante",
        text: "Restaurante"
      }, {
        id: "Academia",
        text: "Academia"
      }, {
        id: "Vestuário",
        text: "Vestuário"
      }, {
        id: "Serviços",
        text: "Serviços"
      }, {
        id: "Cursos",
        text: "Cursos"
      }, {
        id: "Clínica",
        text: "Clínica"
      }],
      accounts: [],
      new: _this.props.match.params.action === "add" ? true : false
    };
    _this.handleChange = _this.handleChange.bind(Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleImage = _this.handleImage.bind(Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleVoucher = _this.handleVoucher.bind(Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleSocial = _this.handleSocial.bind(Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleTextEditor = _this.handleTextEditor.bind(Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.fileInputLogo = react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();
    _this.fileInputLogoLabel = react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();
    _this.fileInputImage1 = react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();
    _this.fileInputImage1Label = react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();
    _this.fileInputImage2 = react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();
    _this.fileInputImage2Label = react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();
    _this.fileInputImage3 = react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();
    _this.fileInputImage3Label = react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();
    _this.fileInputImage4 = react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();
    _this.fileInputImage4Label = react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();
    return _this;
  } //get data from API


  Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Profile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      moment__WEBPACK_IMPORTED_MODULE_17__["locale"]('pt-BR');
      this.setState(function (prevState) {
        return {
          campaign: Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState.campaign, {
            period: {
              start: moment__WEBPACK_IMPORTED_MODULE_17__(),
              end: moment__WEBPACK_IMPORTED_MODULE_17__().day(30)
            }
          })
        };
      });
      if (this.props.match.params.id) this.getData();
      this.getDataAccount();
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var target = event.target;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      var name = target.name;
      console.log(value);
      this.setState(function (prevState) {
        return {
          campaign: Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState.campaign, Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value))
        };
      });
      console.log(this.state.campaign);
    }
  }, {
    key: "handleSelect",
    value: function handleSelect(event) {
      var id = event.params.data.id;
      var value = event.params.data.text;
      console.log(id);
      console.log(value);
      console.log(event);

      switch (event.target.id) {
        case 'select-account':
          this.setState(function (prevState) {
            return {
              campaign: Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState.campaign, {
                account: {
                  id: id,
                  name: value
                }
              })
            };
          });
          return;

        case 'select-category':
          this.setState(function (prevState) {
            return {
              campaign: Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState.campaign, {
                category: {
                  id: id,
                  name: value
                }
              })
            };
          });
          console.log(this.state.campaign);
          return;

        default:
          return;
      }
    }
  }, {
    key: "handleImage",
    value: function handleImage(e, typeImage) {
      var _this2 = this;

      var reader = new FileReader();
      var file = e.target.files[0];

      switch (typeImage) {
        case 'logo':
          reader.onloadend = function () {
            _this2.setState(function (prevState) {
              return {
                campaign: Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState.campaign, {
                  fileLogo: file,
                  logo: reader.result
                })
              };
            });
          };

          reader.readAsDataURL(file);
          this.fileInputLogoLabel.current.innerText = file.name;
          return;

        case 'bg':
          reader.onloadend = function () {
            _this2.setState(function (prevState) {
              return {
                campaign: Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState.campaign, {
                  fileBackground: file,
                  background: reader.result
                })
              };
            });
          };

          reader.readAsDataURL(file);
          this.fileInputBgLabel.current.innerText = file.name;
          return;

        default:
          reader.onloadend = function () {
            _this2.setState(function (prevState) {
              return {
                campaign: Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState.campaign, {
                  fileImagem1: file,
                  images: Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState.campaign.images, Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, typeImage, reader.result))
                })
              };
            });

            console.log(_this2.state.campaign);
          };

          reader.readAsDataURL(file);
          return;
      }
    }
  }, {
    key: "handleVoucher",
    value: function handleVoucher(event) {
      var target = event.target;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      var name = target.name;
      ;
      this.setState(function (prevState) {
        return {
          campaign: Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState.campaign, {
            voucher: Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState.campaign.voucher, Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value))
          })
        };
      });
    }
  }, {
    key: "handleSocial",
    value: function handleSocial(event) {
      var target = event.target;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      var name = target.name;
      ;
      this.setState(function (prevState) {
        return {
          campaign: Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState.campaign, {
            social: Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState.campaign.social, Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value))
          })
        };
      });
    }
  }, {
    key: "createMarkup",
    value: function createMarkup() {
      return {
        __html: this.state.campaign.voucher.rules
      };
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      this.confirmAlert();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, this.state.alert, this.state.new ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components_Headers_SimpleHeader_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "Novo Cupom",
        parentName: "Cupom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components_Headers_BackHeader_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: this.state.campaign.name,
        parentName: "Cupom",
        parentPath: "/admin/campanhas/cupons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 574
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 576
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Container"], {
        className: "mt--6",
        fluid: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 577
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        className: "order-xl-2",
        xl: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 579
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 581
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h5", {
        className: "h3 mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583
        },
        __self: this
      }, "Campanhas Ativas")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 586
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ListGroup"], {
        className: "list my--3",
        flush: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 587
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ListGroupItem"], {
        className: "px-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 588
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        className: "align-items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 589
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        className: "col-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "avatar rounded-circle",
        href: "#1",
        onClick: function onClick(e) {
          return e.preventDefault();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        alt: "...",
        src: __webpack_require__(/*! assets/img/theme/placeholder.png */ "./src/assets/img/theme/placeholder.png"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col ml--2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 602
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 603
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#1",
        onClick: function onClick(e) {
          return e.preventDefault();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 604
        },
        __self: this
      }, "Campanha Teste")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "text-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 608
        },
        __self: this
      }, "\u25CF"), " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 609
        },
        __self: this
      }, "Online")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        className: "col-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 611
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        color: "primary",
        size: "sm",
        type: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 612
        },
        __self: this
      }, "Ver"))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        className: "card-profile sticky-top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 622
        },
        __self: this
      }, this.state.campaign.background !== undefined && this.state.campaign.background !== "" ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardImg"], {
        alt: "...",
        src: this.state.campaign.background,
        top: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 624
        },
        __self: this
      }) : // <CardImg
      //   alt="..."
      //   src={require("assets/img/theme/placeholder.png")}
      //   top
      // />
      react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardHeader"], {
        style: {
          height: "180px",
          backgroundColor: this.state.campaign.color
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 635
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        className: "justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 638
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        className: "order-lg-2",
        lg: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 639
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "card-profile-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 640
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#1",
        onClick: function onClick(e) {
          return e.preventDefault();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 641
        },
        __self: this
      }, this.state.campaign.logo !== undefined && this.state.campaign.logo !== "" ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        alt: "...",
        className: "rounded-circle",
        src: this.state.campaign.logo,
        onClick: function onClick() {
          return _this3.handleClick("fileInputLogo");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 644
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        alt: "...",
        className: "rounded-circle",
        src: __webpack_require__(/*! assets/img/theme/placeholder.png */ "./src/assets/img/theme/placeholder.png"),
        onClick: function onClick() {
          return _this3.handleClick("fileInputLogo");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 651
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardHeader"], {
        className: "text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 663
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "d-flex justify-content-between",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 664
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        className: "mr-4",
        color: "info",
        type: "button",
        href: "".concat(variables_general_jsx__WEBPACK_IMPORTED_MODULE_19__["BASE_URL"], "/").concat(this.state.campaign.utm),
        target: "_blank",
        size: "sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 665
        },
        __self: this
      }, "Ver P\xE1gina"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        className: "float-right",
        color: "default",
        type: "button",
        href: this.state.campaign.website !== undefined && this.state.campaign.website !== "" ? this.state.campaign.utm : "".concat(variables_general_jsx__WEBPACK_IMPORTED_MODULE_19__["BASE_URL"], "/").concat(this.state.campaign.utm),
        target: "_blank",
        size: "sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 675
        },
        __self: this
      }, "Website"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardBody"], {
        className: "pt-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 687
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 688
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h5", {
        className: "h3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 689
        },
        __self: this
      }, this.state.campaign.voucher.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "h5 font-weight-300",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 692
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "ni location_pin mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 693
        },
        __self: this
      }), this.state.campaign.voucher.spotlight), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "h5 mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 696
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "display-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 697
        },
        __self: this
      }, this.state.campaign.voucher.promotion)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 701
        },
        __self: this
      }, this.state.campaign.voucher.description), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "h5 mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 704
        },
        __self: this
      }, this.state.campaign.voucher.period), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 707
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "voucher-rules",
        dangerouslySetInnerHTML: this.createMarkup(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 709
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "h5 mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 711
        },
        __self: this
      }, this.state.campaign.voucher.redirect))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardFooter"], {
        className: "bg-transparent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 716
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 717
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 718
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 719
        },
        __self: this
      }, "Apresente o c\xF3digo abaixo")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! assets/img/theme/qrcode.jpg */ "./src/assets/img/theme/qrcode.jpg"),
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 721
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        className: "order-xl-1",
        xl: "8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 729
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 730
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        lg: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 731
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        className: "bg-gradient-success border-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 732
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 733
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 734
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 735
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardTitle"], {
        className: "text-uppercase text-muted mb-0 text-white",
        tag: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 736
        },
        __self: this
      }, "Total de visitas"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "h2 font-weight-bold mb-0 text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 742
        },
        __self: this
      }, "0")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        className: "col-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 746
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "icon icon-shape bg-white text-dark rounded-circle shadow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 747
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "ni ni-active-40",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 748
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "mt-3 mb-0 text-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 752
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "text-white mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 753
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fa fa-arrow-up",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 754
        },
        __self: this
      }), "0%"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "text-nowrap text-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 757
        },
        __self: this
      }, "Desde o \xFAltimo m\xEAs"))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        lg: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 764
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        className: "bg-gradient-danger border-0",
        tag: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 765
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 766
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 767
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 768
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardTitle"], {
        className: "text-uppercase text-muted mb-0 text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 769
        },
        __self: this
      }, "Cupons utilizados"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "h2 font-weight-bold mb-0 text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 772
        },
        __self: this
      }, "0")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        className: "col-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 776
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "icon icon-shape bg-white text-dark rounded-circle shadow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 777
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "ni ni-spaceship",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 778
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "mt-3 mb-0 text-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 782
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "text-white mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 783
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fa fa-arrow-up",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 784
        },
        __self: this
      }), "0%"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "text-nowrap text-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 787
        },
        __self: this
      }, "Desde o \xFAltimo m\xEAs")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 795
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 796
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        className: "align-items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 797
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        xs: "8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 798
        },
        __self: this
      }, this.state.new ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 800
        },
        __self: this
      }, "Novo Cupom") : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 802
        },
        __self: this
      }, "Editar Cupom")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        className: "text-right",
        xs: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 805
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["UncontrolledDropdown"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 806
        },
        __self: this
      }, this.state.new ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownToggle"], {
        className: "btn-icon-only text-light",
        color: "",
        role: "button",
        size: "sm",
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 809
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-ellipsis-v",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 816
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownToggle"], {
        className: "btn-icon-only text-light",
        color: "",
        role: "button",
        size: "sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 820
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-ellipsis-v",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 826
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownMenu"], {
        className: "dropdown-menu-arrow",
        right: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 830
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownItem"], {
        href: "#1",
        onClick: function onClick() {
          return _this3.confirmDelete();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 831
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 835
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "far fa-trash-alt pr-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 836
        },
        __self: this
      }), " Excluir")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownItem"], {
        href: "#1",
        onClick: function onClick() {
          return _this3.setState({
            new: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 839
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 843
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "far fa-clone pr-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 844
        },
        __self: this
      }), " Duplicar"))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 852
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h6", {
        className: "heading-small text-muted mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 853
        },
        __self: this
      }, "Informa\xE7\xF5es gerais"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "pl-lg-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 856
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 857
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        lg: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 858
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 859
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "form-control-label",
        htmlFor: "input-category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 860
        },
        __self: this
      }, "Cliente"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_select2_wrapper__WEBPACK_IMPORTED_MODULE_13___default.a, {
        value: this.state.campaign.account.id,
        className: "form-control",
        defaultValue: "Outros",
        id: "select-account",
        options: {
          placeholder: "Cliente"
        },
        data: this.state.accounts,
        onSelect: function onSelect(event) {
          return _this3.handleSelect(event);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 866
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        lg: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 879
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 880
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "form-control-label",
        htmlFor: "input-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 881
        },
        __self: this
      }, "Nome"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        id: "input-name",
        placeholder: "Nome da campanha",
        type: "text",
        name: "name",
        value: this.state.campaign.name,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 887
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        lg: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 897
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 898
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "form-control-label",
        htmlFor: "input-utm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 899
        },
        __self: this
      }, "URL"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        id: "input-utm",
        placeholder: "/nome-do-cliente",
        type: "text",
        name: "utm",
        value: this.state.campaign.utm,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 905
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 916
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        lg: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 917
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 918
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "form-control-label",
        htmlFor: "input-color",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 919
        },
        __self: this
      }, "Cor"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        id: "input-color",
        type: "color",
        name: "color",
        value: this.state.campaign.color,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 925
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        lg: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 934
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 935
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "form-control-label",
        htmlFor: "input-category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 936
        },
        __self: this
      }, "Categoria"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_select2_wrapper__WEBPACK_IMPORTED_MODULE_13___default.a, {
        value: this.state.campaign.category.id,
        className: "form-control",
        defaultValue: "Outros",
        id: "select-category",
        options: {
          placeholder: "Categoria",
          tags: true
        },
        data: this.state.categories,
        onSelect: function onSelect(event) {
          return _this3.handleSelect(event);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 942
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 958
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        xs: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 959
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 960
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "form-control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 961
        },
        __self: this
      }, "Data inicial"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
        className: "input-group-alternative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 966
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroupAddon"], {
        addonType: "prepend",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 967
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroupText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 968
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "ni ni-calendar-grid-58",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 969
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_datetime__WEBPACK_IMPORTED_MODULE_16___default.a, {
        inputProps: {
          placeholder: "Data inicial"
        },
        value: this.state.campaign.period.start,
        timeFormat: false,
        renderDay: function renderDay(props, currentDate, selectedDate) {
          var classes = props.className;

          if (_this3.state.campaign.period.start && _this3.state.campaign.period.end && _this3.state.campaign.period.start._d + "" === currentDate._d + "") {
            classes += " start-date";
          } else if (_this3.state.campaign.period.start && _this3.state.campaign.period.end && new Date(_this3.state.campaign.period.start._d + "") < new Date(currentDate._d + "") && new Date(_this3.state.campaign.period.end._d + "") > new Date(currentDate._d + "")) {
            classes += " middle-date";
          } else if (_this3.state.campaign.period.end && _this3.state.campaign.period.end._d + "" === currentDate._d + "") {
            classes += " end-date";
          }

          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", Object.assign({}, props, {
            className: classes,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1002
            },
            __self: this
          }), currentDate.date());
        },
        isValidDate: function isValidDate(current) {
          return current.isAfter(react_datetime__WEBPACK_IMPORTED_MODULE_16___default.a.moment().subtract(1, 'day'));
        },
        onChange: function onChange(e) {
          console.log(e);
          console.log(_this3.state.campaign.period.start);
          console.log(_this3.state.campaign.period.end);

          _this3.setState({
            startDate: e
          }); // const dateL = moment(e._d).format('YYYY-MM-D');


          var dateL = e;

          _this3.setState(function (prevState) {
            return {
              campaign: Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState.campaign, {
                period: Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState.campaign.period, {
                  start: dateL
                })
              })
            };
          });

          console.log(_this3.state.campaign.period);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 972
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        xs: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1034
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "form-control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1035
        },
        __self: this
      }, "Data final"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1040
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
        className: "input-group-alternative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1041
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroupAddon"], {
        addonType: "prepend",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1042
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroupText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1043
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "ni ni-calendar-grid-58",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1044
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_datetime__WEBPACK_IMPORTED_MODULE_16___default.a, {
        inputProps: {
          placeholder: "Data final"
        },
        value: this.state.campaign.period.end,
        timeFormat: false,
        renderDay: function renderDay(props, currentDate, selectedDate) {
          var classes = props.className;

          if (_this3.state.campaign.period.start && _this3.state.campaign.period.end && _this3.state.campaign.period.start._d + "" === currentDate._d + "") {
            classes += " start-date";
          } else if (_this3.state.campaign.period.start && _this3.state.campaign.period.end && new Date(_this3.state.campaign.period.start._d + "") < new Date(currentDate._d + "") && new Date(_this3.state.campaign.period.end._d + "") > new Date(currentDate._d + "")) {
            classes += " middle-date";
          } else if (_this3.state.campaign.period.end && _this3.state.campaign.period.end._d + "" === currentDate._d + "") {
            classes += " end-date";
          }

          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", Object.assign({}, props, {
            className: classes,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 1077
            },
            __self: this
          }), currentDate.date());
        },
        isValidDate: function isValidDate(current) {
          return current.isAfter(react_datetime__WEBPACK_IMPORTED_MODULE_16___default.a.moment().subtract(1, 'day'));
        },
        onChange: function onChange(e) {
          _this3.setState({
            endDate: e
          }); // const dateL = moment(e._d).format('YYYY-MM-D');


          var dateL = e;

          _this3.setState(function (prevState) {
            return {
              campaign: Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState.campaign, {
                period: Object(_Users_gabrieldossantos_OneDrive_Fatec_Centro_Paula_Souza_Projetos_Desenvolvimento_Wigoo_voucherwigoo_com_br_voucherwigoo_app_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState.campaign.period, {
                  end: dateL
                })
              })
            };
          });

          console.log(_this3.state.campaign.period);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1047
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        lg: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "form-control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1110
        },
        __self: this
      }, "Logo"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "custom-file",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        className: "custom-file-input",
        id: "input-logo",
        lang: "pt-br",
        type: "file",
        name: "logo",
        ref: this.fileInputLogo,
        onChange: function onChange(event) {
          return _this3.handleImage(event, "logo");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1117
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "custom-file-label",
        htmlFor: "input-logo",
        ref: this.fileInputLogoLabel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1126
        },
        __self: this
      }, "Selecionar Imagem de Logo")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        lg: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "form-control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1133
        },
        __self: this
      }, "Imagem 1"), this.state.campaign.images.image1 !== undefined && this.state.campaign.images.image1 !== "" ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardImg"], {
        alt: "...",
        src: this.state.campaign.images.image1,
        top: true,
        onClick: function onClick() {
          return _this3.handleClick("fileInputImagem1");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1141
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardImg"], {
        alt: "...",
        src: __webpack_require__(/*! assets/img/theme/placeholder.png */ "./src/assets/img/theme/placeholder.png"),
        top: true,
        onClick: function onClick() {
          return _this3.handleClick("fileInputImagem1");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1150
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "custom-file",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        className: "custom-file-input",
        id: "input-image1",
        lang: "pt-br",
        type: "file",
        name: "image1",
        ref: this.fileInputImage1,
        onChange: function onChange(event) {
          return _this3.handleImage(event, "image1");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1161
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "custom-file-label",
        htmlFor: "input-image1",
        ref: this.fileInputImagem1Label,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1170
        },
        __self: this
      }, "Selecionar Imagem1")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        lg: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1177
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "form-control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1178
        },
        __self: this
      }, "Imagem 2"), this.state.campaign.images.image2 !== undefined && this.state.campaign.images.image2 !== "" ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardImg"], {
        alt: "...",
        src: this.state.campaign.images.image2,
        top: true,
        onClick: function onClick() {
          return _this3.handleClick("fileInputImagem2");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1185
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardImg"], {
        alt: "...",
        src: __webpack_require__(/*! assets/img/theme/placeholder.png */ "./src/assets/img/theme/placeholder.png"),
        top: true,
        onClick: function onClick() {
          return _this3.handleClick("fileInputImagem2");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1194
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1203
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "custom-file",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1204
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        className: "custom-file-input",
        id: "input-image2",
        lang: "pt-br",
        type: "file",
        name: "image2",
        ref: this.fileInputImage2,
        onChange: function onChange(event) {
          return _this3.handleImage(event, "image2");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1205
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "custom-file-label",
        htmlFor: "input-image2",
        ref: this.fileInputImagem2Label,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1214
        },
        __self: this
      }, "Selecionar Imagem2")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        lg: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1220
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "form-control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1221
        },
        __self: this
      }, "Imagem 3"), this.state.campaign.images.image3 !== undefined && this.state.campaign.images.image3 !== "" ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1227
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardImg"], {
        alt: "...",
        src: this.state.campaign.images.image3,
        top: true,
        onClick: function onClick() {
          return _this3.handleClick("fileInputImagem3");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1228
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1236
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardImg"], {
        alt: "...",
        src: __webpack_require__(/*! assets/img/theme/placeholder.png */ "./src/assets/img/theme/placeholder.png"),
        top: true,
        onClick: function onClick() {
          return _this3.handleClick("fileInputImagem3");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1237
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1246
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "custom-file",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1247
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        className: "custom-file-input",
        id: "input-image3",
        lang: "pt-br",
        type: "file",
        name: "image3",
        ref: this.fileInputImage3,
        onChange: function onChange(event) {
          return _this3.handleImage(event, "image3");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1248
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "custom-file-label",
        htmlFor: "input-image3",
        ref: this.fileInputImagem3Label,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1257
        },
        __self: this
      }, "Selecionar Imagem 3")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        lg: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1263
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "form-control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1264
        },
        __self: this
      }, "Imagem 4"), this.state.campaign.images.image4 !== undefined && this.state.campaign.images.image4 !== "" ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1270
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardImg"], {
        alt: "...",
        src: this.state.campaign.images.image4,
        top: true,
        onClick: function onClick() {
          return _this3.handleClick("fileInputImagem4");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1271
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1279
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardImg"], {
        alt: "...",
        src: __webpack_require__(/*! assets/img/theme/placeholder.png */ "./src/assets/img/theme/placeholder.png"),
        top: true,
        onClick: function onClick() {
          return _this3.handleClick("fileInputImagem4");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1280
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1289
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "custom-file",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1290
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        className: "custom-file-input",
        id: "input-image4",
        lang: "pt-br",
        type: "file",
        name: "image4",
        ref: this.fileInputImage4,
        onChange: function onChange(event) {
          return _this3.handleImage(event, "image4");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1291
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "custom-file-label",
        htmlFor: "input-image4",
        ref: this.fileInputImagem4Label,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1300
        },
        __self: this
      }, "Selecionar Imagem 4"))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1308
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        lg: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1309
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1310
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "form-control-label",
        htmlFor: "input-tags",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1311
        },
        __self: this
      }, "Tags"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1316
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_tagsinput__WEBPACK_IMPORTED_MODULE_15___default.a, {
        onlyUnique: true,
        className: "bootstrap-tagsinput",
        onChange: this.handleTagsinput,
        value: this.state.campaign.tags,
        tagProps: {
          className: "tag badge mr-1"
        },
        inputProps: {
          className: "",
          placeholder: ""
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1317
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        lg: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1331
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1332
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "form-control-label",
        htmlFor: "input-unique",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1333
        },
        __self: this
      }, "Voucher \xDAnico"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1338
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "custom-toggle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1339
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        name: "unique",
        checked: this.state.campaign.unique,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1340
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "custom-toggle-slider rounded-circle",
        "data-label-off": "off",
        "data-label-on": "on",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1346
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        lg: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1355
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1356
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "form-control-label",
        htmlFor: "input-status",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1357
        },
        __self: this
      }, "Status"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1362
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "custom-toggle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1363
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        name: "status",
        checked: this.state.campaign.status,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1364
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "custom-toggle-slider rounded-circle",
        "data-label-off": "off",
        "data-label-on": "on",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1370
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", {
        className: "my-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1381
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h6", {
        className: "heading-small text-muted mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1383
        },
        __self: this
      }, "Informa\xE7\xF5es do cupom"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "pl-lg-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1386
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1387
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        lg: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1388
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1389
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "form-control-label",
        htmlFor: "input-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1390
        },
        __self: this
      }, "T\xEDtulo"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        id: "input-title",
        placeholder: "Promo\xE7\xE3o de...",
        type: "text",
        name: "title",
        value: this.state.campaign.voucher.title,
        onChange: this.handleVoucher,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1396
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        lg: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1406
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1407
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "form-control-label",
        htmlFor: "input-spotlight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1408
        },
        __self: this
      }, "Destaque"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        id: "input-spotlight",
        placeholder: "Vale um",
        type: "text",
        name: "spotlight",
        value: this.state.campaign.voucher.spotlight,
        onChange: this.handleVoucher,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1414
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        lg: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1424
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1425
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "form-control-label",
        htmlFor: "input-promotion",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1426
        },
        __self: this
      }, "Promo\xE7\xE3o"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        id: "input-promotion",
        placeholder: "50%",
        type: "text",
        name: "promotion",
        value: this.state.campaign.voucher.promotion,
        onChange: this.handleVoucher,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1432
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        lg: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1442
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1443
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "form-control-label",
        htmlFor: "input-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1444
        },
        __self: this
      }, "Descri\xE7\xE3o"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        id: "input-description",
        placeholder: "Voucher equivale a 50% de desconto...",
        type: "text",
        name: "description",
        value: this.state.campaign.voucher.description,
        onChange: this.handleVoucher,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1450
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        lg: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1460
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1461
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "form-control-label",
        htmlFor: "input-period",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1462
        },
        __self: this
      }, "Per\xEDodo"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        id: "input-period",
        placeholder: "V\xE1lido at\xE9 dia 31/01/2019",
        type: "text",
        name: "period",
        value: this.state.campaign.voucher.period,
        onChange: this.handleVoucher,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1468
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        lg: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1478
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "form-control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1479
        },
        __self: this
      }, "Regulamento"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1484
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_quill__WEBPACK_IMPORTED_MODULE_14___default.a, {
        value: this.state.campaign.voucher.rules,
        onChange: this.handleTextEditor,
        theme: "snow",
        modules: {
          toolbar: [["bold", "italic"], ["link", "blockquote", "code", "image"], [{
            list: "ordered"
          }, {
            list: "bullet"
          }]]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1485
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1507
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        md: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1508
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1509
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "form-control-label",
        htmlFor: "input-redirect",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1510
        },
        __self: this
      }, "Redirect"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        id: "input-redirect",
        placeholder: "https://www.example.com.br",
        type: "text",
        name: "redirect",
        value: this.state.campaign.voucher.redirect,
        onChange: this.handleVoucher,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1516
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", {
        className: "my-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1528
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h6", {
        className: "heading-small text-muted mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1530
        },
        __self: this
      }, "Extras"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "pl-lg-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1531
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1532
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "form-control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1533
        },
        __self: this
      }, "Observa\xE7\xF5es"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        placeholder: "Digite suas observa\xE7\xF5es aqui",
        rows: "4",
        type: "textarea",
        name: "observations",
        value: this.state.campaign.observations,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1534
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          textAlign: "right"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1544
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        color: "primary",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1545
        },
        __self: this
      }, "Salvar Altera\xE7\xF5es")))))))));
    }
  }]);

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=main.3bca11793c5ccda988a4.hot-update.js.map