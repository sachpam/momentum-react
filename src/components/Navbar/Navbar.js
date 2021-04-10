// import { useState } from "react";
import "./Navbar.css";
import { useEffect, useState } from 'react';

function Navbar() {
    const [show, setShow] = useState(false);

    return (
        <div className="nav">
            <div className="nav-comp">
                <h3 className="link">Links</h3>
                <div className="btn1" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                    <div className="search">
                    
                        <i class="fas fa-search"></i>
                    
                        {show && (
                            <input type="search" name="" id="" class="search-bar"/>
                        )}
                    </div>
                </div>

            </div>
            <div className="nav-comp">
                <i class="fas fa-cloud-sun"></i>
                <div className="weather-box">
                    <h1 className="weather">26</h1>
                    <div className="city">Kandy</div>
                </div>

            </div>
        </div>

    )
}

export default Navbar;