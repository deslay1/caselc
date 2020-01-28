import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Carshop
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/cmlist" className="nav-link">
                Carmodels
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/emplist" className="nav-link">
                Employees
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/sales" className="nav-link">
                Sales
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="navbar-item">
              <Link to="/createcarmodel" className="nav-link">
                Add a carmodel
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/createemployee" className="nav-link">
                Add an employee
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/createsale" className="nav-link">
                Add a sale
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
