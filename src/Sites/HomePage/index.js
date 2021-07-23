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
            Jmenuji se Petr Vašíř a nabízím služby v oblasti malířství a
            natěračství. Maluji jak interiér, tak i exteriér rodinných domů,
            bytů, státních zařízení a jiných objektů.
          </p>
          <p>
            Moje zázemí je Blansko ale přijedu za Vámi i do širšího okolí. V
            případě zájmu si můžete na téhle stránce vypočítat hrubý odhady ceny
            za malováni a najít můj kontakt
          </p>
          <h2>O mně</h2>
          <p>
            Vystudoval jsem střední školu malířskou a nateračskou v Brně. Profesi v
            tomhle oboru se jakožto živnostník v Česku věnuji více jak 25 let.
          </p>
        </div>
        <div className="HomePageObject">
          <Contact />
        </div>
      </div>
    </div>
  );
}
export default HomePage;
