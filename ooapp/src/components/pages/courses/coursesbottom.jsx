import React from "react";
import Courscard from "./courscard";
import { LuImagePlus } from "react-icons/lu";
import { FaCode } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";
import { FaCameraRetro } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";
import { FaBullhorn } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";
import { FaCalculator } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa";
function Coursesbottom() {
    return (
        <section className="coursesbottom">
            <div className="cartext">
                <h3>courses</h3>
                <h2>broeser our online courses</h2>
            </div>

            <div className="cardes">

                <Courscard name='UI / UX' icon={<LuImagePlus />} />
                <Courscard name='Frontend' icon={<FaCode />} />
                <Courscard name='Graphic Design' icon={<FaPenNib />} />
                <Courscard name='Photography ' icon={<FaCameraRetro />} />
                <Courscard name='Drawing' icon={<FaPencilAlt />} />
                <Courscard name='Music ' icon={<FaMusic />} />
                <Courscard name='Healthcare' icon={<FaHeartPulse />} />
                <Courscard name='Marketing' icon={<FaBullhorn />} />
                <Courscard name='Computer' icon={<FaMicrochip />} />
                <Courscard name='Accounting' icon={<FaCalculator />} />
                <Courscard name='Languages' icon={<FaLanguage />} />
                <Courscard name='Trading' icon={<FaChartLine />} />
            </div>
        </section>
    )
}
export default Coursesbottom