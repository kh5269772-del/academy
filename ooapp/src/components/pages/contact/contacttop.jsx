import React from "react";
import { useLocation } from "react-router-dom";
function Contacttop(){
    let location = useLocation()
    return(
        <section className="contacttop">
            <div className="contacttoptext">
                <h3>home / {location.pathname.split('/')[1]} </h3>
                <h2>contact us</h2>
            </div>

        </section>
    )
}
export default Contacttop