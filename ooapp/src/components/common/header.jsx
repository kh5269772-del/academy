import React from "react";
import Head from "./head";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";

function Header() {
    let [respons, setrespons] = useState(false)

    let clicknav = () => {
        if (window.innerWidth < 900) {
            setrespons(false)
        }
    }







    return (
        <>
            <Head />
            <header>

                <nav>
                    <div className={respons ? 'bare' : 'linkes'}>
                        <ul>
                            <li onClick={clicknav}><Link to={'/'}>Home</Link></li>
                            <li onClick={clicknav}><Link to={'about'}>About</Link></li>
                            <li onClick={clicknav}><Link to={'courses'}>Courses</Link></li>
                            <li onClick={clicknav}><Link to={'team'}>Team</Link></li>
                            <li onClick={clicknav}><Link to={'pricing'}>Pricing</Link></li>
                            <li onClick={clicknav}><Link to={'journal'}>Journal</Link></li>
                            <li onClick={clicknav}><Link to={'contact'}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="start">
                        <div className="bub">GET LABLABLA</div>
                    </div>
                    <div className="fabars" onClick={() => setrespons(!respons)}>
                        <i><FaBars /></i>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default Header