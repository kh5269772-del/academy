import React from "react";
import { useLocation } from "react-router-dom";
function Journaltop(){
    let location = useLocation()
    return(
        <section className="journaltop">
            <div className="journaltoptext">
                <h3>home / {location.pathname.split('/')[1]}</h3>
                <h2>plog posts</h2>
            </div>

        </section>
    )
}
export default Journaltop