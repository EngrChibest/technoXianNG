import React from "react";
import LayoutDefault from '../layouts/LayoutDefault'
import Hero from "../components/sections/business/Hero";
import Beneficts from "../components/sections/business/Beneficts";
import Services from "../components/sections/business/Services";
import Choose from "../components/sections/business/Choose";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Enterpreneurship () {
  React.useEffect(() => {
    setTimeout(function() {
    AOS.init({ easing: 'ease-out-back', duration: 3000, startEvent: 'DOMContentLoaded', once: false});
  }, []); })

    return (
        <LayoutDefault>
          <Hero/>
          <Beneficts/>
          <Services/>
          <Choose/>
      </LayoutDefault>
    )
}