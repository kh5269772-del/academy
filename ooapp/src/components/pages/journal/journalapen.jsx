import React from "react";
import { FaUserAstronaut } from "react-icons/fa6";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { FaComments } from "react-icons/fa";
function Journalapen() {
    let data = [
        { img: 'image/plog.jpg', title: 'ipsum, dolor sit amet consectetur adipisicing elit.' },
        { img: 'image/plog.jpg', title: 'ipsum, dolor sit amet consectetur adipisicing elit.' },
        { img: 'image/plog.jpg', title: 'ipsum, dolor sit amet consectetur adipisicing elit.' },
        { img: 'image/plog.jpg', title: 'ipsum, dolor sit amet consectetur adipisicing elit.' },
        { img: 'image/plog.jpg', title: 'ipsum, dolor sit amet consectetur adipisicing elit.' },
        { img: 'image/plog.jpg', title: 'ipsum, dolor sit amet consectetur adipisicing elit.' }

    ]
    return (
        <section className="journalapend">
            <div className="apendplog">
                {data.map((item, index) => (
                    <div className="plogcard" key={index}>
                        <div className="image">
                            <img src={item.img} alt="item" />
                        </div>
                        <div className="plogicons">
                            {[
                                { icon: <FaUserAstronaut />, text: 'admin' },
                                { icon: <HiOutlineCalendarDateRange />, text: 'Oct.15,2024' },
                                { icon: <FaComments />, text: ' 3 comments' },
                            ].map((icons, x) => (
                                <div className="iconatext" key={x}>
                                    <i>{icons.icon}</i>
                                    <p>{icons.text}</p>
                                </div>
                            ))}
                        </div>
                        <div className="plogtitle">
                            <h3>{item.title}</h3>
                        </div>
                        <div className="ploglorem">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla magnam porro, impedit voluptate esse illum quo tenetur accusantium asperiores recusandae?</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}
export default Journalapen