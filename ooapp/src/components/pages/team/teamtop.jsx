import React from "react";
import { useLocation } from "react-router-dom";

function Teamtop(){
    let location = useLocation()
    return(
        <section className="teamtop">
            <div className="tremtoptext">
                <h3>home /{location.pathname.split('/')[1]}</h3>
                <h2>team</h2>
            </div>

        </section>
    )
}
export default Teamtop