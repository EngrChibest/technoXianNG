import { Button, Container, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Image from "../../elements/Image";

const HeroButton = styled(Button)({
  textTransform: 'capitalize',
  width: '100%',
  fontSize: '16px',
  textAlign: 'center'
})

export default function Partners (){
    return (
        <Container maxWidth='false' sx={{backgroundColor: '#F4F4F4'}}>
            <div className="container-sm">
                <Grid container spacing={6} sx={{pb: '5%', px: 'auto',display: 'flex', justifyContent: 'center'}}>
                    <Grid item xs={12} sm={6} md={6} style={{display: "flex", flexDirection: "column", justifyContent: "center", position: 'relative'}} className="btns">
              <p className="m-0 reveal-from-bottom primary-color" data-reveal-delay="400"><b>TECHNOXIAN</b></p>
              <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Lets Build Robots Together
              </h1>
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam id at elementum, condimentum sed leo mattis sed. Lacus vel sed nec morbi gravida nunc. Nunc mauris non, sed morbi sed ipsum 
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={4}>
                    <HeroButton
                      variant="contained"
                    >
                      Get Started
                    </HeroButton>
                  </Grid>
                  </Grid>
                  </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Image
                            src={require('./../../../assets/images/features-split-image-03.png')}
                            alt="Hero" 
                        />
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}