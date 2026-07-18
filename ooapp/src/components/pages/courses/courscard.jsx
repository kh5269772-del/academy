import React from "react";
function Courscard(props){
    return(
        <section className="courscard">
            <i>{props.icon}</i>
            <h4>{props.name}</h4>
            <p>25 courses</p>
        </section>
    )
}
export default Courscard