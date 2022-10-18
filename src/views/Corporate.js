import React from "react";
import LayoutDefault from '../layouts/LayoutDefault'
import Hero from "../components/sections/corporate/Hero";
import Beneficts from "../components/sections/corporate/Beneficts";
import Services from "../components/sections/corporate/Services";
import Payments from "../components/sections/corporate/Payment";

export default function Corporate () {
    return (
        <LayoutDefault>
          <Hero/>
          <Services/>
          <Beneficts/>
          <Payments/>
      </LayoutDefault>
    )
}