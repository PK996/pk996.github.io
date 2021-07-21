import React from "react";
import { Link } from "react-router-dom";
import Calculator from "../../Components/Calculator";
import "./styles.css";

function Painting() {
  return (
    <div className="portfolio">
      <div className="portfolioObject">
        <h1>Odhad ceny</h1>
        <Calculator />
      </div>
      <div className="portfolioObject">
        <h2>Upozornění,</h2>
        <p>
          odhad ceny je pouze orientační hodnota. Skutečná cena je závislá na
          dalších faktorech a vzájemné dohodě. Pro více informací a odhad na
          místě mně neváhejte <Link to="/">kontaktovat</Link>.
        </p>
        <h2>Sádrování</h2>
        <p>
          První půl hodina sádrovaní je ZDARMA, během ní jsou upraveny běžné
          nedokonalosti. V Případě rozsáhlých nedokonalostí se účtuje 200 Kč/
          hod.
        </p>
        <div>
          <h2>Vysvětlivky</h2>
          <ul className="List">
            <li className="ListItem">
              <b>Základní barvy </b> vznikají namícháním pigmentu dle požadavek
              klienta
            </li>
            <li className="ListItem">
              <b>Speciální barvy,</b> které nelze namíchat jsou zakoupeny u
              specialistů a cena se pohybuje od 60 do 110 kč/ m²
            </li>
            <li className="ListItem">
              <b>Penetrace</b> je vyžadována na nových nebo seškrabaných
              površích
            </li>
            <li className="ListItem">
              <b>Seškrab omítky</b> je vykonáván v případě hrubé vrstvy
              předchozích nátěrů.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Painting;
