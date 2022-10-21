import { Button, Card, Container, Grid, Typography} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Image from '../../elements/Image';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled , useTheme} from '@mui/material/styles';
import docs from '../../../assets/docs/Robotics-Lab.pdf'
import RecommendIcon from '@mui/icons-material/Recommend';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';



export default function Services (){
    const theme = useTheme()

    const LearnLink = styled(Button)({
        textTransform: 'capitalize',
        fontSize: '16px',
        marginTop: '5%',
    })

    return (
        <div className="container-sm">
            <Grid container spacing={5} sx={{my:'20%'}}>
                <Grid item xs={12} sm={6} md={6} sx={{position: 'relative'}}>
                <Image
                    src={require('./../../../assets/images/section/nxrlab/option-1.png')}
                    alt="Hero" 
                    className='services-img'
                    id='height'
                  />
                  <div className="bodered" id='height'></div>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <p className="m-0 reveal-from-bottom primary-color" data-reveal-delay="400"><b>MEMBERSHIP</b></p>
                    <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                        Institute Membership (Option1)
                    </h3>
                    <p className="m-0 mb-12 reveal-from-bottom" data-reveal-delay="400">
                        Institute can add-on Robotics as subject for all its student’ studying Science,
                        Technology, Engineering and Mathematics (STEM) or as an extracurricular
                        activity. Low cost annual membership fee can be added in regular fee structure.
                        All member students would be availing following benefits throughout year:
                    </p>
                    <Grid container spacing={1}>
                        <Grid item xs={1.5} sm={1.5} md={1.5}>
                            <RecommendIcon sx={{mt: '10%', color: '#00A859'}}/>
                        </Grid>
                        <Grid item xs={10.5} sm={10.5} md={10.5}>
                            <p style={{margin: '0'}}>
                                Lab Setup: Advance feature Robotics Lab will be set up with all latest
                                equipment and components.
                            </p>
                        </Grid>
                        <Grid item xs={1.5} sm={1.5} md={1.5}>
                            <RecommendIcon sx={{mt: '10%', color: '#00A859'}}/>
                        </Grid>
                        <Grid item xs={10.5} sm={10.5} md={10.5}>
                            <p style={{margin: '0'}}>
                                Free Seminar: Twice in a year free seminar on updated technology in
                                robotics field online depending on students preference .
                            </p>
                        </Grid>
                    </Grid>
                    <div className="reveal-from-bottom" data-reveal-delay="600">
                        <a href={docs} target='_blank' rel="noopener noreferer">
                            <LearnLink variant="contained" endIcon={<CloudDownloadIcon sx={{fontSize: '16px'}}/>}>
                                Learn More   
                            </LearnLink>
                        </a>
                    </div>
                </Grid>
            </Grid>

            <Grid container spacing={5} sx={{my:'13%', mb: '10%'}} className="MuiGrid-direction-xs-row-reverse">
                <Grid item xs={12} sm={6} md={6}>
                    <p className="m-0 reveal-from-bottom primary-color" data-reveal-delay="400"><b>INCEPTION</b></p>
                    <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                        ZERO INCEPTION COST (Option 2)
                    </h3>
                    <p className="m-0 mb-12 reveal-from-bottom" data-reveal-delay="400">
                        Institute can add-on Robotics as subject for all its student’ studying Science,
                        Technology, Engineering and Mathematics (STEM). Low cost annual
                        membership fee can be added in regular fee structure.: 
                    </p>
                    <Grid container spacing={1}>
                        <Grid item xs={1.5} sm={1.5} md={1.5}>
                            <RecommendIcon sx={{mt: '10%', color: '#00A859'}}/>
                        </Grid>
                        <Grid item xs={10.5} sm={10.5} md={10.5}>
                            <p style={{margin: '0'}}>
                                Lab Setup: Advance feature Robotics Lab will be set up with all latest
                                equipment and components by the company.
                            </p>
                        </Grid>
                        <Grid item xs={1.5} sm={1.5} md={1.5}>
                            <RecommendIcon sx={{mt: '10%', color: '#00A859'}}/>
                        </Grid>
                        <Grid item xs={10.5} sm={10.5} md={10.5}>
                            <p style={{margin: '0'}}>
                                Project Manuals: Level based project manuals will be provided that
                                would help internal faculty to provide trainings to student.
                            </p>
                        </Grid>
                    </Grid>
                    <div className="reveal-from-bottom" data-reveal-delay="600">
                        <a href={docs} target='_blank' rel="noopener noreferer">
                            <LearnLink variant="contained" endIcon={<CloudDownloadIcon sx={{fontSize: '16px'}}/>}>
                                Learn More
                            </LearnLink>
                        </a>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} sx={{position: 'relative'}}>
                    <Image
                        src={require('./../../../assets/images/section/nxrlab/option-2.png')}
                        alt="Hero" 
                        className='services-img'
                        id='height'
                    />
                    <div className="bodered" id='height'></div>
                </Grid>
            </Grid>
        </div>
    )
}