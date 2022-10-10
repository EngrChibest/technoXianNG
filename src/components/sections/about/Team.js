import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Image from "../../elements/Image";

export default function Team(){
    return (
        <div className="container-sm">
            <h1 style={{textTransform: 'capitalize', marginTop: '16%', textAlign: 'center'}}>Meet The Core Team</h1>
            <Grid container spacing={5} sx={{mb:'10%', mt: '5%'}}>
                <Grid item xs={12} sm={6} md={6}>
                    <Box>
                        <Image
                            src={require('./../../../assets/images/Ameh-Augustine.png')}
                            alt="Hero" 
                            className='profile-image'
                        />
                        <Typography variant="h6" component="div" utterBottom sx={{ lineHeight: '21px', textAlign: 'center', my: '3%'}}>Jonathan Rust</Typography>
                        <Typography variant="body1" component="div" utterBottom sx={{lineHeight: '21px', textAlign: 'center'}}>CEO & Founder</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Box>
                        <Image
                            src={require('./../../../assets/images/Ameh-Augustine.png')}
                            alt="Hero" 
                            className='profile-image'
                        />
                        <Typography variant="h6" component="div" utterBottom sx={{ lineHeight: '21px', textAlign: 'center', my: '3%'}}>Jonathan Rust</Typography>
                        <Typography variant="body3" component="div" utterBottom sx={{lineHeight: '21px', textAlign: 'center'}}>CEO & Founder</Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}