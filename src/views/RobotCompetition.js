import React from "react";
import LayoutDefault from '../layouts/LayoutDefault'
import Hero from '../components/sections/robocup/Hero';
import Services from '../components/sections/robocup/Services';

export default function RobotCompetition () {
    return (
        <LayoutDefault>
          <Hero/>
          <Services/>
      </LayoutDefault>
    )
}