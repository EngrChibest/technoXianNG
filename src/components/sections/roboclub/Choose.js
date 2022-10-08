import { Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Groups2Icon from '@mui/icons-material/Groups2';


export default function Beneficts (){
    return (
        <div className="container-sm">
            <h3 style={{textTransform: 'capitalize', marginTop: '16%'}}>Why Choose Us</h3>
            <Grid container spacing={5} sx={{my:'4%'}}>
                <Grid item xs={12} sm={3} md={3}>
                    <Card className="benefict-card-two">
                        <Groups2Icon fontSize="large" sx={{ color: '#00A859'}}/>
                        <Typography variant="subtitle2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet risus
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                    <Card className="benefict-card-two">
                        <Groups2Icon fontSize="large" sx={{ color: '#00A859'}}/>
                        <Typography variant="subtitle2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet risus
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                    <Card className="benefict-card-two">
                        <Groups2Icon fontSize="large" sx={{ color: '#00A859'}}/>
                        <Typography variant="subtitle2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet risus
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                    <Card className="benefict-card-two">
                        <Groups2Icon fontSize="large" sx={{ color: '#00A859'}}/>
                        <Typography variant="subtitle2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet risus
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                    <Card className="benefict-card-two">
                        <Groups2Icon fontSize="large" sx={{ color: '#00A859'}}/>
                        <Typography variant="subtitle2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet risus
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                    <Card className="benefict-card-two">
                        <Groups2Icon fontSize="large" sx={{ color: '#00A859'}}/>
                        <Typography variant="subtitle2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet risus
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                    <Card className="benefict-card-two">
                        <Groups2Icon fontSize="large" sx={{ color: '#00A859'}}/>
                        <Typography variant="subtitle2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet risus
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}