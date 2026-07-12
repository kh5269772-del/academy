import React from "react";
import { TbWorldCode } from "react-icons/tb";
import { RiStarSFill } from "react-icons/ri";
// import Coursesapend from "../pages/coursesapend";
function Ahome() {
    let data = [
        {
            icon: <TbWorldCode />, title: 'welcom hsdfd ihkbfk', img: 'image/ppp.jpg',
            name: 'Mr Muhammad', time: '100:lectures (150:hrs)', prise: '$100 all courses'
        },
        {
            icon: <TbWorldCode />, title: 'welcom hsdfd ihkbfk', img: 'image/ppp.jpg',
            name: 'Mr Muhammad', time: '100:lectures (150:hrs)', prise: '$100 all courses'
        },
        {
            icon: <TbWorldCode />, title: 'welcom hsdfd ihkbfk', img: 'image/ppp.jpg',
            name: 'Mr Muhammad', time: '100:lectures (150:hrs)', prise: '$100 all courses'
        },
    ]
    return (
        <section className="ahome">
            <div className="ahometext">
                <h3>our courses</h3>
                <h2>explore our popular online courses</h2>
            </div>
            {/* <Coursesapend /> */}
            <div className="ahomecards">
                {data.map((item, index) => (
                    <div className="ahcard" key={index}>
                        <div className="teaic">
                            <i>{item.icon}</i>
                            <h3>{item.title}</h3>
                        </div>
                        <div className="stars">
                            {[1, 2, 3, 4, 5].map((stat, i) => (
                                <i key={i}><RiStarSFill /></i>
                            ))}
                            (5.0)
                        </div>
                        <div className="teacher">
                            <div className="image">
                                <img src={item.img} alt="" />
                            </div>
                            <p>{item.name}</p>
                        </div>
                        <div className="time"> <p>{item.time}</p></div>
                        <div className="prise"><h3>{item.prise}</h3></div>
                        <div className="cardbuttom">
                            <button>enroll now !</button>
                        </div>
                    </div>
                ))}



            </div>

        </section>
    )
}
export default Ahome