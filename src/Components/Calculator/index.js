import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

import FormInput from "../Input";
import "./styles.css";

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paintedArea: "",
      layers: "",
      colorType: "",
      summary: "0 Kč ",
      penetration: "0",
      scraping: "0",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(e) {
    var { name, value } = e.target;
    this.setState({
      [name]: parseInt(value),
    });
    this.setState({
      summary: "Přepočítejte",
    });
  }

  handleFormSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      summary:
        this.state.layers * this.state.paintedArea * this.state.colorType +
        +(this.state.penetration * this.state.paintedArea) +
        this.state.scraping * this.state.paintedArea +
        this.state.location *
          Math.ceil((this.state.layers * this.state.paintedArea) / 100) +
        " Kč",
    });
  };

  render() {
    const {
      paintedArea,
      layers,
      colorType,
      summary,
      location,
      penetration,
      scraping,
    } = this.state;
    const colorTypeOptions = [
      { value: "0", text: "--Vyberte barvu-- " },
      { value: "45", text: "Bíla barva" },
      { value: "55", text: "Základní barvy" },
      { value: "60", text: "Speciálni barvy 60" },
      { value: "80", text: "Speciálni barvy 80" },
      { value: "100", text: "Speciálni barvy 100" },
      { value: "110", text: "Speciálni barvy 110" },
      { value: "110", text: "Fasádní barvy od 110" },
      { value: "150", text: "Fasádní barvy 150" },
      { value: "200", text: "Fasádní barvy 200" },
      { value: "250", text: "Fasádní barvy 250" },
    ];
    const locationOptions = [
      { value: "0", text: "--Vyberte místo nemovitosti-- " },
      { value: "20", text: "10 km ~ Blansko a okolí" },
      { value: "100", text: "20 km ~ Adamov, Boskovice" },
      { value: "110", text: "30 km ~ Letovice, Bilovice n. S." },
      { value: "150", text: "40 km ~ Brno, Vyškov" },
      { value: "200", text: "50 km ~ Modřice, Přostejov" },
      { value: "250", text: "60 km ~ Svitavy" },
      { value: "500", text: "70 km ~ Olomouc, Přerov, Zlín" },
    ];

    return (
      <>
        <div>
          <form>
            <p>
              Plocha sten k natření:
              <FormInput
                type="number"
                name="paintedArea"
                placeholder="--Plocha v m²--"
                value={paintedArea}
                onChange={this.handleChange}
              />
            </p>
            <p>
              Počet náteru:
              <FormInput
                type="number"
                name="layers"
                placeholder="--Vrstvy--"
                value={layers}
                onChange={this.handleChange}
              />
            </p>
            <label>
              <p>Typ Barvy: </p>
              <select
                id={colorType}
                name="colorType"
                onChange={this.handleChange}
              >
                {colorTypeOptions.map((element) => {
                  return <option value={element.value}>{element.text}</option>;
                })}
              </select>
            </label>
            <label>
              <p>Lokalita - vzálenost od Blanska: </p>
              <select
                id={location}
                name="location"
                onChange={this.handleChange}
              >
                {locationOptions.map((element) => {
                  return <option value={element.value}>{element.text}</option>;
                })}
              </select>
            </label>
            <p>
            Penetrace:
            <div className="radioGroup">
              <FormInput
                id={penetration}
                className="FormCheckbox"
                label="Ne"
                type="radio"
                name="penetration"
                value="0"
                onChange={this.handleChange}
              />
              <FormInput
                id={penetration}
                className="FormCheckbox"
                label="Ano"
                type="radio"
                name="penetration"
                value="20"
                onChange={this.handleChange}
              />
            </div>
            </p>
            <p>
              Škrabání omítky:
              <div className="radioGroup">
                <FormInput
                  id={scraping}
                  label="Ne"
                  className="FormCheckbox"
                  type="radio"
                  name="scraping"
                  value="0"
                  onChange={this.handleChange}
                />
                <FormInput
                  id={scraping}
                  label="Ano"
                  className="FormCheckbox"
                  type="radio"
                  name="scraping"
                  value="20"
                  onChange={this.handleChange}
                />
              </div>
            </p>
            <p>+ paušální poplatek</p>
            <button onClick={this.handleFormSubmit}>Vypočítat odhad</button>
          </form>
        </div>
        <div className="result">{summary}</div>
        <div>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </div>
      </>
    );
  }
}
export default Calculator;
