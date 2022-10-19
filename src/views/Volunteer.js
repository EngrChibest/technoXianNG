import React from "react";
import LayoutDefault from '../layouts/LayoutDefault'
import Hero from "../components/sections/volunteer/Hero";
import Requirements from "../components/sections/volunteer/Requirements";
import Beneficts from "../components/sections/volunteer/Beneficts";

export default function VolunteerForm () {
    return (
        <LayoutDefault>
          <Hero/>
          <Beneficts/>
          <Requirements/>
      </LayoutDefault>
    )
}