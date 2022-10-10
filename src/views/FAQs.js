import React from "react";
import LayoutDefault from '../layouts/LayoutDefault'
import Hero from "../components/sections/faqs/Hero";
import FAQ from "../components/sections/faqs/FAQquestions";

export default function FAQs () {
    return (
        <LayoutDefault>
          <Hero/>
          <FAQ/>
      </LayoutDefault>
    )
}