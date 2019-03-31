/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/components/categories.js":
/*!*********************************************!*\
  !*** ./assets/src/components/categories.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colby-student-clubs.module.scss */ \"./assets/src/components/colby-student-clubs.module.scss\");\n/* harmony import */ var _colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _category_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category-button */ \"./assets/src/components/category-button.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ \"./assets/src/store/index.js\");\n\n\n/**\n * WordPress dependencies\n */\n\n\n/**\n * Internal dependencies\n */\n\n\n\n\n\nvar Categories = function Categories(_ref) {\n  var categories = _ref.categories;\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    className: _colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.categories\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_category_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    id: \"all\",\n    name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Show all')\n  }), categories.map(function (_ref2) {\n    var id = _ref2.id,\n        name = _ref2.name;\n    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_category_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: id,\n      id: id,\n      name: name\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__[\"withSelect\"])(function (select) {\n  return {\n    categories: select(_store__WEBPACK_IMPORTED_MODULE_5__[\"STORE_NAME\"]).getCategories()\n  };\n})(Categories));\n\n//# sourceURL=webpack:///./assets/src/components/categories.js?");

/***/ }),

/***/ "./assets/src/components/category-button.js":
/*!**************************************************!*\
  !*** ./assets/src/components/category-button.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ \"@wordpress/compose\");\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colby-student-clubs.module.scss */ \"./assets/src/components/colby-student-clubs.module.scss\");\n/* harmony import */ var _colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ \"./assets/src/store/index.js\");\n\n\n/**\n * WordPress dependencies\n */\n\n\n/**\n * Internal dependencies\n */\n\n\n\n\nvar CategoryButton = function CategoryButton(_ref) {\n  var active = _ref.active,\n      setActiveCategory = _ref.setActiveCategory,\n      id = _ref.id,\n      name = _ref.name;\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"button\", {\n    onClick: function onClick() {\n      setActiveCategory(active ? null : id);\n    },\n    className: [_colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.category, active === true ? _colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['category--active'] : ''].join(' ').trim(),\n    dangerouslySetInnerHTML: {\n      __html: name\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__[\"compose\"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__[\"withSelect\"])(function (select, _ref2) {\n  var id = _ref2.id;\n  return {\n    active: select(_store__WEBPACK_IMPORTED_MODULE_4__[\"STORE_NAME\"]).getActiveCategory() === id\n  };\n}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__[\"withDispatch\"])(function (dispatch) {\n  return {\n    setActiveCategory: dispatch(_store__WEBPACK_IMPORTED_MODULE_4__[\"STORE_NAME\"]).setActiveCategory\n  };\n})])(CategoryButton));\n\n//# sourceURL=webpack:///./assets/src/components/category-button.js?");

/***/ }),

/***/ "./assets/src/components/club/club-description.js":
/*!********************************************************!*\
  !*** ./assets/src/components/club/club-description.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/html-entities */ \"@wordpress/html-entities\");\n/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/**\n * WordPress dependencies\n */\n\n\nvar ClubDescription = function ClubDescription(_ref) {\n  var description = _ref.description;\n\n  if (description === null) {\n    return null;\n  }\n\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    dangerouslySetInnerHTML: {\n      __html: Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__[\"decodeEntities\"])(description)\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClubDescription);\n\n//# sourceURL=webpack:///./assets/src/components/club/club-description.js?");

/***/ }),

/***/ "./assets/src/components/club/club-title.js":
/*!**************************************************!*\
  !*** ./assets/src/components/club/club-title.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../colby-student-clubs.module.scss */ \"./assets/src/components/colby-student-clubs.module.scss\");\n/* harmony import */ var _colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/**\n * Internal dependencies\n */\n\n\nvar ClubTitle = function ClubTitle(_ref) {\n  var title = _ref.title,\n      website = _ref.website;\n\n  var Title = function Title() {\n    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"h1\", {\n      className: _colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['club-name']\n    }, title);\n  };\n\n  return website && website.length > 0 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"a\", {\n    style: {\n      textDecoration: 'underline'\n    },\n    href: website\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(Title, null)) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(Title, null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClubTitle);\n\n//# sourceURL=webpack:///./assets/src/components/club/club-title.js?");

/***/ }),

/***/ "./assets/src/components/club/index.js":
/*!*********************************************!*\
  !*** ./assets/src/components/club/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../colby-student-clubs.module.scss */ \"./assets/src/components/colby-student-clubs.module.scss\");\n/* harmony import */ var _colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meta */ \"./assets/src/components/club/meta/index.js\");\n/* harmony import */ var _club_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./club-title */ \"./assets/src/components/club/club-title.js\");\n/* harmony import */ var _club_description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./club-description */ \"./assets/src/components/club/club-description.js\");\n\n\n/**\n * Internal dependencies\n */\n\n\n\n\n\nfunction getMetaField(meta, field) {\n  if (field in meta) {\n    if (Array.isArray(meta[field])) {\n      return meta[field][0];\n    }\n\n    return meta[field];\n  }\n\n  return '';\n}\n\nvar Club = function Club(_ref) {\n  var content = _ref.content,\n      title = _ref.title,\n      meta = _ref.meta,\n      style = _ref.style;\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    className: \"\".concat(_colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.club, \" \").concat(style ? _colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[style] : '')\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    className: _colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.clubInner\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_club_title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    website: getMetaField(meta, 'website'),\n    title: title.rendered\n  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_club_description__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    description: content.rendered\n  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_meta__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    officePhone: getMetaField(meta, 'office_phone'),\n    facultyAdvisor: getMetaField(meta, 'faculty_advisor'),\n    facultyAdvisorEmail: getMetaField(meta, 'faculty_advisor_email'),\n    studentAdvisor: getMetaField(meta, 'student_advisor'),\n    studentAdvisorEmail: getMetaField(meta, 'faculty_advisor_email')\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Club);\n\n//# sourceURL=webpack:///./assets/src/components/club/index.js?");

/***/ }),

/***/ "./assets/src/components/club/meta/advisor-phone.js":
/*!**********************************************************!*\
  !*** ./assets/src/components/club/meta/advisor-phone.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar AdvisorPhone = function AdvisorPhone(_ref) {\n  var phone = _ref.phone;\n\n  if (!phone) {\n    return null;\n  }\n\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"dt\", null, \"Phone\"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"dd\", null, phone));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdvisorPhone);\n\n//# sourceURL=webpack:///./assets/src/components/club/meta/advisor-phone.js?");

/***/ }),

/***/ "./assets/src/components/club/meta/advisor.js":
/*!****************************************************!*\
  !*** ./assets/src/components/club/meta/advisor.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Advisor = function Advisor(_ref) {\n  var email = _ref.email,\n      name = _ref.name,\n      title = _ref.title;\n\n  if ([email, name, title].indexOf(null) !== -1) {\n    return null;\n  }\n\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"dt\", null, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"dd\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"a\", {\n    href: \"mailto:\".concat(email)\n  }, name.split(',').map(function (item) {\n    return item.trim();\n  }).join(', '))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Advisor);\n\n//# sourceURL=webpack:///./assets/src/components/club/meta/advisor.js?");

/***/ }),

/***/ "./assets/src/components/club/meta/index.js":
/*!**************************************************!*\
  !*** ./assets/src/components/club/meta/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../colby-student-clubs.module.scss */ \"./assets/src/components/colby-student-clubs.module.scss\");\n/* harmony import */ var _colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _advisor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advisor */ \"./assets/src/components/club/meta/advisor.js\");\n/* harmony import */ var _advisor_phone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advisor-phone */ \"./assets/src/components/club/meta/advisor-phone.js\");\n\n\n/**\n * Internal dependencies\n */\n\n\n\n\nvar Meta = function Meta(_ref) {\n  var phone = _ref.phone,\n      facultyAdvisor = _ref.facultyAdvisor,\n      facultyAdvisorEmail = _ref.facultyAdvisorEmail,\n      studentAdvisor = _ref.studentAdvisor,\n      studentAdvisorEmail = _ref.studentAdvisorEmail;\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"dl\", {\n    className: _colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.meta\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_advisor_phone__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    phone: phone\n  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_advisor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Faculty/Staff Advisor\",\n    email: facultyAdvisorEmail,\n    name: facultyAdvisor\n  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_advisor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Student Advisor\",\n    email: studentAdvisorEmail,\n    name: studentAdvisor\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Meta);\n\n//# sourceURL=webpack:///./assets/src/components/club/meta/index.js?");

/***/ }),

/***/ "./assets/src/components/colby-student-clubs.js":
/*!******************************************************!*\
  !*** ./assets/src/components/colby-student-clubs.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ \"@wordpress/compose\");\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colby-student-clubs.module.scss */ \"./assets/src/components/colby-student-clubs.module.scss\");\n/* harmony import */ var _colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories */ \"./assets/src/components/categories.js\");\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page */ \"./assets/src/components/page.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store */ \"./assets/src/store/index.js\");\n\n\n/**\n * WordPress dependencies\n */\n\n\n\n\n/**\n * Internal dependencies\n */\n\n\n\n\n\n\nvar ColbyStudentClubs = function ColbyStudentClubs(_ref) {\n  var searchTerm = _ref.searchTerm,\n      setSearchTerm = _ref.setSearchTerm;\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    className: _colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    className: _colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['category-pane']\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__[\"TextControl\"], {\n    value: searchTerm,\n    onChange: setSearchTerm,\n    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__[\"__\"])('Search')\n  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_categories__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    className: _colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['page-pane']\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_page__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__[\"compose\"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__[\"withSelect\"])(function (select) {\n  return {\n    searchTerm: select(_store__WEBPACK_IMPORTED_MODULE_8__[\"STORE_NAME\"]).getSearchTerm()\n  };\n}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__[\"withDispatch\"])(function (dispatch) {\n  return {\n    setSearchTerm: dispatch(_store__WEBPACK_IMPORTED_MODULE_8__[\"STORE_NAME\"]).setSearchTerm\n  };\n})])(ColbyStudentClubs));\n\n//# sourceURL=webpack:///./assets/src/components/colby-student-clubs.js?");

/***/ }),

/***/ "./assets/src/components/colby-student-clubs.module.scss":
/*!***************************************************************!*\
  !*** ./assets/src/components/colby-student-clubs.module.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\nmodule.exports = {\"container\":\"container--ZEBSI\",\"club\":\"club--1KWML\",\"clubInner\":\"clubInner--2yiQ8\",\"cardContainer\":\"cardContainer--3TL6I\",\"categories-title\":\"categories-title--rf4C0\",\"page--loading\":\"page--loading--29SE0\",\"category\":\"category--2M3t-\",\"category--active\":\"category--active--2hQDJ\",\"club-name\":\"club-name--2alAC\",\"loading-container\":\"loading-container--1hl3x\"};\n\n//# sourceURL=webpack:///./assets/src/components/colby-student-clubs.module.scss?");

/***/ }),

/***/ "./assets/src/components/page.js":
/*!***************************************!*\
  !*** ./assets/src/components/page.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ \"./assets/src/store/index.js\");\n/* harmony import */ var _club__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./club */ \"./assets/src/components/club/index.js\");\n/* harmony import */ var _colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./colby-student-clubs.module.scss */ \"./assets/src/components/colby-student-clubs.module.scss\");\n/* harmony import */ var _colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n/**\n * WordPress dependencies\n */\n\n\n/**\n * Internal dependencies\n */\n\n\n\n/**\n * Internal dependencies\n */\n\n\n\nvar Page = function Page(_ref) {\n  var activeCategory = _ref.activeCategory,\n      content = _ref.content,\n      posts = _ref.posts,\n      loading = _ref.loading,\n      searchTerm = _ref.searchTerm;\n\n  if (loading === true) {\n    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(\"div\", {\n      className: [_colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.page, _colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a['page--loading']].join(' ').trim()\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__[\"Spinner\"], null));\n  }\n\n  if (loading === false && searchTerm.length > 0 && posts.length === 0) {\n    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(\"div\", {\n      className: _colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.page\n    }, \"No results for \", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(\"i\", null, searchTerm));\n  }\n\n  if (activeCategory === null && searchTerm.length === 0 && content.length > 0) {\n    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(\"div\", {\n      dangerouslySetInnerHTML: {\n        __html: content\n      }\n    });\n  }\n\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(\"div\", {\n    className: _colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.page\n  }, posts.map(function (post) {\n    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(_club__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n      key: post.id\n    }, post));\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__[\"withSelect\"])(function (select) {\n  return {\n    activeCategory: select(_store__WEBPACK_IMPORTED_MODULE_4__[\"STORE_NAME\"]).getActiveCategory(),\n    content: select(_store__WEBPACK_IMPORTED_MODULE_4__[\"STORE_NAME\"]).getContent(),\n    loading: select(_store__WEBPACK_IMPORTED_MODULE_4__[\"STORE_NAME\"]).getIsLoading(),\n    posts: select(_store__WEBPACK_IMPORTED_MODULE_4__[\"STORE_NAME\"]).getPosts(select(_store__WEBPACK_IMPORTED_MODULE_4__[\"STORE_NAME\"]).getQuery()),\n    searchTerm: select(_store__WEBPACK_IMPORTED_MODULE_4__[\"STORE_NAME\"]).getSearchTerm()\n  };\n})(Page));\n\n//# sourceURL=webpack:///./assets/src/components/page.js?");

/***/ }),

/***/ "./assets/src/components/single-category.js":
/*!**************************************************!*\
  !*** ./assets/src/components/single-category.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colby-student-clubs.module.scss */ \"./assets/src/components/colby-student-clubs.module.scss\");\n/* harmony import */ var _colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _club__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./club */ \"./assets/src/components/club/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ \"./assets/src/store/index.js\");\n\n\n\n/**\n * WordPress dependencies\n */\n\n/**\n * Internal dependencies\n */\n\n\n\n\n\nvar SingleCategory = function SingleCategory(_ref) {\n  var _ref$posts = _ref.posts,\n      posts = _ref$posts === void 0 ? [] : _ref$posts;\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(\"div\", {\n    className: _colby_student_clubs_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.cardContainer\n  }, posts.map(function (post) {\n    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(_club__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n      key: post.id\n    }, post, {\n      style: \"card\"\n    }));\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__[\"withSelect\"])(function (select) {\n  return {\n    posts: select(_store__WEBPACK_IMPORTED_MODULE_5__[\"STORE_NAME\"]).getPosts(select(_store__WEBPACK_IMPORTED_MODULE_5__[\"STORE_NAME\"]).getQuery())\n  };\n})(SingleCategory));\n\n//# sourceURL=webpack:///./assets/src/components/single-category.js?");

/***/ }),

/***/ "./assets/src/get-root-data-attribute.js":
/*!***********************************************!*\
  !*** ./assets/src/get-root-data-attribute.js ***!
  \***********************************************/
/*! exports provided: getRootDataAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRootDataAttribute\", function() { return getRootDataAttribute; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./assets/src/index.js\");\n/**\n * Internal dependencies\n */\n\nfunction getRootDataAttribute(attribute) {\n  var dataset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ___WEBPACK_IMPORTED_MODULE_0__[\"ROOT_DATASET\"];\n\n  if (attribute in dataset) {\n    return dataset[attribute];\n  }\n}\n\n//# sourceURL=webpack:///./assets/src/get-root-data-attribute.js?");

/***/ }),

/***/ "./assets/src/index.js":
/*!*****************************!*\
  !*** ./assets/src/index.js ***!
  \*****************************/
/*! exports provided: ROOT_DATASET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ROOT_DATASET\", function() { return ROOT_DATASET; });\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom-ready */ \"@wordpress/dom-ready\");\n/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_colby_student_clubs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/colby-student-clubs */ \"./assets/src/components/colby-student-clubs.js\");\n/* harmony import */ var _components_single_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/single-category */ \"./assets/src/components/single-category.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ \"./assets/src/store/index.js\");\n\n\n/**\n * WordPress dependencies\n */\n\n\n\n/**\n * Internal dependencies\n */\n\n\n\n/**\n * Internal dependencies\n */\n\n\nvar ROOT_DATASET;\n_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default()(function () {\n  var root = document.querySelector('[data-student-clubs-root]');\n\n  if (!root) {\n    return;\n  }\n\n  ROOT_DATASET = root.dataset;\n  Object(_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__[\"dispatch\"])(_store__WEBPACK_IMPORTED_MODULE_5__[\"STORE_NAME\"]).setContent(root.innerHTML.trim());\n\n  if (ROOT_DATASET.categories.length) {\n    Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__[\"dispatch\"])(_store__WEBPACK_IMPORTED_MODULE_5__[\"STORE_NAME\"]).setCategories(ROOT_DATASET.categories.split(','));\n    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_components_single_category__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), root);\n    return;\n  }\n\n  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_components_colby_student_clubs__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), root);\n});\n\n//# sourceURL=webpack:///./assets/src/index.js?");

/***/ }),

/***/ "./assets/src/store/actions.js":
/*!*************************************!*\
  !*** ./assets/src/store/actions.js ***!
  \*************************************/
/*! exports provided: SET_CONTENT, setContent, SET_IS_LOADING, setIsLoading, SET_POSTS, setPosts, SET_SEARCH_TERM, setSearchTerm, SET_CATEGORIES, setCategories, SET_ACTIVE_CATEGORY, setActiveCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_CONTENT\", function() { return SET_CONTENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setContent\", function() { return setContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_IS_LOADING\", function() { return SET_IS_LOADING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setIsLoading\", function() { return setIsLoading; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_POSTS\", function() { return SET_POSTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setPosts\", function() { return setPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_SEARCH_TERM\", function() { return SET_SEARCH_TERM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setSearchTerm\", function() { return setSearchTerm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_CATEGORIES\", function() { return SET_CATEGORIES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setCategories\", function() { return setCategories; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_ACTIVE_CATEGORY\", function() { return SET_ACTIVE_CATEGORY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setActiveCategory\", function() { return setActiveCategory; });\nvar SET_CONTENT = 'SET_CONTENT';\nvar setContent = function setContent(content) {\n  return {\n    type: SET_CONTENT,\n    content: content\n  };\n};\nvar SET_IS_LOADING = 'SET_IS_LOADING';\nvar setIsLoading = function setIsLoading(isLoading) {\n  return {\n    type: SET_IS_LOADING,\n    isLoading: isLoading\n  };\n};\nvar SET_POSTS = 'SET_POSTS';\nvar setPosts = function setPosts(query, posts) {\n  return {\n    type: SET_POSTS,\n    query: query,\n    posts: posts\n  };\n};\nvar SET_SEARCH_TERM = 'SET_SEARCH_TERM';\nvar setSearchTerm = function setSearchTerm(searchTerm) {\n  return {\n    type: SET_SEARCH_TERM,\n    searchTerm: searchTerm\n  };\n};\nvar SET_CATEGORIES = 'SET_CATEGORIES';\nvar setCategories = function setCategories(categories) {\n  return {\n    type: SET_CATEGORIES,\n    categories: categories\n  };\n};\nvar SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY';\nvar setActiveCategory = function setActiveCategory(activeCategory) {\n  return {\n    type: SET_ACTIVE_CATEGORY,\n    activeCategory: activeCategory\n  };\n};\n\n//# sourceURL=webpack:///./assets/src/store/actions.js?");

/***/ }),

/***/ "./assets/src/store/index.js":
/*!***********************************!*\
  !*** ./assets/src/store/index.js ***!
  \***********************************/
/*! exports provided: STORE_NAME, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STORE_NAME\", function() { return STORE_NAME; });\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ \"./assets/src/store/reducer.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ \"./assets/src/store/actions.js\");\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ \"./assets/src/store/selectors.js\");\n/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers */ \"./assets/src/store/resolvers.js\");\n/**\n * WordPress dependencies\n */\n\n/**\n * Internal dependencies\n */\n\n\n\n\n\nvar STORE_NAME = 'wp-student-clubs';\n\nvar setUpStore = function setUpStore() {\n  Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__[\"registerStore\"])(STORE_NAME, {\n    reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    actions: {\n      setIsLoading: _actions__WEBPACK_IMPORTED_MODULE_2__[\"setIsLoading\"],\n      setPosts: _actions__WEBPACK_IMPORTED_MODULE_2__[\"setPosts\"],\n      setSearchTerm: _actions__WEBPACK_IMPORTED_MODULE_2__[\"setSearchTerm\"],\n      setCategories: _actions__WEBPACK_IMPORTED_MODULE_2__[\"setCategories\"],\n      setActiveCategory: _actions__WEBPACK_IMPORTED_MODULE_2__[\"setActiveCategory\"],\n      setContent: _actions__WEBPACK_IMPORTED_MODULE_2__[\"setContent\"]\n    },\n    selectors: _selectors__WEBPACK_IMPORTED_MODULE_3__,\n    resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_4__\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setUpStore);\n\n//# sourceURL=webpack:///./assets/src/store/index.js?");

/***/ }),

/***/ "./assets/src/store/reducer.js":
/*!*************************************!*\
  !*** ./assets/src/store/reducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"./node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ \"./assets/src/store/actions.js\");\n\n\n\n/**\n * Internal dependencies\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n    activeCategory: null,\n    categories: [],\n    content: '',\n    isLoading: true,\n    posts: {},\n    searchTerm: ''\n  };\n  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_2__[\"SET_CONTENT\"]:\n      {\n        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {\n          content: action.content\n        });\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_2__[\"SET_IS_LOADING\"]:\n      {\n        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {\n          isLoading: action.isLoading\n        });\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_2__[\"SET_POSTS\"]:\n      {\n        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {\n          posts: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state.posts, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, action.query, action.posts))\n        });\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_2__[\"SET_SEARCH_TERM\"]:\n      {\n        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {\n          searchTerm: action.searchTerm\n        });\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_2__[\"SET_CATEGORIES\"]:\n      {\n        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {\n          categories: action.categories\n        });\n      }\n\n    case _actions__WEBPACK_IMPORTED_MODULE_2__[\"SET_ACTIVE_CATEGORY\"]:\n      {\n        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {\n          activeCategory: action.activeCategory\n        });\n      }\n  }\n\n  return state;\n});\n\n//# sourceURL=webpack:///./assets/src/store/reducer.js?");

/***/ }),

/***/ "./assets/src/store/resolvers.js":
/*!***************************************!*\
  !*** ./assets/src/store/resolvers.js ***!
  \***************************************/
/*! exports provided: getPosts, getCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPosts\", function() { return getPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCategories\", function() { return getCategories; });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/url */ \"@wordpress/url\");\n/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! . */ \"./assets/src/store/index.js\");\n/* harmony import */ var _get_root_data_attribute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../get-root-data-attribute */ \"./assets/src/get-root-data-attribute.js\");\n\n\n\n\n/**\n * WordPress dependencies\n */\n\n\n/**\n * Internal dependencies\n */\n\n\n\nvar getPosts =\n/*#__PURE__*/\nfunction () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(query) {\n    var url, response, posts;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__[\"dispatch\"])(___WEBPACK_IMPORTED_MODULE_5__[\"STORE_NAME\"]).setIsLoading(true);\n            url = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_4__[\"addQueryArgs\"])(Object(_get_root_data_attribute__WEBPACK_IMPORTED_MODULE_6__[\"getRootDataAttribute\"])('endpoint'), query);\n            _context.next = 4;\n            return global.fetch(url);\n\n          case 4:\n            response = _context.sent;\n            _context.next = 7;\n            return response.json();\n\n          case 7:\n            posts = _context.sent;\n            Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__[\"dispatch\"])(___WEBPACK_IMPORTED_MODULE_5__[\"STORE_NAME\"]).setPosts(JSON.stringify(query), posts);\n            Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__[\"dispatch\"])(___WEBPACK_IMPORTED_MODULE_5__[\"STORE_NAME\"]).setIsLoading(false);\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getPosts(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar getCategories =\n/*#__PURE__*/\nfunction () {\n  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {\n    var url, response, totalPages, page, categories, receivedCategories;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            totalPages = 9;\n            page = 1;\n            categories = [];\n            /**\n             * The WordPress REST API only allows us to fetch 99 objects at a time, so we need to make a paginated\n             * request to handle cases where there are more than 99 categories.\n             */\n\n          case 3:\n            if (!(page < totalPages)) {\n              _context2.next = 16;\n              break;\n            }\n\n            url = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_4__[\"addQueryArgs\"])(Object(_get_root_data_attribute__WEBPACK_IMPORTED_MODULE_6__[\"getRootDataAttribute\"])('categoriesEndpoint'), {\n              per_page: 99,\n              exclude: 1,\n              hide_empty: true,\n              page: page\n            });\n            _context2.next = 7;\n            return global.fetch(url);\n\n          case 7:\n            response = _context2.sent;\n            totalPages = response.headers.get('X-WP-TotalPages');\n            _context2.next = 11;\n            return response.json();\n\n          case 11:\n            receivedCategories = _context2.sent;\n            categories = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(categories), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(receivedCategories));\n            page += 1;\n            _context2.next = 3;\n            break;\n\n          case 16:\n            Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__[\"dispatch\"])(___WEBPACK_IMPORTED_MODULE_5__[\"STORE_NAME\"]).setCategories(categories);\n\n          case 17:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function getCategories() {\n    return _ref2.apply(this, arguments);\n  };\n}();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./assets/src/store/resolvers.js?");

/***/ }),

/***/ "./assets/src/store/selectors.js":
/*!***************************************!*\
  !*** ./assets/src/store/selectors.js ***!
  \***************************************/
/*! exports provided: getContent, getIsLoading, getPosts, getCategories, getActiveCategory, getSearchTerm, getQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getContent\", function() { return getContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getIsLoading\", function() { return getIsLoading; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPosts\", function() { return getPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCategories\", function() { return getCategories; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getActiveCategory\", function() { return getActiveCategory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSearchTerm\", function() { return getSearchTerm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getQuery\", function() { return getQuery; });\n/* harmony import */ var rememo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rememo */ \"./node_modules/rememo/es/rememo.js\");\n/**\n * External dependencies\n */\n\nvar getContent = function getContent(state) {\n  return state.content;\n};\nvar getIsLoading = function getIsLoading(state) {\n  return state.isLoading;\n};\nvar getPosts = function getPosts(state) {\n  return state.posts[JSON.stringify(getQuery(state))];\n};\nvar getCategories = function getCategories(state) {\n  return state.categories;\n};\nvar getActiveCategory = function getActiveCategory(state) {\n  return state.activeCategory;\n};\nvar getSearchTerm = function getSearchTerm(state) {\n  return state.searchTerm;\n};\nvar getQuery = Object(rememo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function (state) {\n  var query = {};\n  var searchTerm = getSearchTerm(state);\n\n  if (searchTerm.length > 3) {\n    query.search = searchTerm;\n  }\n\n  var category = getActiveCategory(state);\n\n  if (null !== category && 'all' !== category) {\n    query.categories = [category];\n  } // Order the object by key so that cached query keys are uniform.\n\n\n  return Object.keys(query).sort().reduce(function (result, key) {\n    result[key] = query[key];\n    return result;\n  }, {});\n}, function (state) {\n  return [state.searchTerm, state.activeCategory];\n});\n\n//# sourceURL=webpack:///./assets/src/store/selectors.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) {\n    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {\n      arr2[i] = arr[i];\n    }\n\n    return arr2;\n  }\n}\n\nmodule.exports = _arrayWithoutHoles;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n\nmodule.exports = _asyncToGenerator;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/asyncToGenerator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _extends() {\n  module.exports = _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\nmodule.exports = _extends;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/extends.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArray(iter) {\n  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\n\nmodule.exports = _iterableToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\n\nmodule.exports = _nonIterableSpread;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineProperty = __webpack_require__(/*! ./defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n\nfunction _objectSpread(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n    var ownKeys = Object.keys(source);\n\n    if (typeof Object.getOwnPropertySymbols === 'function') {\n      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {\n        return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n      }));\n    }\n\n    ownKeys.forEach(function (key) {\n      defineProperty(target, key, source[key]);\n    });\n  }\n\n  return target;\n}\n\nmodule.exports = _objectSpread;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/objectSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js\");\n\nvar iterableToArray = __webpack_require__(/*! ./iterableToArray */ \"./node_modules/@babel/runtime/helpers/iterableToArray.js\");\n\nvar nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ \"./node_modules/@babel/runtime/helpers/nonIterableSpread.js\");\n\nfunction _toConsumableArray(arr) {\n  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();\n}\n\nmodule.exports = _toConsumableArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/regenerator/index.js?");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nvar runtime = (function (exports) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  exports.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunctionPrototype[toStringTagSymbol] =\n    GeneratorFunction.displayName = \"GeneratorFunction\";\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      prototype[method] = function(arg) {\n        return this._invoke(method, arg);\n      };\n    });\n  }\n\n  exports.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  exports.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      if (!(toStringTagSymbol in genFun)) {\n        genFun[toStringTagSymbol] = \"GeneratorFunction\";\n      }\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  exports.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return Promise.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return Promise.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration.\n          result.value = unwrapped;\n          resolve(result);\n        }, function(error) {\n          // If a rejected Promise was yielded, throw the rejection back\n          // into the async generator function so it can be handled there.\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new Promise(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  exports.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  exports.async = function(innerFn, outerFn, self, tryLocsList) {\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList)\n    );\n\n    return exports.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        // Note: [\"return\"] must be used for ES3 parsing compatibility.\n        if (delegate.iterator[\"return\"]) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  Gp[toStringTagSymbol] = \"Generator\";\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  exports.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  exports.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n\n  // Regardless of whether this script is executing as a CommonJS module\n  // or not, return the runtime object so that we can declare the variable\n  // regeneratorRuntime in the outer scope, which allows this module to be\n  // injected easily by `bin/regenerator --include-runtime script.js`.\n  return exports;\n\n}(\n  // If this script is executing as a CommonJS module, use module.exports\n  // as the regeneratorRuntime namespace. Otherwise create a new empty\n  // object. Either way, the resulting object will be used to initialize\n  // the regeneratorRuntime variable at the top of this file.\n   true ? module.exports : undefined\n));\n\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  // This module should not be running in strict mode, so the above\n  // assignment should always work unless something is misconfigured. Just\n  // in case runtime.js accidentally runs in strict mode, we can escape\n  // strict mode using a global Function call. This could conceivably fail\n  // if a Content Security Policy forbids using Function, but in that case\n  // the proper solution is to fix the accidental strict mode problem. If\n  // you've misconfigured your bundler to force strict mode and applied a\n  // CSP to forbid Function, and you're not willing to fix either of those\n  // problems, please detail your unique predicament in a GitHub issue.\n  Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n}\n\n\n//# sourceURL=webpack:///./node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "./node_modules/rememo/es/rememo.js":
/*!******************************************!*\
  !*** ./node_modules/rememo/es/rememo.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nvar LEAF_KEY, hasWeakMap;\n\n/**\n * Arbitrary value used as key for referencing cache object in WeakMap tree.\n *\n * @type {Object}\n */\nLEAF_KEY = {};\n\n/**\n * Whether environment supports WeakMap.\n *\n * @type {boolean}\n */\nhasWeakMap = typeof WeakMap !== 'undefined';\n\n/**\n * Returns the first argument as the sole entry in an array.\n *\n * @param {*} value Value to return.\n *\n * @return {Array} Value returned as entry in array.\n */\nfunction arrayOf( value ) {\n\treturn [ value ];\n}\n\n/**\n * Returns true if the value passed is object-like, or false otherwise. A value\n * is object-like if it can support property assignment, e.g. object or array.\n *\n * @param {*} value Value to test.\n *\n * @return {boolean} Whether value is object-like.\n */\nfunction isObjectLike( value ) {\n\treturn !! value && 'object' === typeof value;\n}\n\n/**\n * Creates and returns a new cache object.\n *\n * @return {Object} Cache object.\n */\nfunction createCache() {\n\tvar cache = {\n\t\tclear: function() {\n\t\t\tcache.head = null;\n\t\t},\n\t};\n\n\treturn cache;\n}\n\n/**\n * Returns true if entries within the two arrays are strictly equal by\n * reference from a starting index.\n *\n * @param {Array}  a         First array.\n * @param {Array}  b         Second array.\n * @param {number} fromIndex Index from which to start comparison.\n *\n * @return {boolean} Whether arrays are shallowly equal.\n */\nfunction isShallowEqual( a, b, fromIndex ) {\n\tvar i;\n\n\tif ( a.length !== b.length ) {\n\t\treturn false;\n\t}\n\n\tfor ( i = fromIndex; i < a.length; i++ ) {\n\t\tif ( a[ i ] !== b[ i ] ) {\n\t\t\treturn false;\n\t\t}\n\t}\n\n\treturn true;\n}\n\n/**\n * Returns a memoized selector function. The getDependants function argument is\n * called before the memoized selector and is expected to return an immutable\n * reference or array of references on which the selector depends for computing\n * its own return value. The memoize cache is preserved only as long as those\n * dependant references remain the same. If getDependants returns a different\n * reference(s), the cache is cleared and the selector value regenerated.\n *\n * @param {Function} selector      Selector function.\n * @param {Function} getDependants Dependant getter returning an immutable\n *                                 reference or array of reference used in\n *                                 cache bust consideration.\n *\n * @return {Function} Memoized selector.\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = (function( selector, getDependants ) {\n\tvar rootCache, getCache;\n\n\t// Use object source as dependant if getter not provided\n\tif ( ! getDependants ) {\n\t\tgetDependants = arrayOf;\n\t}\n\n\t/**\n\t * Returns the root cache. If WeakMap is supported, this is assigned to the\n\t * root WeakMap cache set, otherwise it is a shared instance of the default\n\t * cache object.\n\t *\n\t * @return {(WeakMap|Object)} Root cache object.\n\t */\n\tfunction getRootCache() {\n\t\treturn rootCache;\n\t}\n\n\t/**\n\t * Returns the cache for a given dependants array. When possible, a WeakMap\n\t * will be used to create a unique cache for each set of dependants. This\n\t * is feasible due to the nature of WeakMap in allowing garbage collection\n\t * to occur on entries where the key object is no longer referenced. Since\n\t * WeakMap requires the key to be an object, this is only possible when the\n\t * dependant is object-like. The root cache is created as a hierarchy where\n\t * each top-level key is the first entry in a dependants set, the value a\n\t * WeakMap where each key is the next dependant, and so on. This continues\n\t * so long as the dependants are object-like. If no dependants are object-\n\t * like, then the cache is shared across all invocations.\n\t *\n\t * @see isObjectLike\n\t *\n\t * @param {Array} dependants Selector dependants.\n\t *\n\t * @return {Object} Cache object.\n\t */\n\tfunction getWeakMapCache( dependants ) {\n\t\tvar caches = rootCache,\n\t\t\tisUniqueByDependants = true,\n\t\t\ti, dependant, map, cache;\n\n\t\tfor ( i = 0; i < dependants.length; i++ ) {\n\t\t\tdependant = dependants[ i ];\n\n\t\t\t// Can only compose WeakMap from object-like key.\n\t\t\tif ( ! isObjectLike( dependant ) ) {\n\t\t\t\tisUniqueByDependants = false;\n\t\t\t\tbreak;\n\t\t\t}\n\n\t\t\t// Does current segment of cache already have a WeakMap?\n\t\t\tif ( caches.has( dependant ) ) {\n\t\t\t\t// Traverse into nested WeakMap.\n\t\t\t\tcaches = caches.get( dependant );\n\t\t\t} else {\n\t\t\t\t// Create, set, and traverse into a new one.\n\t\t\t\tmap = new WeakMap();\n\t\t\t\tcaches.set( dependant, map );\n\t\t\t\tcaches = map;\n\t\t\t}\n\t\t}\n\n\t\t// We use an arbitrary (but consistent) object as key for the last item\n\t\t// in the WeakMap to serve as our running cache.\n\t\tif ( ! caches.has( LEAF_KEY ) ) {\n\t\t\tcache = createCache();\n\t\t\tcache.isUniqueByDependants = isUniqueByDependants;\n\t\t\tcaches.set( LEAF_KEY, cache );\n\t\t}\n\n\t\treturn caches.get( LEAF_KEY );\n\t}\n\n\t// Assign cache handler by availability of WeakMap\n\tgetCache = hasWeakMap ? getWeakMapCache : getRootCache;\n\n\t/**\n\t * Resets root memoization cache.\n\t */\n\tfunction clear() {\n\t\trootCache = hasWeakMap ? new WeakMap() : createCache();\n\t}\n\n\t// eslint-disable-next-line jsdoc/check-param-names\n\t/**\n\t * The augmented selector call, considering first whether dependants have\n\t * changed before passing it to underlying memoize function.\n\t *\n\t * @param {Object} source    Source object for derivation.\n\t * @param {...*}   extraArgs Additional arguments to pass to selector.\n\t *\n\t * @return {*} Selector result.\n\t */\n\tfunction callSelector( /* source, ...extraArgs */ ) {\n\t\tvar len = arguments.length,\n\t\t\tcache, node, i, args, dependants;\n\n\t\t// Create copy of arguments (avoid leaking deoptimization).\n\t\targs = new Array( len );\n\t\tfor ( i = 0; i < len; i++ ) {\n\t\t\targs[ i ] = arguments[ i ];\n\t\t}\n\n\t\tdependants = getDependants.apply( null, args );\n\t\tcache = getCache( dependants );\n\n\t\t// If not guaranteed uniqueness by dependants (primitive type or lack\n\t\t// of WeakMap support), shallow compare against last dependants and, if\n\t\t// references have changed, destroy cache to recalculate result.\n\t\tif ( ! cache.isUniqueByDependants ) {\n\t\t\tif ( cache.lastDependants && ! isShallowEqual( dependants, cache.lastDependants, 0 ) ) {\n\t\t\t\tcache.clear();\n\t\t\t}\n\n\t\t\tcache.lastDependants = dependants;\n\t\t}\n\n\t\tnode = cache.head;\n\t\twhile ( node ) {\n\t\t\t// Check whether node arguments match arguments\n\t\t\tif ( ! isShallowEqual( node.args, args, 1 ) ) {\n\t\t\t\tnode = node.next;\n\t\t\t\tcontinue;\n\t\t\t}\n\n\t\t\t// At this point we can assume we've found a match\n\n\t\t\t// Surface matched node to head if not already\n\t\t\tif ( node !== cache.head ) {\n\t\t\t\t// Adjust siblings to point to each other.\n\t\t\t\tnode.prev.next = node.next;\n\t\t\t\tif ( node.next ) {\n\t\t\t\t\tnode.next.prev = node.prev;\n\t\t\t\t}\n\n\t\t\t\tnode.next = cache.head;\n\t\t\t\tnode.prev = null;\n\t\t\t\tcache.head.prev = node;\n\t\t\t\tcache.head = node;\n\t\t\t}\n\n\t\t\t// Return immediately\n\t\t\treturn node.val;\n\t\t}\n\n\t\t// No cached value found. Continue to insertion phase:\n\n\t\tnode = {\n\t\t\t// Generate the result from original function\n\t\t\tval: selector.apply( null, args ),\n\t\t};\n\n\t\t// Avoid including the source object in the cache.\n\t\targs[ 0 ] = null;\n\t\tnode.args = args;\n\n\t\t// Don't need to check whether node is already head, since it would\n\t\t// have been returned above already if it was\n\n\t\t// Shift existing head down list\n\t\tif ( cache.head ) {\n\t\t\tcache.head.prev = node;\n\t\t\tnode.next = cache.head;\n\t\t}\n\n\t\tcache.head = node;\n\n\t\treturn node.val;\n\t}\n\n\tcallSelector.getDependants = getDependants;\n\tcallSelector.clear = clear;\n\tclear();\n\n\treturn callSelector;\n});\n\n\n//# sourceURL=webpack:///./node_modules/rememo/es/rememo.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "@wordpress/components":
/*!********************************!*\
  !*** external "wp.components" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp.components;\n\n//# sourceURL=webpack:///external_%22wp.components%22?");

/***/ }),

/***/ "@wordpress/compose":
/*!*****************************!*\
  !*** external "wp.compose" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp.compose;\n\n//# sourceURL=webpack:///external_%22wp.compose%22?");

/***/ }),

/***/ "@wordpress/data":
/*!**************************!*\
  !*** external "wp.data" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp.data;\n\n//# sourceURL=webpack:///external_%22wp.data%22?");

/***/ }),

/***/ "@wordpress/dom-ready":
/*!******************************!*\
  !*** external "wp.domReady" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp.domReady;\n\n//# sourceURL=webpack:///external_%22wp.domReady%22?");

/***/ }),

/***/ "@wordpress/element":
/*!*****************************!*\
  !*** external "wp.element" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp.element;\n\n//# sourceURL=webpack:///external_%22wp.element%22?");

/***/ }),

/***/ "@wordpress/html-entities":
/*!**********************************!*\
  !*** external "wp.htmlEntities" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp.htmlEntities;\n\n//# sourceURL=webpack:///external_%22wp.htmlEntities%22?");

/***/ }),

/***/ "@wordpress/i18n":
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp.i18n;\n\n//# sourceURL=webpack:///external_%22wp.i18n%22?");

/***/ }),

/***/ "@wordpress/url":
/*!*************************!*\
  !*** external "wp.url" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp.url;\n\n//# sourceURL=webpack:///external_%22wp.url%22?");

/***/ })

/******/ });