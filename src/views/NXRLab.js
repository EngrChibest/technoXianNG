import React from "react";
import LayoutDefault from '../layouts/LayoutDefault'
import Hero from "../components/sections/nxrlap/Hero";
import Beneficts from "../components/sections/nxrlap/Beneficts";
import Services from "../components/sections/nxrlap/Services";
import Table from "../components/sections/nxrlap/Table";
import Payment from "../components/sections/nxrlap/Payment";

export default function NXRLab () {
    return (
        <LayoutDefault>
          <Hero/>
          <Services/>
          <Beneficts/>
          <Table/>
          <Payment/>
      </LayoutDefault>
    )
}