import React from "react";
import LayoutDefault from '../layouts/LayoutDefault'
import Hero from "../components/sections/homerobot/Hero";
import Beneficts from "../components/sections/homerobot/Beneficts";

export default function HomeRobotics () {
    return (
        <LayoutDefault>
          <Hero/>
          <Beneficts/>
      </LayoutDefault>
    )
}