import React, { Component } from "react";
import axios from "axios";

export default class CreateEmployee extends Component {
  constructor(props) {
    super(props);

    this.onChangeIde = this.onChangeIde.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      ide: "",
      name: ""
    };
  }

  onChangeIde(e) {
    this.setState({
      ide: e.target.value
    });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const employee = {
      ide: this.state.ide,
      name: this.state.name
    };

    console.log(employee);

    axios.post("http://localhost:5000/employees/add", employee).then(res => console.log(res.data));

    window.location = "/emplist";
  }

  render() {
    return (
      <div>
        <h3>Add A New Employee</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group row">
            <label className="col-sm-4">Id: </label>
            <div className="col-sm-5">
              <input type="text" required className="form-control" value={this.state.ide} onChange={this.onChangeIde} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4">Name: </label>
            <div className="col-sm-5">
              <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} />
            </div>
          </div>
          <div className="form-group col-sm-4">
            <input type="submit" value="Add Employee" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
