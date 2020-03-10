import React from "react";
import Header from "./Header";
import Form from "./Form";
import { gainYearGap, calculateByBrand, getPlan } from "../helper";
import Summary from "./Summary";
import Result from "./Result";

class App extends React.Component {
  state = {
    result: "",
    dateCar: {}
  };

  quoteInsurance = infoCar => {
    const { brand, plan, year } = infoCar;

    //Agregamos una base del seguro.
    let base = 2000;

    let result = base;

    const yearDifference = gainYearGap(year);

    result -= (yearDifference * 3 * result) / 100;

    result = calculateByBrand(brand) * result;

    let increase = getPlan(plan);

    result = parseFloat(increase * result).toFixed(2);

    const dateCar = {
      brand,
      plan,
      year
    };
    this.setState({
      result: result,
      dateCar: dateCar
    });
  };
  render() {
    return (
      <div className="container">
        <Header title="Cotizador de seguro de auto." />

        <div className="form-container">
          <Form quoteInsurance={this.quoteInsurance} />
          <div className="summary">
            <Summary dateCar={this.state.dateCar} />
          </div>
          <div className="result">
            <Result result={this.state.result} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
