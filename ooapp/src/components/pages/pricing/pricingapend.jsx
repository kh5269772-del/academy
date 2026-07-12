import React from "react";

function Pricingapend() {
    let data = [
        { title: "basic plan", price: 49 },
        { title: "basic plan", price: 49 },
        { title: "basic plan", price: 49 },
        { title: "basic plan", price: 49 }

    ]
    return (
        <section className="pricingapend">
            <div className="pricingapendcar">
                {data.map((item,index)=>(
                    <div className="apendcard" key={index}>
                      <p>{item.title}</p>
                      <span><small>$</small> <h3>{item.price}K</h3></span>
                      <div className="plorem">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium explicabo ipsam eum dolores velit sapiente!</p>
                      </div>
                      <button>get started</button>


                    </div>
                ))}
            </div>

        </section>
    )
}
export default Pricingapend