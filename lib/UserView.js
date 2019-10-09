"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UserView = exports.UserShape = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var UserShape = {
  background: _propTypes.default.string,
  image: _propTypes.default.string,
  name: _propTypes.default.string,
  email: _propTypes.default.string
};
exports.UserShape = UserShape;

var UserView =
/*#__PURE__*/
function (_Component) {
  _inherits(UserView, _Component);

  function UserView() {
    _classCallCheck(this, UserView);

    return _possibleConstructorReturn(this, _getPrototypeOf(UserView).apply(this, arguments));
  }

  _createClass(UserView, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          background = _this$props.background,
          image = _this$props.image,
          name = _this$props.name,
          email = _this$props.email;
      return _react.default.createElement("div", {
        className: "user-view"
      }, background && _react.default.createElement("div", {
        className: "background"
      }, _react.default.createElement("img", {
        src: background
      })), image && _react.default.createElement("a", {
        href: "#!user"
      }, _react.default.createElement("img", {
        className: "circle",
        src: image
      })), name && _react.default.createElement("a", {
        href: "#!name"
      }, _react.default.createElement("span", {
        className: "white-text name"
      }, name)), email && _react.default.createElement("a", {
        href: "#!email"
      }, _react.default.createElement("span", {
        className: "white-text email"
      }, email)));
    }
  }]);

  return UserView;
}(_react.Component);

exports.UserView = UserView;
UserView.propTypes = UserShape;
var _default = UserView;
exports.default = _default;