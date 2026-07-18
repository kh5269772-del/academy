import React from "react";
import { FaUserGraduate } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { FaAtlas } from "react-icons/fa";
import { GiLaptop } from "react-icons/gi";
import CountUp from "react-countup";


function Aboutcup() {
    // let [scrolly,setscrolly]=useState(false)
    let data = [
        { icon: <FaUserGraduate />, number: 3000, text: 'scheulas storeis' },
        { icon: <FaUserTie />, number: 320, text: 'trusetd tutors' },
        { icon: <FaAtlas />, number: 1000, text: 'scheulas' },
        { icon: <GiLaptop />, number: 500, text: 'curses' },
    ]
    return (
        <section className="aboutcup">
            <div className="cupcover">
                {data.map((item, index) => (
                    <div className="countup" key={index}>
                        <i>{item.icon}</i>
                        <div className="nuate">
                            <h2><CountUp start={1} end={item.number} duration={5} enableScrollSpy={true} scrollSpyOnce={true} /></h2>
                            <p>{item.text}</p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}
export default Aboutcup