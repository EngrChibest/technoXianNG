import { Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Groups2Icon from '@mui/icons-material/Groups2';


export default function Beneficts (){
    return (
        <div className="container-sm" data-aos="fade-up">
            <Grid container spacing={5} sx={{my:'4%'}} data-aos="fade-up">
                <Grid item xs={12} sm={4} md={4}>
                    <Card className="benefict-card">
                        <Groups2Icon fontSize="large" sx={{ color: '#00A859'}}/>
                        <Typography variant="subtitle2" color="text.secondary">
                            Lizards are a widespread group of the squam reptiles, with over 6,000
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Card className="benefict-card">
                        <Groups2Icon fontSize="large" sx={{ color: '#00A859'}}/>
                        <Typography variant="subtitle2" color="text.secondary">
                            Lizards are a widespread group of the squam reptiles, with over 6,000
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Card className="benefict-card">
                        <Groups2Icon fontSize="large" sx={{ color: '#00A859'}}/>
                        <Typography variant="subtitle2" color="text.secondary">
                            Lizards are a widespread group of the squam reptiles, with over 6,000
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}