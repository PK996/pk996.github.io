import React, { Component } from "react"
import FormInput from "./../../Components/Input"
import "./styles.css"

class Calculator extends Component {
    
    constructor (props) {
        super(props);

        this.state = {
            paintedArea: "",
            layers: "",
            colorType:"",
            summary: "",
            };
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }


    handleChange(e) {
        var { name, value } = e.target;
        this.setState({
            [name]: parseInt(value)
        }) 
        this.setState ({
            summary: "Prepočítejte"
        })     
    }

    handleFormSubmit = async event => {
        event.preventDefault();
        this.setState({summary: (this.state.layers * this.state.paintedArea * this.state.colorType) + (this.state.location * Math.ceil(this.state.layers * this.state.paintedArea/100)) + " Kč", })      
    }

    render() {
        const {paintedArea, layers, colorType, summary, location} = this.state
        return (
            <div>
            <div>
            <form >
                
                <p>Plocha sten k natření:
                    <FormInput
                        type="number"
                        name="paintedArea"
                        placeholder="plocha v m2"
                        value={paintedArea}
                        onChange={this.handleChange}
                />
                </p>
                <p>Počet náteru:
                    <FormInput
                        type="number"
                        name="layers"
                        placeholder="vrstvy"
                        value={layers}
                        onChange={this.handleChange}
                 />
                </p>
                <label>
                    <p>Typ Barvy: </p>
                    <select id={colorType} name="colorType" onChange={this.handleChange}>
                        <option selected value="0">--Vyberte barvu-- </option>
                        <option value="15">Primalex-Polar White</option>
                        <option value="100"></option>
                        <option value="150"></option>
                        <option value="110"></option>
                        <option value="200"></option>
                        <option value="120"> </option>
                        <option value="400"> </option>
                        <option value="250"></option>
                        <option value="500"></option>
                        
                    </select>
                </label>
                <label>
                    <p>Lokalita: </p>
                    <select id={location} name="location" onChange={this.handleChange}>
                        <option selected value="0">--Vyberte polohu nemovitosti-- </option>
                        <option value="20">Blansko</option>
                        <option value="100">od Adamova po Boskovice</option>
                        <option value="150">Brno nebo Vyškov</option>
                        <option value="110">Brno-venkov Sever</option>
                        <option value="200">Brno-venkov Jih</option>
                        <option value="120">Letovice nebo Prostějov </option>
                        <option value="400">zbytek JMK </option>
                        <option value="250">Svitavy</option>
                        <option value="500">Olomouc, Přerov, Kroměříž, Zlín</option>
                        
                    </select>
                </label>
                <p>+ paušální poplatek</p>              
                <button onClick={this.handleFormSubmit}>Vypočítat odhad</button>      
            </form> 
            </div>
            <div className="result">
            {summary}
            </div> 
            </div> 
        )
    }
}
export default Calculator