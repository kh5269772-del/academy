import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";
function Htast() {
    let data = [
        { img: 'image/test.jpg', name: 'james max', target: 'marketing manager', icon: <FaQuoteLeft /> },
        { img: 'image/test.jpg', name: 'james max', target: 'marketing manager', icon: <FaQuoteLeft /> },
        { img: 'image/test.jpg', name: 'james max', target: 'marketing manager', icon: <FaQuoteLeft /> }
    ]
    return (
        <section className="htast">
            <div className="htasttext">
                <h3>testimonal</h3>
                <h2>our sucessful students</h2>
            </div>
            <div className="htastgrop">
                {data.map((item, index) => (
                    <div className="htastgrwin" key={index}>
                        <div className="hgwintop">
                          <div className="img">
                              <img src={item.img} alt="item" />
                                 <div className="winposition">
                            <i>{item.icon}</i>
                        </div>
                          </div>
                            <div className="hgwintoptext">
                                <h3>{item.name}</h3>
                                <h4>{item.target}</h4>
                            </div>
                        </div>
                     
                        <div className="winbottom">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores ullam dicta minima provident quas voluptate?</p>
                        </div>

                    </div>
                ))}
            </div>

        </section>
    )
}
export default Htast