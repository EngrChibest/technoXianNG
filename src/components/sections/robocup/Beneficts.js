import { Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Groups2Icon from '@mui/icons-material/Groups2';
import BenefictsData from "./BenefictsData";


export default function Beneficts (){
    return (
        <div className="container-sm">
            <Grid container spacing={5} sx={{my:'4%'}}>
               { BenefictsData.map(items => (
                    <Grid item xs={12} sm={4} md={4}>
                        <Card className="benefict-card" style={{height: '167px'}}>
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