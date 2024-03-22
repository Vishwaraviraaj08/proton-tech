import React from "react";
import { Link } from "react-router-dom";
import data from '../../utils/data.json'
import './Navbar.css'

export const Navbar = () => {
    let sections = data.sections


    return (
        <nav className={"navbar sticky-top navbar-expand-lg navbar-dark dark-color-bg px-lg-5"} style={{minHeight: '13vh'}}>
            <div className="container-fluid">
                <img src="/images/logo.png" alt="logo" height={"30px"} width={"30px"}/>
                <Link className="navbar-brand fs-5 light-color-text ms-3" to="/">
                    {"Proton Tech"}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    
                >
                    <img src="/images/menu.png" alt="menu" height={"30px"} width={"30px"}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {sections.map((section, i) => {
                            return (
                                <li className="nav-item fs-6 text-capitalize mx-3 mb-2" key={i} >
                                    <Link className="nav-link light-color-dim-text" to={`${section.to}`}>
                                        {section.name}
                                    </Link>
                                    <div className="line-animate light-color-bg"></div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>

    );

};
