import { Button, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Groups2Icon from '@mui/icons-material/Groups2';
import { Link } from "react-router-dom";
import Image from '../../elements/Image';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styled from "styled-components";


const LearnLink = styled(Button)({
    textTransform: 'capitalize',
    fontSize: '16px',
})

export default function Beneficts (){
    return (
        <div className="container-sm">
            <Grid container spacing={5} sx={{my:'10%'}}>
                <Grid item xs={12} sm={6} md={6}>
                <Image
                  src={require('./../../../assets/images/features-split-image-03.png')}
                  alt="Hero" 
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <p className="m-0 reveal-from-bottom primary-color" data-reveal-delay="400"><b>TECHNOXIAN</b></p>
                    <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                    Lets Build Robots Together
                    </h3>
                    <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam id at elementum, condimentum sed leo mattis sed. Lacus vel sed nec morbi gravida nunc. Nunc mauris non, sed morbi sed ipsum 
                    </p>
                    <div className="reveal-from-bottom" data-reveal-delay="600">
                        <Link to='/home-robotics'>
                            <LearnLink variant="text">
                                Learn More
                                <ChevronRightIcon fontSize="small"/>
                            </LearnLink>
                        </Link>
                    </div>
                </Grid>
            </Grid>

            <Grid container spacing={5} sx={{my:'13%'}}>
                <Grid item xs={12} sm={6} md={6}>
                    <p className="m-0 reveal-from-bottom primary-color" data-reveal-delay="400"><b>TECHNOXIAN</b></p>
                    <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                    Lets Build Robots Together
                    </h3>
                    <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam id at elementum, condimentum sed leo mattis sed. Lacus vel sed nec morbi gravida nunc. Nunc mauris non, sed morbi sed ipsum 
                    </p>
                    <div className="reveal-from-bottom" data-reveal-delay="600">
                        <Link to='/home-robotics'>
                            <LearnLink variant="text">
                                Learn More
                                <ChevronRightIcon fontSize="small"/>
                            </LearnLink>
                        </Link>
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
    )
}