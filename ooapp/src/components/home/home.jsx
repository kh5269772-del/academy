import React from "react";
import Hero from "./hero";
import './home.css'
import Abcard from "../pages/about/abcard";
import Aboutcup from "../pages/about/aboutcup";
import Ahome from "./ahome";
import Coursesbottom from "../pages/courses/coursesbottom";
import Htast from "./htast";
import Plhome from "./plhome";
import Pricinghome from "./pricinghome";
function Home() {
    return (
        <div className="home">
            <Hero />
            <Abcard />
            <Aboutcup />
            <Ahome />
            <Coursesbottom />
            <Htast />
            <Plhome />
            <Pricinghome />

        </div>
    )
}
export default Home