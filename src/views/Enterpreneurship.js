import React from "react";
import LayoutDefault from '../layouts/LayoutDefault'
import Hero from "../components/sections/business/Hero";
import Beneficts from "../components/sections/business/Beneficts";
import Services from "../components/sections/business/Services";
import Choose from "../components/sections/business/Choose";

export default function Enterpreneurship () {
    return (
        <LayoutDefault>
          <Hero/>
          <Beneficts/>
          <Services/>
          <Choose/>
      </LayoutDefault>
    )
}