import React from "react";
import { Button, Card, Container, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import { Box } from "@mui/system";
import CheckBoxIcon from '@mui/icons-material/CheckBox';


const LearnLink = styled(Button)({
    textTransform: 'capitalize',
    fontSize: '16px',
    width: '90%',
    margin : 'auto'
})

export default function Payment (){
    return (
        <div className="container-sm">
            <h3 style={{textTransform: 'capitalize', marginTop: '16%'}}>we’ve got a plan that <br/> is perfect for you.</h3>
            <Grid container spacing={5} sx={{mb:'10%', mt: '3%'}}>
                <Grid item xs={12} sm={4} md={4}>
                    <Box className='pay-outline'>
                        <Typography gutterBottom variant="body1" component="div" sx={{fontWeight: '700'}}>OPTION 1</Typography>
                        <Typography gutterBottom variant="body1" component="div">
                            <span className="price-sign">₦</span> 
                            <span className="price">7,740,000</span> 
                            <span className='price-month' >/One-Time</span>
                        </Typography>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>AMC & service charges</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>Tution cost per student</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>AICRA certification & exam fee per student</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>TTT for 10 days </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>Student Registration</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{marginTop: '2.5%'}}>
                            <Grid item xs={12} sm={12} md={12}>
                                <LearnLink variant="contained">Get Started</LearnLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                <Box className='pay-outline'>
                        <Typography gutterBottom variant="body1" component="div" sx={{fontWeight: '700'}}>OPTION 2</Typography>
                        <Typography gutterBottom variant="body1" component="div">
                            <span className="price-sign">₦</span> 
                            <span className="price">6,740,000</span> 
                            <span className='price-month' >/One-Time</span>
                        </Typography>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>AMC & service charges</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>Tution cost per student</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>AICRA certification & exam fee per student </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>TTT for 10 days </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{mb: '2.5%'}}>
                            <Grid item xs={2} sm={2} md={2}>
                                <CheckBoxIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <Typography variant="p" sx={{fontSize: '18px', lineHeight: '21px'}}>Student Registration</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{marginTop: '2.5%'}}>
                            <Grid item xs={12} sm={12} md={12}>
                                <LearnLink variant="contained">Get Started</LearnLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}