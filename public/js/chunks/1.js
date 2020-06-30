(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/src/store/data-list/moduleDataList.js":
/*!************************************************************!*\
  !*** ./resources/js/src/store/data-list/moduleDataList.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduleDataListState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleDataListState.js */ "./resources/js/src/store/data-list/moduleDataListState.js");
/* harmony import */ var _moduleDataListMutations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduleDataListMutations.js */ "./resources/js/src/store/data-list/moduleDataListMutations.js");
/* harmony import */ var _moduleDataListActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduleDataListActions.js */ "./resources/js/src/store/data-list/moduleDataListActions.js");
/* harmony import */ var _moduleDataListGetters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduleDataListGetters.js */ "./resources/js/src/store/data-list/moduleDataListGetters.js");
/*=========================================================================================
  File Name: moduleDataList.js
  Description: Calendar Module
==========================================================================================*/




/* harmony default export */ __webpack_exports__["default"] = ({
  isRegistered: false,
  namespaced: true,
  state: _moduleDataListState_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  mutations: _moduleDataListMutations_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _moduleDataListActions_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  getters: _moduleDataListGetters_js__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./resources/js/src/store/data-list/moduleDataListActions.js":
/*!*******************************************************************!*\
  !*** ./resources/js/src/store/data-list/moduleDataListActions.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  // fetchEventLabels({ commit }) {
  //   return new Promise((resolve, reject) => {
  //     axios.get("/api/apps/calendar/labels")
  //       .then((response) => {
  //         commit('SET_LABELS', response.data)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
  addDriver: function addDriver(_ref, item) {
    var commit = _ref.commit;
    return new Promise(function (resolve, reject) {
      console.log(item);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/drivers/new", item).then(function (response) {
        commit('ADD_DRIVER', Object.assign(item, response.data.data));
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  fetchDrivers: function fetchDrivers(_ref2) {
    var commit = _ref2.commit;
    return new Promise(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/drivers").then(function (response) {
        commit('SET_DRIVERS', response.data.data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  updateDriver: function updateDriver(_ref3, item) {
    var commit = _ref3.commit;
    return new Promise(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/drivers/update/".concat(item.id), item).then(function (response) {
        commit('UPDATE_DRIVER', response.data.data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  removeDriver: function removeDriver(_ref4, itemId) {
    var commit = _ref4.commit;
    return new Promise(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/drivers/remove/".concat(itemId)).then(function (response) {
        commit('REMOVE_DRIVER', itemId);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  addVehicle: function addVehicle(_ref5, item) {
    var commit = _ref5.commit;
    return new Promise(function (resolve, reject) {
      console.log(item);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/vehicles/new", item).then(function (response) {
        commit('ADD_VEHICLE', Object.assign(item, response.data.data));
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  fetchVehicles: function fetchVehicles(_ref6) {
    var commit = _ref6.commit;
    return new Promise(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/vehicles").then(function (response) {
        commit('SET_VEHICLES', response.data.data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  removeVehicle: function removeVehicle(_ref7, itemId) {
    var commit = _ref7.commit;
    return new Promise(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/vehicles/remove/".concat(itemId)).then(function (response) {
        commit('REMOVE_VEHICLE', itemId);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  updateVehicle: function updateVehicle(_ref8, item) {
    var commit = _ref8.commit;
    return new Promise(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/vehicles/update/".concat(item.id), item).then(function (response) {
        commit('UPDATE_VEHICLE', response.data.data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  addCategory: function addCategory(_ref9, item) {
    var commit = _ref9.commit;
    return new Promise(function (resolve, reject) {
      console.log(item);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/categories/new", item).then(function (response) {
        commit('ADD_CATEGORY', Object.assign(item, response.data.data));
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  fetchCategories: function fetchCategories(_ref10) {
    var commit = _ref10.commit;
    return new Promise(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/categories").then(function (response) {
        commit('SET_CATEGORIES', response.data.data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  updateCategory: function updateCategory(_ref11, item) {
    var commit = _ref11.commit;
    return new Promise(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/categories/update/".concat(item.id), item).then(function (response) {
        commit('UPDATE_CATEGORY', response.data.data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  removeCategory: function removeCategory(_ref12, itemId) {
    var commit = _ref12.commit;
    return new Promise(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/categories/remove/".concat(itemId)).then(function (response) {
        commit('REMOVE_CATEGORY', itemId);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  addFactor: function addFactor(_ref13, item) {
    var commit = _ref13.commit;
    return new Promise(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/factors/new", item, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (response) {
        commit('ADD_FACTOR', Object.assign(item, response.data.data));
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  fetchFactors: function fetchFactors(_ref14) {
    var commit = _ref14.commit;
    return new Promise(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/factors").then(function (response) {
        commit('SET_FACTORS', response.data.data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  updateFactor: function updateFactor(_ref15, item) {
    var commit = _ref15.commit;
    return new Promise(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/factors/update/".concat(item.id), item.form).then(function (response) {
        commit('UPDATE_FACTOR', response.data.data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  removeFactor: function removeFactor(_ref16, itemId) {
    var commit = _ref16.commit;
    return new Promise(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/factors/remove/".concat(itemId)).then(function (response) {
        commit('REMOVE_FACTOR', itemId);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  } // eventDragged({ commit }, payload) {
  //   return new Promise((resolve, reject) => {
  //     axios.post(`/api/apps/calendar/event/dragged/${payload.event.id}`, {payload: payload})
  //       .then((response) => {
  //         // Convert Date String to Date Object
  //         let event = response.data
  //         event.startDate = new Date(event.startDate)
  //         event.endDate = new Date(event.endDate)
  //         commit('UPDATE_EVENT', event)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },

});

/***/ }),

/***/ "./resources/js/src/store/data-list/moduleDataListGetters.js":
/*!*******************************************************************!*\
  !*** ./resources/js/src/store/data-list/moduleDataListGetters.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: moduleCalendarGetters.js
  Description: Calendar Module Getters
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ({// getItem: state => (productId) => state.products.find((product) => product.id == productId),
});

/***/ }),

/***/ "./resources/js/src/store/data-list/moduleDataListMutations.js":
/*!*********************************************************************!*\
  !*** ./resources/js/src/store/data-list/moduleDataListMutations.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ({
  // SET_LABELS(state, labels) {
  //   state.eventLabels = labels
  // },
  ADD_DRIVER: function ADD_DRIVER(state, driver) {
    state.drivers.unshift(driver);
  },
  SET_DRIVERS: function SET_DRIVERS(state, drivers) {
    state.drivers = drivers;
  },
  UPDATE_DRIVER: function UPDATE_DRIVER(state, driver) {
    var driverIndex = state.drivers.findIndex(function (p) {
      return p.id == driver.id;
    });
    Object.assign(state.drivers[driverIndex], driver);
  },
  REMOVE_DRIVER: function REMOVE_DRIVER(state, itemId) {
    var ItemIndex = state.drivers.findIndex(function (p) {
      return p.id == itemId;
    });
    state.drivers.splice(ItemIndex, 1);
  },
  ADD_VEHICLE: function ADD_VEHICLE(state, vehicle) {
    state.vehicles.unshift(vehicle);
  },
  SET_VEHICLES: function SET_VEHICLES(state, vehicles) {
    state.vehicles = vehicles;
  },
  UPDATE_VEHICLE: function UPDATE_VEHICLE(state, vehicle) {
    var vehicleIndex = state.vehicles.findIndex(function (p) {
      return p.id == vehicle.id;
    });
    Object.assign(state.vehicles[vehicleIndex], vehicle);
  },
  REMOVE_VEHICLE: function REMOVE_VEHICLE(state, itemId) {
    var ItemIndex = state.vehicles.findIndex(function (p) {
      return p.id == itemId;
    });
    state.vehicles.splice(ItemIndex, 1);
  },
  ADD_CATEGORY: function ADD_CATEGORY(state, category) {
    state.categories.unshift(category);
  },
  SET_CATEGORIES: function SET_CATEGORIES(state, categories) {
    state.categories = categories;
  },
  UPDATE_CATEGORY: function UPDATE_CATEGORY(state, category) {
    var categoryIndex = state.categories.findIndex(function (p) {
      return p.id == category.id;
    });
    Object.assign(state.categories[categoryIndex], category);
  },
  REMOVE_CATEGORY: function REMOVE_CATEGORY(state, itemId) {
    var ItemIndex = state.categories.findIndex(function (p) {
      return p.id == itemId;
    });
    state.categories.splice(ItemIndex, 1);
  },
  ADD_FACTOR: function ADD_FACTOR(state, factor) {
    state.factors.unshift(factor);
  },
  SET_FACTORS: function SET_FACTORS(state, factors) {
    state.factors = factors;
  },
  UPDATE_FACTOR: function UPDATE_FACTOR(state, factor) {
    var factorIndex = state.factors.findIndex(function (p) {
      return p.id == factor.id;
    });
    Object.assign(state.factors[factorIndex], factor);
  },
  REMOVE_FACTOR: function REMOVE_FACTOR(state, itemId) {
    var ItemIndex = state.factors.findIndex(function (p) {
      return p.id == itemId;
    });
    state.factors.splice(ItemIndex, 1);
  },
  ADD_ADMIN: function ADD_ADMIN(state, admin) {
    state.admins.unshift(admin);
  },
  SET_ADMINS: function SET_ADMINS(state, admins) {
    state.admins = admins;
  },
  UPDATE_ADMIN: function UPDATE_ADMIN(state, admin) {
    var adminIndex = state.admins.findIndex(function (p) {
      return p.id == admin.id;
    });
    Object.assign(state.admins[adminIndex], admin);
  },
  REMOVE_ADMIN: function REMOVE_ADMIN(state, itemId) {
    var ItemIndex = state.admins.findIndex(function (p) {
      return p.id == itemId;
    });
    state.admins.splice(ItemIndex, 1);
  }
});

/***/ }),

/***/ "./resources/js/src/store/data-list/moduleDataListState.js":
/*!*****************************************************************!*\
  !*** ./resources/js/src/store/data-list/moduleDataListState.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  drivers: [],
  vehicles: [],
  categories: [],
  factors: [],
  users: []
});

/***/ })

}]);