import React, { useState } from "react";
import { CgChevronDown } from "react-icons/cg";
import { CgChevronRight } from "react-icons/cg";

function Pricingend() {
    let data = [
        { faq: 'hom to enroll this online courses ?',text:'aa Lorem ipsum dolor sit amet adipisicing elit. Quo repudiandae asperiores voluptatum provident quisquam similique ad, commodi dolorum dicta obcaecati modi. Obcaecati modi nulla magni quod, praesentium saepe nihil labore pariatur eligendi veritatis. Est delectus vitae dolores qui placeat' },

        { faq: 'where ti is hidden default the courses ?',text:'bb Lorem ipsum dolor sit amet adipisicing elit. Quo repudiandae asperiores voluptatum provident quisquam similique ad, commodi dolorum dicta obcaecati modi. Obcaecati modi nulla magni quod, praesentium saepe nihil labore pariatur eligendi veritatis. Est delectus vitae dolores qui placeat' },

        { faq: 'hom ti is hidden default the courses ?',text:'cc Lorem ipsum dolor sit amet adipisicing elit. Quo repudiandae asperiores voluptatum provident quisquam similique ad, commodi dolorum dicta obcaecati modi. Obcaecati modi nulla magni quod, praesentium saepe nihil labore pariatur eligendi veritatis. Est delectus vitae dolores qui placeat' },

        { faq: 'where to enroll this online courses ?',text:'dd Lorem ipsum dolor sit amet adipisicing elit. Quo repudiandae asperiores voluptatum provident quisquam similique ad, commodi dolorum dicta obcaecati modi. Obcaecati modi nulla magni quod, praesentium saepe nihil labore pariatur eligendi veritatis. Est delectus vitae dolores qui placeat' },

        { faq: 'hom to enroll this online courses ?',text:'ee Lorem ipsum dolor sit amet adipisicing elit. Quo repudiandae asperiores voluptatum provident quisquam similique ad, commodi dolorum dicta obcaecati modi. Obcaecati modi nulla magni quod, praesentium saepe nihil labore pariatur eligendi veritatis. Est delectus vitae dolores qui placeat' },

        { faq: 'where ti is hidden default the courses ?',text:'ff Lorem ipsum dolor sit amet adipisicing elit. Quo repudiandae asperiores voluptatum provident quisquam similique ad, commodi dolorum dicta obcaecati modi. Obcaecati modi nulla magni quod, praesentium saepe nihil labore pariatur eligendi veritatis. Est delectus vitae dolores qui placeat' },


    ]
    let [activeid, setactiveid] = useState(null)
    let faqtoggle = (index) => {
        setactiveid(activeid === index ? null : index)
    }
    return (
        <section className="pricingend">
            <div className="pricingendstart">
                <h3>FAQ</h3>
                <h2>"Frequently Asked Questions"</h2>
            </div>
            <div className="hawea">
                {data.map((item, index) => (
                    <div className="faqandanswer" key={index}>
                        <div className="faqtop" onClick={() => faqtoggle(index)} >
                            <h3>{item.faq}</h3>
                            <i>{activeid === index ? <CgChevronDown /> : <CgChevronRight />}</i>
                        </div>
                        {activeid === index && (
                            <div className='answer' >
                                <p>{item.text}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </section>
    )
}
export default Pricingend