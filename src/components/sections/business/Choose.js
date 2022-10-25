import { Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ChooseData from "./ChooseData";


export default function Beneficts (){
    return (
        <div className="container-sm" data-aos="fade-up">
            <h3 style={{textTransform: 'capitalize', marginTop: '16%'}}>Why Choose Us</h3>
            <Grid container spacing={5} sx={{my:'4%'}}>
                {ChooseData.map((items) => (
                <Grid item xs={12} sm={3} md={3} data-aos="fade-up">
                    <Card className="benefict-card-two">
                        {items.icon}
                        <Typography variant="subtitle2" color="text.secondary">
                            {items.body}
                        </Typography>
                    </Card>
                </Grid>
                ))}
            </Grid>
        </div>
    )
}