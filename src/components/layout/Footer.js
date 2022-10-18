import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from '../../assets/images/nav-logo.png';
import FooterNav from './partials/FooterNav';
import FooterSocial from './partials/FooterSocial';
import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  const classes = classNames(
    'site-footer center-content-mobile',
    topOuterDivider && 'has-top-divider',
    className
  );

  return (
<footer
      {...props}
      className={classes}
      style={{backgroundColor: 'white'}}
    >
      <div className="container">
        <div className={
          classNames(
            'site-footer-inner',
            topDivider && 'has-top-divider'
          )}>
            
          <div className="footer-top" style={{marginTop: '100px'}}>
            <Box>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4} md={4}>
                  <Link to='/'>
                  <img src={ Logo } width="200" alt="" className="float-righ"/>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                  <Grid container spacing={4}>
                    <Grid item md={4} sm={4} xs={12}>
                      <h5 style={{color: "#2E2F6E"}}>Our Services</h5>
                      <Link to='/home-roboclub'>
                        <p>Home Robotics Club</p>
                      </Link>
                      <Link to='/robotics-club'>
                        <p>School Robotics Club</p>
                      </Link>
                      <Link to='/nxr-lab'>
                        <p>NXR Laboratory</p>
                      </Link>
                    </Grid>
                    <Grid item md={4} sm={4} xs={12}>
                      <h5 style={{color: "#2E2F6E"}}>Community</h5>
                      <Link to='/nxr-lab'>
                        <p>NXR Laboratory</p>
                      </Link>
                      <Link to='/corporate-club'>
                        <p>Corporate Robo Club</p>
                      </Link>
                      <Link to='/enterpreneurship'>
                        <p>Business Education</p>
                      </Link>
                    </Grid>
                    <Grid item md={4} sm={4} xs={12}>
                      <h5 style={{color: "#2E2F6E"}}>About Us</h5>
                      <Link to='/about'>
                        <p>About</p>
                      </Link>
                      <Link to='/faqs'>
                        <p>FAQs</p>
                      </Link>
                      <Link to='/contact'>
                        <p>Contact Us</p>
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                
              </Grid>
            </Box>
            <Box>
            <h5>Contact Us</h5>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4} md={4}>
                  <FooterSocial />
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={4} md={4}>
                      <p><a style={{color: '#727272'}} href='https://goo.gl/maps/GBFMVqU6aRVPsMNe9' target='_blank'>Office address: Abuja, Nigeria</a></p>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <p><a style={{color: '#727272'}} href='mailto:info@technoxiannigeria.ng'>info@technoxiannigeria.ng</a></p>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <p ><a style={{color: '#727272'}} href='tel:09160605054'>0916 060 5054</a><br/><a style={{color: '#727272'}} href='tel:09156444478'>0915 644 4478</a></p>
                    </Grid>
                  </Grid>
                </Grid>
                
              </Grid>
            </Box>
            <br/><br/>
              <div className="footer-copyright" style={{color: "#9CA9B3", textAlign: 'center'}}>&copy; 2022 TechnoXian Nigeria. All right reserved</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;