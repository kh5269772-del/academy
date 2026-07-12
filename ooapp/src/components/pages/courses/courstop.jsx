import React from "react";
import { useLocation } from "react-router-dom";
function Courstop(){
    let location = useLocation()
    return(
        <section className="courstop">
            <div className="courstoptext">
                <h3>home / {location.pathname.split('/')[1]}</h3>
                <h2>explore courses</h2>

            </div>
        
        </section>
    )
}
export default Courstop