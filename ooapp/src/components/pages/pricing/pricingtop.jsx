import React from "react";
import { useLocation } from "react-router-dom";

function Pricingtop(){
    let location = useLocation()
    return(
        <section className="pricingtop">
            <div className="pricingtexttop">
                <h3>home / {location.pathname.split('/'[1])}</h3>
                <h2>pricing pian</h2>
            </div>

        </section>
    )
}
export default Pricingtop