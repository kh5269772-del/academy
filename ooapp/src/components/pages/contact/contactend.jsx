import React from "react";

function Contactend() {
    let maps = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496115.2021508743!2d-15.921648137714094!3d64.66811223956837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d22b52a3eb6043%3A0x6f8a0434e5c1459a!2z2KPZitiz2YTZhtiv2Kc!5e0!3m2!1sar!2seg!4v1766604377639!5m2!1sar!2seg" 
    return (
        <section className="contactend">
          <div className="iframe">
              <iframe src={maps}  title="Google Map" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
           <div className="contactendright">
            <div className="contactendtext">
               <div className="hh">
                 <h2>contact us</h2>
                <p> dolore libero? Excepturi eaque impedit enim sed tenetur.</p>
               </div>
               <div className="phoneaemail">

                 <div className="address">
                    <h3>address:</h3>
                    <p>Lokastígur 28, 101 Reykjavík, Iceland</p>
                </div>

                <div className="email">
                    <h3>email:</h3>
                    <p>khaled@gmail.com</p>
                </div>
                <div className="phone">
                    <h3>phone:</h3>
                    <p>+010123456789</p>
                </div>
               
               </div>
               <form action="">
              <div className="toimpot">
                  <input type="text" placeholder="name"  />
                    <input type="email" placeholder="email" />
              </div>
              <input type="number" placeholder="phone" />
              <textarea name="" id="" rows={8} cols={10}
              placeholder="create a message here..."></textarea>
          <div className="hr">
                <input id="submit" type="submit" value={'send message'} />
              <h3>follw us gere</h3>
          </div>
               </form>
         

            </div>

           </div>
        </section>

    )
}


export default Contactend