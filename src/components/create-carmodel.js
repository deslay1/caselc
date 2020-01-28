import React, { Component } from "react";
import axios from "axios";

export default class CreateCarmodel extends Component {
  constructor(props) {
    super(props);

    this.onChangeIde = this.onChangeIde.bind(this);
    this.onChangeBrand = this.onChangeBrand.bind(this);
    this.onChangeModel = this.onChangeModel.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      ide: "",
      brand: "",
      model: "",
      price: ""
    };
  }

  onChangeIde(e) {
    this.setState({
      ide: e.target.value
    });
  }

  onChangeBrand(e) {
    this.setState({
      brand: e.target.value
    });
  }

  onChangeModel(e) {
    this.setState({
      model: e.target.value
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const carmodel = {
      ide: this.state.ide,
      brand: this.state.brand,
      model: this.state.model,
      price: this.state.price
    };

    console.log(carmodel);

    axios.post("http://localhost:5000/carmodels/add", carmodel).then(res => console.log(res.data));

    window.location = "/cmlist";
  }

  render() {
    return (
      <div>
        <h3>Add A New Carmodel</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group row">
            <label className="col-sm-4">Id: </label>
            <div className="col-sm-5">
              <input type="text" required className="form-control" value={this.state.ide} onChange={this.onChangeIde} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4">Brand: </label>
            <div className="col-sm-5">
              <input type="text" className="form-control" value={this.state.brand} onChange={this.onChangeBrand} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4">Model </label>
            <div className="col-sm-5">
              <input type="text" className="form-control" value={this.state.model} onChange={this.onChangeModel} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4">Price (kr): </label>
            <div className="col-sm-5">
              <input type="text" className="form-control" value={this.state.price} onChange={this.onChangePrice} />
            </div>
          </div>
          <div className="form-group col-sm-4">
            <input type="submit" value="Add Carmodel" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
