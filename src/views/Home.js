import React from 'react';
import { Divider } from '@mui/material';
// import sections
import Hero from '../components/sections/home/Hero';
import Beneficts from '../components/sections/home/Beneficts'
import Services from '../components/sections/home/Services'
import Partners from '../components/sections/home/Partners';
import Table from '../components/sections/home/Table';
import Newsletter from '../components/sections/home/Newsletter';
import NewsUpdate from '../components/sections/home/NewsUpdate';
import CTA from '../components/sections/home/CTA';

import LayoutDefault from '../layouts/LayoutDefault'

const Home = () => {

  return (
    <LayoutDefault>
      <Hero className="illustration-section-01" />
      <Beneficts/>
      <Services/>
      <Partners/>
      <Table/>
      <Newsletter/>
      <NewsUpdate/>
      <CTA/>
    </LayoutDefault>
  );
}

export default Home;