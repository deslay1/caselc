import React, { Component } from "react";
import axios from "axios";
import "../App.css";

const Carmodel = props => (
  <tr>
    <td>{props.carmodel.ide}</td>
    <td>{props.carmodel.brand}</td>
    <td>{props.carmodel.model}</td>
    <td>{props.carmodel.price} kr</td>
    <td>
      <a
        href="/cmlist"
        onClick={() => {
          props.deleteCarmodel(props.carmodel._id);
        }}>
        Delete
      </a>
    </td>
  </tr>
);

export default class CarmodelList extends Component {
  constructor(props) {
    super(props);

    this.deleteCarmodel = this.deleteCarmodel.bind(this);

    this.state = { carmodels: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/carmodels/")
      .then(response => {
        this.setState({ carmodels: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteCarmodel(id) {
    axios.delete("http://localhost:5000/carmodels/" + id).then(response => {
      console.log(response.data);
    });

    this.setState({
      carmodels: this.state.carmodels.filter(el => el._id !== id)
    });
  }

  CarmodelList() {
    return this.state.carmodels
      .sort((a, b) => a.ide - b.ide)
      .map(currentcarmodel => {
        return <Carmodel carmodel={currentcarmodel} deleteCarmodel={this.deleteCarmodel} key={currentcarmodel._id} />;
      });
  }

  render() {
    return (
      <div>
        <h3>Carmodels</h3>
        <div className="table-container">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{this.CarmodelList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
