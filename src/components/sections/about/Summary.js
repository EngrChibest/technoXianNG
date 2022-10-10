import React from "react";
import { Link } from "react-router-dom";
import Image from '../../elements/Image';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styled from "styled-components";
import { Button } from "@mui/material";

const LearnLink = styled(Button)({
    textTransform: 'capitalize',
    fontSize: '16px',
})

export default function Summary(){
    return (
        <div className="container-sm">
            <h2 style={{textTransform: 'capitalize', marginTop: '16%', textAlign: 'center'}}>We’re here because of you.</h2>
            <p style={{textTransform: 'capitalize', marginTop: '6%', textAlign: 'center'}} className='about-text-width'>
                TechnoXian is a global technology
                education platform headquartered in New
                Delhi, India with operations across Nigeria
                with curricula for upper primary, <br/><br/>

                secondary, tertiary education and
                professional certification in Robotics, IoT,
                Embedded Systems, Virtual Reality, <br/><br/>

                Augmented Reality, Artificial Intelligence,
                Automation, 3D printing, UAV, Machine
                Learning, Cyber Security, Data Science.<br/><br/>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                    <Link to='/home-robotics'>
                        <LearnLink variant="text">
                            Learn More
                            <ChevronRightIcon fontSize="small"/>
                        </LearnLink>
                    </Link>
                </div>
            </p>
        </div>
    )
}