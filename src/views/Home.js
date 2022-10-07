import React from 'react';
import { Divider } from '@mui/material';
// import sections
import Hero from '../components/sections/home/Hero';
import Beneficts from '../components/sections/home/Beneficts'
import Services from '../components/sections/home/Services'
import Partners from '../components/sections/home/Partners';
import Table from '../components/sections/home/Table';
import Newsletter from '../components/sections/home/Newsletter';

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
    </LayoutDefault>
  );
}

export default Home;