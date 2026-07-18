import React from "react";
import { GrCertificate } from "react-icons/gr";
import { GrBook } from "react-icons/gr";
import { FaUserGraduate } from "react-icons/fa6";

function Abcard() {
    let data = [
        { title: 'online couses', icon: <GrBook /> },
        { title: 'eam a certifictes', icon: <GrCertificate /> },
        { title: 'learn with expert', icon: <FaUserGraduate /> }
    ]
    return (
        <section className="abcard">
         <div className="ffg">
               <div className="imgabout">
                <img src="image/about.jpg" alt="" />
            </div>
            <div className="textabout">
               <div className="tbtop">
                 <h5>the academe</h5>
                <h2>Lorem ipsum, dolor sit amet consectetur.</h2>
               </div>
               <div className="textaboutcard">
                {data.map((item,index)=>(
                    <div className="tbc" key={index}>
                        <div className="iconca">
                            <i>{item.icon}</i>
                        </div>
                        <div className="cartext">
                            <h3>{item.title}</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint vel beatae ut nulla illum  sed enim nam vitae illo eveniet odit nemo, quisquam magni.</p>
                        </div>
                    </div>
                ))}
               </div>
            </div>

         </div>
        </section>
    )
}
export default Abcard