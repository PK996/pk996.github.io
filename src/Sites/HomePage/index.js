import React from "react";
import Contact from "../Contact";
import "./styles.css";

function HomePage() {
  return (
    <div>
      <div className="HomePage">
        <div className="HomePageObject">
          <h1>Vítejte!</h1>
          <p>
            Jmenuji se Petr Vašíř a nabízim služby v oblasti malířství a
            nateračštví. Maluji jak interier, tak i exterier rodinných domu,
            bytu, státnich zařízení a jiných objektů. Moje Zázemí je Blansko ale
            přijedu za Vámi i do širšího okolí. V případe zájmu si mužte na
            téhle stránce vypočítat hrubý odhady ceny za malováni a najít můj
            kontakt
          </p>
          <h2>O mně</h2>
          <p>
            Vystudoval jsem strední školu malířskou a této profesi se jakožto
            živnostík v Česku věnuji více jak 25 let.
          </p>
        </div>
        <div className="HomePageObject">
          <Contact />
        </div>
        <div></div>
      </div>
    </div>
  );
}
export default HomePage;
