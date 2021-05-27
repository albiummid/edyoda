import React from 'react';
import { Nav, NavItem, NavItems, NavLogo } from './Navbar.elements';
import logo from '../../images/edyoda_transparent_logo.svg'
import userImage from '../../images/default-avatar.svg'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const userName = 'Jane Doe'
    return (
        <Nav>
            <NavLogo>
                <img src={logo} alt="" />
            </NavLogo>
            <NavItems>
                <NavItem>
                    <NavLink to=''>
                        <i class="fas fa-bell"></i>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to=''>
                        <p> Hi {userName}!</p>
                        <img src={userImage} alt="" />
                    </NavLink>
                </NavItem>
            </NavItems>
        </Nav>
    );
};

export default Navbar;