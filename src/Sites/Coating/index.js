import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function Coating() {
  return (
    <div className="portfolio">
      <div className="portfolioObject">
        <h1>Cena za natírání</h1>
        <h3>Radiátor</h3>
        <p>25 Kč/ žebro</p>
        <h3>Trubky</h3>
        <p>50 Kč/ m²</p>
        <h3>Zárubeň</h3>
        <p>300 - 450 Kč/ kus</p>
        <h3>Dveře</h3>
        <p>1000 - 1200 Kč/ kus</p>
        <h3>Sokl</h3>
        <p>190 Kč/ m²</p>
      </div>
      <div className="portfolioObject">
        <h2>Upozornění,</h2>
        <p>
          odhad ceny je pouze orientační hodnota. Skutečná cena je závislá na
          dalších faktorech a vzájemné dohodě. Pro více informací a odhad na
          místě mě neváhejte <Link to="/">kontaktovat</Link>.
        </p>
      </div>
    </div>
  );
}

export default Coating;
