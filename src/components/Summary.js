import React, {Component} from 'react';
import {firstLetterCapitalized} from '../helper';

class Summary extends Component{

    showSummary = () =>{
        const {brand, year, plan} = this.props.dateCar;

        if(!brand || !year || !plan) return null;

        return(
            <div className='summary'>
                <h2>Resumen de cotización</h2>
                <li>Marca: {firstLetterCapitalized(brand)}</li>
                <li>Año del auto: {year}</li>
                <li>Plan: {firstLetterCapitalized(plan)}</li>

            </div>
        )
    }
    render(){
        return (
            <div>
                {this.showSummary()}
            </div>
        )
    }
}

export default Summary;