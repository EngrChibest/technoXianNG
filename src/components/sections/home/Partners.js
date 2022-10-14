import { Container, Grid } from "@mui/material";
import React from "react";
import Image from "../../elements/Image";

export default function Partners (){
    return (
        <Container maxWidth='false' sx={{backgroundColor: '#F4F4F4'}}>
            <div className="container-sm">
                <h3 className="partner-header">Our Partners</h3>
                <Grid container spacing={6} sx={{pb: '5%', px: 'auto',display: 'flex', justifyContent: 'center'}}>
                    <Grid item xs={12} sm={3} md={3}>
                        <Image
                            src={require('./../../../assets/images/clients/amon.png')}
                            alt="Hero" 
                            style={{margin: '0 auto'}}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <Image
                            src={require('./../../../assets/images/clients/Chams.png')}
                            alt="Hero" 
                            style={{margin: '0 auto'}}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <Image
                            src={require('./../../../assets/images/clients/Amorsil.png')}
                            alt="Hero" 
                            style={{margin: '0 auto'}}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <Image
                            src={require('./../../../assets/images/clients/ehealth.png')}
                            alt="Hero" 
                            style={{margin: '0 auto'}}
                        />
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}