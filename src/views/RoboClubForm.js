import { Grid } from "@mui/material";
import React from "react";
import Image from "../components/elements/Image";
import RoboForm from "../components/sections/roboform/RoboForm";
import Logo from '../assets/images/nav-logo.png';
import LayoutDefault from '../layouts/LayoutDefault'
import { Link } from "react-router-dom";

export default function RoboClubForm () {
    return (
      <div>
          {/* <Grid container>
            <Grid item xs={12} sm={4} md={4}>
              <Image
                src={require('../../src/assets/images/features-split-image-03.png')}
                alt="Hero" 
                style={{height: '100vh'}}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
                <Link to="/"><img src={ Logo } alt="" width='200' className="float-righ"/></Link>
              <RoboForm/>
            </Grid>
          </Grid> */}
      </div>
    )
}