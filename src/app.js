import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import "normalize.css/normalize.css"; // normalize CSS so all browsers are build from the same CSS base
import "./styles/styles.scss";

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
