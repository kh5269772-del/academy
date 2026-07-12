import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Head() {
    return (
        <>
            <section className="head">
                <div className="container">
                    <div className="logo">
                        <h1>HELLO</h1>
                        <span>I,m Name Khaled</span>
                    </div>
                    <div className="social">
                        <i><FaFacebook /></i>
                        <i><FaInstagram /></i>
                        <i><FaTwitter /></i>
                        <i><FaYoutube /></i>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Head