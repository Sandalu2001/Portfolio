import React from "react";


function NavItem(props){
    return(
        <li class="nav-item">
            <a class="nav-link" href={props.href} >{props.name}</a>
        </li>
    )
}

export default NavItem;