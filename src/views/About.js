import React from "react";
import LayoutDefault from '../layouts/LayoutDefault'
import Hero from "../components/sections/about/Hero";
import Summary from "../components/sections/about/Summary";
import Services from "../components/sections/about/Services";
import Team from "../components/sections/about/Team";
import Gallery from "../components/sections/about/Gallery";

export default function About () {
    return (
        <LayoutDefault>
          <Hero/>
          <Summary/>
          <Services/>
          <Gallery/>
          {/* <Team/> */}
      </LayoutDefault>
    )
}