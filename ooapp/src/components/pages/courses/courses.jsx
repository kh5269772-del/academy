import React from "react";
import Courstop from "./courstop";
import Coursesapend from "./coursesapend";
import Coursesbottom from "./coursesbottom";
function Courses(){
    return(
        <div className="courses">
        <Courstop />
        <Coursesapend />
        <Coursesbottom />
        </div>
    )
}
export default Courses