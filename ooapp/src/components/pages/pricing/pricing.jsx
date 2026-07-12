import React from "react";
import Pricingtop from "./pricingtop";
import Pricheight from "./pricheight";
import Pricingapend from "./pricingapend";
import Pricingend from "./pricingend";
function Pricing(){
    return(
        <section className="pricing">
            <Pricingtop />
            <Pricheight />
            <Pricingapend />
            <Pricingend />
        </section>
    )
}
export default Pricing