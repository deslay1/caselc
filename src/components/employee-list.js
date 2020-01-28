import React, { Component } from "react";
import axios from "axios";

const Employee = props => (
  <tr>
    <td>{props.employee.ide}</td>
    <td>{props.employee.name}</td>
  </tr>
);

export default class EmployeelList extends Component {
  constructor(props) {
    super(props);

    this.state = { employees: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/employees/")
      .then(response => {
        this.setState({ employees: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  EmployeeList() {
    return this.state.employees
      .sort((a, b) => a.ide - b.ide)
      .map(currentemployee => {
        return <Employee employee={currentemployee} key={currentemployee._id} />;
      });
  }

  render() {
    return (
      <div>
        <h3>Employees</h3>
        <div className="table-container">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th> Name</th>
              </tr>
            </thead>
            <tbody>{this.EmployeeList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
