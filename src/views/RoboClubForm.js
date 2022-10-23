import { Grid } from "@mui/material";
import React from "react";
import Image from "../components/elements/Image";
import RoboForm from "../components/sections/roboform/RoboForm";
import Logo from '../assets/images/nav-logo.png';
import LayoutDefault from '../layouts/LayoutDefault'
import { Link } from "react-router-dom";

export default function RoboClubForm () {
    return (
      <LayoutDefault>
      <div className="container-sm" >
          <Grid container sx={{mt: '15%', mx: 'auto'}}>
            <Grid item xs={12} sm={5} md={5}>
              <Image
                src={require('../../src/assets/images/section/form/roboclub.jpg')}
                alt="Hero" 
                style={{height: '100vh', objectFit: 'cover'}}
              />
            </Grid>
            <Grid item xs={12} sm={7} md={7}>
                {/* <Link to="/"><img src={ Logo } alt="" width='200' className="float-righ"/></Link> */}
              <RoboForm/>
            </Grid>
          </Grid>
      </div>
      </LayoutDefault>
    )
}