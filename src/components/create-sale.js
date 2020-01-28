import React, { Component } from "react";
import axios from "axios";

export default class CreateSale extends Component {
  constructor(props) {
    super(props);

    this.onChangeIde = this.onChangeIde.bind(this);
    this.onChangeEmployeeId = this.onChangeEmployeeId.bind(this);
    this.onChangeCarmodelId = this.onChangeCarmodelId.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      ide: "",
      employee_id: "",
      carmodel_id: ""
    };
  }

  onChangeIde(e) {
    this.setState({
      ide: e.target.value
    });
  }

  onChangeEmployeeId(e) {
    this.setState({
      employee_id: e.target.value
    });
  }

  onChangeCarmodelId(e) {
    this.setState({
      carmodel_id: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const sale = {
      ide: this.state.ide,
      employee_id: this.state.employee_id,
      carmodel_id: this.state.carmodel_id
    };

    console.log(sale);

    axios.post("http://localhost:5000/total_sales/add", sale).then(res => console.log(res.data));

    window.location = "/sales";
  }

  render() {
    return (
      <div>
        <h3>Add A New Sale</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group row">
            <label className="col-sm-4">Id: </label>
            <div className="col-sm-5">
              <input type="text" required className="form-control" value={this.state.ide} onChange={this.onChangeIde} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4">Employee ID: </label>
            <div className="col-sm-5">
              <input
                type="text"
                className="form-control"
                value={this.state.employee_id}
                onChange={this.onChangeEmployeeId}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4">Carmodel ID: </label>
            <div className="col-sm-5">
              <input
                type="text"
                className="form-control"
                value={this.state.carmodel_id}
                onChange={this.onChangeCarmodelId}
              />
            </div>
          </div>
          <div className="form-group col-sm-4">
            <input type="submit" value="Add Sale" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
