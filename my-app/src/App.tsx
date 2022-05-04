import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import "antd/dist/antd.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <MainLayout />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
