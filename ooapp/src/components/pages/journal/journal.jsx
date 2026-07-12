import React from "react";
import Journaltop from "./journaltop";
import Journalapen from "./journalapen";
import Jourheight from "./jourheight";

function Journal(){
    return(
        <section className="journal">
            <Journaltop />
            <Jourheight/>
            <Journalapen />

        </section>
    )
}
export default Journal