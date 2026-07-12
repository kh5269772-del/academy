import React from "react";
import Journalapen from "../pages/journal/journalapen";

function Plhome(){
    return(
        <section className="plhome">
        <div className="plhometext">
            <h3>our plog</h3>
            <h2>recent from plog</h2>
        </div>
        <Journalapen />

    </section>
    )
}
export default Plhome