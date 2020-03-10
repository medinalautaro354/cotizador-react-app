import React, {Component} from 'react';

class Form extends Component {
//refs son para leer los valores de los campos de un formulario.

    brandRef = React.createRef();
    yearRef = React.createRef();
    basicPlanRef = React.createRef();
    completePlanRef = React.createRef();

    quoteCarInsurance = (e) =>{
        e.preventDefault();

        const infoCar = {
            brand: this.brandRef.current.value,
            year: this.yearRef.current.value,
            plan: this.basicPlanRef.current.checked ? this.basicPlanRef.current.value : this.completePlanRef.current.value
        }

        this.props.quoteInsurance(infoCar);

        //resetear el formulario es opcional
        //e.currentTarget.reset();
    }
    render() {
        return (
            <form className="cotizar-auto" onSubmit={this.quoteCarInsurance}>
                <div className="field">
                    <label>Marca</label>
                    <select name="marca" ref={this.brandRef}>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                </div>

                <div className="field">
                    <label>Año</label>
                    <select name="year" ref={this.yearRef}>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                    </select>
                </div>
                <div className="field">
                    <label>Plan:</label>
                    <input type="radio" name="plan" value="basico" ref={this.basicPlanRef} /> Básico
                    <input type="radio" name="plan" value="completo" ref={this.completePlanRef} /> Completo
                </div>

                <button type="submit" className="button">Cotizar</button>
            </form>
        );
    }
}

export default Form;