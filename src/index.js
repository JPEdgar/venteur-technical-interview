"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
var App_1 = require("./App");
var GlobalWrapper_1 = require("./context/GlobalWrapper");
require("./styles/styles.css");
require("bootstrap/dist/css/bootstrap.min.css");
var root = client_1["default"].createRoot(document.getElementById("root"));
root.render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(GlobalWrapper_1["default"], null,
        react_1["default"].createElement(App_1["default"], null))));
