import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import MainPage from "./components/main";
import CarmodelList from "./components/carmodel-list";
import EmployeeList from "./components/employee-list";
import SalesList from "./components/sales-list";
// import EditCarmodel from "./components/edit-carmodel.component";
import CreateCarmodel from "./components/create-carmodel";
import CreateEmployee from "./components/create-employee";
import CreateSale from "./components/create-sale";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <br />
        <Route exact path="/" component={MainPage} />
        <Route path="/cmlist" component={CarmodelList} />
        <Route path="/emplist" component={EmployeeList} />
        <Route path="/sales" component={SalesList} />
        {/* <Route path="/edit/:id" component={EditCarmodel} /> */}
        <Route path="/createcarmodel" component={CreateCarmodel} />
        <Route path="/createemployee" component={CreateEmployee} />
        <Route path="/createsale" component={CreateSale} />
      </div>
    </Router>
  );
}

export default App;
