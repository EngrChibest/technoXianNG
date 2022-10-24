import { Grid } from "@mui/material";
import React from "react";
import Image from "../components/elements/Image";
import RoboForm from "../components/sections/roboform/RoboForm";
import LayoutDefault from '../layouts/LayoutDefault'

export default function RoboClubForm () {
    return (
      <LayoutDefault>
      <div className="container-sm" >
          <Grid container sx={{mt: '15%', mx: 'auto'}} >
            <Grid item xs={12} sm={5} md={5}>
              <Image
                src={require('../../src/assets/images/section/form/corporate.png')}
                alt="Hero" 
                style={{height: '90vh', objectFit: 'cover'}}
              />
            </Grid>
            <Grid item xs={12} sm={7} md={7} className='form-margin'>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScfqK9J3ExtPWDjRXugdsqjP4iMQ1g5-IxRy4axYSuNoUYFXQ/viewform?embedded=true" className='form-dimension' frameborder="0">Loading…</iframe>
            </Grid>
          </Grid>
      </div>
      </LayoutDefault>
    )
}