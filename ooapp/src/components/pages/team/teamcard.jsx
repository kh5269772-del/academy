import React from "react";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";

function Teamcard(props) {
    return (
        <section className="teamcard">
            <div className="teamimg">
                <img src={props.img} alt="" />
            </div>
            <div className="teamrowtext">
                <h4>{props.name}</h4>
                <p>frontend develober and lead instructor</p>
            </div>
            <div className="teamicons">
                <i> <a href="https://facebook.com" target="blank"><RiFacebookFill /></a></i>
                <i> <a href="https://instagram.com" target="blank"><FaInstagram /></a></i>
                <i> <a href="https://twitter.com" target="blank"><FaTwitter /></a></i>
                <i> <a href="https://tiktok.com" target="blank"><FaTiktok /></a></i>

            </div>

        </section>
    )
}
export default Teamcard