import React, { Component } from "react";
import "./App.css";
import categories from "./catergories.json";
import products from "./products.json";

import { process } from "@progress/kendo-data-query";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Window } from "@progress/kendo-react-dialogs";

import "@progress/kendo-theme-default/dist/all.css";

function App() {
  return (
    <div className="App">
      <h1>Hello KendoReact!</h1>
    </div>
  );
}

export default App;
