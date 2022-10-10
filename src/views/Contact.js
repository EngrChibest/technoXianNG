import React from "react";
import LayoutDefault from '../layouts/LayoutDefault'
import Hero from '../components/sections/contact/Hero'
import ContactDetail from '../components/sections/contact/ContactDetail'

export default function Contact () {
    return (
        <LayoutDefault>
          <Hero/>
          <ContactDetail/>
      </LayoutDefault>
    )
}