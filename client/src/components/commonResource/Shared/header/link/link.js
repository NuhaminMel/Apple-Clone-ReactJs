import React from "react";
import { Link } from "react-router-dom";

function NavLinks(props) {
        return(
            <li className="nav-item">
                <Link className="nav-link" to={props.link}> {props.linkName}</Link>
            </li>
        )
    
}


export default NavLinks;
