import React, { Component } from "react";
import axios from "axios";

const Sale = props => (
  <tr>
    <td>{props.sale.ide}</td>
    <td>{props.sale.employee_id}</td>
    <td>{props.sale.carmodel_id}</td>
  </tr>
);

export default class SalesList extends Component {
  constructor(props) {
    super(props);

    this.state = { sales: [], carmodels: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/total_sales/")
      .then(response => {
        this.setState({ sales: response.data });
      })
      .catch(error => {
        console.log(error);
      });

    /*     axios
      .get("http://localhost:5000/carmodels/")
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            carmodels: response.data.map(carmodel => carmodel.price)
          });
        }
      })
      .catch(error => {
        console.log(error);
      }); */
  }
  SaleList() {
    return this.state.sales.map(currentsale => {
      return <Sale sale={currentsale} key={currentsale._id} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Sales</h3>
        <div className="table-container">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th> Employee ID</th>
                <th> Carmodel ID</th>
              </tr>
            </thead>
            <tbody>{this.SaleList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
