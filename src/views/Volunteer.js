import React from "react";
import LayoutDefault from '../layouts/LayoutDefault'
import Hero from "../components/sections/volunteer/Hero";
import WorkingHere from "../components/sections/volunteer/WorkingHere";
import Requirements from "../components/sections/volunteer/Requirements";

export default function VolunteerForm () {
    return (
        <LayoutDefault>
          <Hero/>
          <WorkingHere/>
          <Requirements/>
      </LayoutDefault>
    )
}