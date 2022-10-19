import React from "react";
import LayoutDefault from '../layouts/LayoutDefault'
import Hero from "../components/sections/roboclub/Hero";
import Beneficts from "../components/sections/roboclub/Beneficts";
import Services from "../components/sections/roboclub/Services";
import Payment from "../components/sections/roboclub/Payment";

export default function RoboClub () {
    return (
        <LayoutDefault>
          <Hero/>
          <Services/>
          <Beneficts/>
          <Payment/>
      </LayoutDefault>
    )
}