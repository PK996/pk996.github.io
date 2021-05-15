import React from "react"
import {Link} from "react-router-dom"
import "./styles.css";

function Menu (){
    return (
    <div className="Top">
        <div className="Logo" >
            <Link exact to ="/"> <img src="./icons/Menuicon.png" className="icon" alt="icon"  />  </Link>
        </div>
        <div className="MenuUp">
            <ul className="Menu">
                <li ><Link to ="/Price" className="MenuObject"> Ceník </Link></li>
                <li ><Link to ="/Portfolio" className="MenuObject"> Portfolio </Link></li>
            </ul>
        </div>
        
    </div>
        )
}

export default Menu