"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var persistConfig = {
  key: "root",
  storage: _storage["default"]
};

var rootReducer = function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var temp = state;

  switch (action.type) {
    case "addView":
      temp[action.value].view_count = temp[action.value].view_count + 1;
      return temp;

    case "addPic":
      console.log(_typeof(action.value));

      if (typeof temp !== "array") {
        return Array(1).fill(action.value);
      }

      action.value.map(function (item) {
        return temp.push([item]);
      });
      return temp;

    default:
      return state;
  }
};

var _default = (0, _reduxPersist.persistReducer)(persistConfig, rootReducer);

exports["default"] = _default;