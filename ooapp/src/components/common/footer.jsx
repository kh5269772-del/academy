
import React from 'react';
import { FaPaperPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaUserAstronaut } from "react-icons/fa6";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { IoMapSharp } from "react-icons/io5";
import { MdPhoneEnabled } from "react-icons/md";
import './footer.css'
function Footer() {
  let data = [
    { img: 'image/ppp.jpg', text: 'impedit illo, corporis consequatur velit explicabo!' },
    { img: 'image/ppp.jpg', text: 'impedit illo, corporis consequatur velit explicabo!' },
    { img: 'image/ppp.jpg', text: 'impedit illo, corporis consequatur velit explicabo!' },
  ]
  return (
    <section className='footer'>
      <div className="ghgh">
        <div className="footertop">
          <div className="footertopleft">
            <h3>reiciendis dolor magni architecto impedit pariatur voluptatem.</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="footertopright">
            <form action="">
              <input type="text" placeholder='enter your ' />
              <i><FaPaperPlane /></i>
              <input className='gg' type="submit" value={'send'} />
            </form>
          </div>
        </div>
      </div>

      <div className="footerend">
        <div className="fotendgrop">
          <div className="footerwon">
            <h3>coursesser</h3>
            <p>online education & learing</p>
            <p id='p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam sequi id commodi iusto ipsum culpa.</p>
            <i><FaFacebook /></i>
            <i><FaInstagram /></i>
            <i><FaTwitter /></i>
          </div>
          <div className="footerto">
            <h4>links</h4>
            <ul>
              <li><a href={'/'}>Home</a></li>
              <li><a href={'about'}>About</a></li>
              <li><a href={'courses'}>Courses</a></li>
              <li><a href={'team'}>Team</a></li>
              <li><a href={'pricing'}>Pricing</a></li>
              <li><a href={'journal'}>Journal</a></li>
              <li><a href={'contact'}>Contact</a></li>
            </ul>
          </div>
          <div className="footerthre">
            <h4>recent post</h4>
            <div className="imgtotext">
              {data.map((item, index) => (
                <div className="itemto" key={index}>
                  <img src={item.img} alt="item" />
                  <div className="string">
                    {[
                      { icon: <FaUserAstronaut />, hh: 'admen', icon2: <HiOutlineCalendarDateRange />, tt: 'Oct.15,2024' }
                    ].map((icon, x) => (
                      <div className="icons" key={x}>
                        <h5>{icon.icon},{icon.hh}  {icon.icon2},{icon.tt}</h5>
                        <p> sit amet consectetur adipisicing elit.</p>

                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          </div>
          <div className="footerfor">
            <h4>hav aquestions?</h4>
            <div className="rr">
              <i><IoMapSharp /></i>
              <p>Lokastígur 28, 101 Reykjavík, Iceland</p>
            </div>
            <div className="rr">
              <i><MdPhoneEnabled /></i>
              <p>+0101234567892</p>
            </div>
            <div className="rr">
              <i><FaPaperPlane /></i>
              <p>khaled@gmail.com</p>
            </div>

          </div>
        </div>
      </div>
      <div className="footerfot">
          <small>&copy;<a href="http://wa.me/2012783041">  Khaled Hegazi</a> all righgts reserved</small>
      </div>

    </section>
  // f
  )
}
export default Footer