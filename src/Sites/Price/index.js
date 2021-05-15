import React from "react";
import Calculator from "./calculator"
import "./styles.css"

function Price () {
    
    return(
        <div className="portfolio">
            <div className="portfolioObject">
                <h1 >
                    Odhad ceny
                </h1>
                <Calculator/>
            </div>
            <div className="portfolioObject">
                <h2>
                    Upozornění,
                </h2>
                <p>odhad ceny je pouze orientační hodnota. Skutečná cena je závislá na mnoha dalších faktorech
                     a vzájemné dohodě.</p>
                <div>
                    <p>
                        Pro více informací ohledne ceny za natíraní mně neváhejte kontaktovat. 
                    </p>
                </div>
            </div>
            
        </div>

    )
}

export default Price