import React from "react";
import PropTypes from "prop-types";

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-md bg-dark">
            <div className="container-fluid">
                <a href={props.brandUrl} className="navbar-brand text-white">
                    {props.brand}
                </a>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    {props.items.map((item,index)=> (
                        <li key={index} className="nav-item">
                            <a href={item.url} className={`nav-link ${item.extraClass || ''}`}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            </div>
        </nav>
    )
}

NavBar.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ),
    brandUrl: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired
}



export default NavBar;