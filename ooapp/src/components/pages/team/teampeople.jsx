import React from "react";
import Teamcard from "./teamcard";


function Teampeople() {
    return (
        <section className="teampeople">
            <div className="teamcardflex">
                <Teamcard img='image/team1.jpg' name='ph.d mare'/>
                <Teamcard img='image/team2.jpg' name='ph.d mark' />
                <Teamcard img='image/team3.jpg' name='ph.d mark' />
                <Teamcard img='image/team4.jpg' name='ph.d mare'/>
                <Teamcard img='image/team2.jpg' name='ph.d mark' />
                <Teamcard img='image/team1.jpg' name='ph.d mare'/>
                   {/* <Teamcard img='image/team3.jpg' name='ph.d mark' />
                <Teamcard img='image/team4.jpg' name='ph.d mare'/> */}
            </div>

        </section>
    )
}
export default Teampeople