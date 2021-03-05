import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Header } from "./Header";
import "./main.css";

ReactDOM.render(
  <Header />,
  document.body.appendChild(document.createElement("div"))
);
