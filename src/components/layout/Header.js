import React, { useState, useRef, useEffect } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/nav-logo.png';
import ConnectButton from '../elements/ConnectButton';
import { Button, Menu, MenuItem } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {

  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);
  const theme = useTheme();

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });  

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = '500' + 'px';
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }  

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );



  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header
      {...props}
      className={classes}
      style={{position: "fixed", width: '100%'}}
    >
      <div className="container-nav">
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}>
          {/* <Logo /> */}
          <Link to="/"><img src={ Logo } width="150" alt="" className="float-righ"/></Link>
          {/* <h3>Numeri</h3> */}
          {!hideNav &&
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={
                  classNames(
                    'header-nav',
                    isActive && 'is-active'
                  )}>
                <div className="header-nav-inner">
                  <ul className={
                    classNames(
                      'list-reset text-xs',
                      navPosition && `header-nav-${navPosition}`
                    )}>
                      <li>
                        <Link to="/" onClick={closeMenu}>Home</Link>
                      </li>
                      <li>
                        <Link to="/about" onClick={closeMenu}>About Us</Link>
                      </li>
                      <li>
                        <div class="dropdown">
                          <Link to=""
                            sx={{
                              fontSize: '16px',
                              textTransform: 'capitalize',
                              color: '#000'
                            }}
                            className='dropbtn'
                          >
                            Our Services
                            <ArrowDropDownIcon  
                              fontSize='medium'
                              sx={{
                                position: 'relative',
                                top: '5px',
                                height: '20px',
                                [theme.breakpoints.down('sm')]: {
                                  display: 'none',
                                },
                              }}
                            />
                          </Link>
                          <div class="dropdown-content" style={{color: '#000'}}>
                            <Link to="/home-roboclub" style={{color: 'black'}}>Home Roboclub</Link>
                            <Link to="/robotics-club" style={{color: 'black'}}> School Robotics Club</Link>
                            <Link to="/nxr-lab" style={{color: 'black'}}>NXR Lab</Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="dropdown">
                          <Link to=""
                            sx={{
                              fontSize: '16px',
                              textTransform: 'capitalize',
                              color: '#000'
                            }}
                            className='dropbtn'
                          >
                            Community
                            <ArrowDropDownIcon  
                              fontSize='medium'
                              sx={{
                                position: 'relative',
                                top: '5px',
                                height: '20px',
                                [theme.breakpoints.down('sm')]: {
                                  display: 'none',
                                },
                              }}
                            />
                          </Link>
                          <div class="dropdown-content" style={{color: '#000'}}>
                            <Link to="/robotics-competition" style={{color: 'black'}}>Robotics Competition</Link>
                            <Link to="/corporate-club" style={{color: 'black'}}>Corporate Robo Club</Link>
                            <Link to="/enterpreneurship" style={{color: 'black'}}>Business Education</Link>
                          </div>
                        </div>
                      </li>
                      <li>
                      <div class="dropdown">
                          <Link to=""
                            sx={{
                              fontSize: '16px',
                              textTransform: 'capitalize',
                              color: '#000'
                            }}
                            className='dropbtn'
                          >
                            Help
                            <ArrowDropDownIcon  
                              fontSize='medium'
                              sx={{
                                position: 'relative',
                                top: '5px',
                                height: '20px',
                                [theme.breakpoints.down('sm')]: {
                                  display: 'none',
                                },
                              }}
                            />
                          </Link>
                          <div class="dropdown-content" style={{color: '#000'}}>
                            <Link to="/faqs" style={{color: 'black'}}>FAQs</Link>
                            <Link to="/contact" style={{color: 'black'}}>Contact Us</Link>
                          </div>
                        </div>
                      </li>
                  </ul>
                  {!hideSignin &&
                    <ul
                      className="list-reset header-nav-right"
                    >
                      <li>
                        <Link to='/register'>
                          <Button 
                            variant="contained"
                            sx={{
                              fontSize: '16px',
                              textTransform: 'capitalize'
                            }}
                          >
                            Register
                          </Button>
                        </Link>
                      </li>
                    </ul>}
                </div>
              </nav>
            </>}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;

// #8364e2