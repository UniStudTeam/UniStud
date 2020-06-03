
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import LogOutModal from './LogoutModal';

const NavBarr = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

  return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Mirë se erdhët: </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="" navbar>
                    <NavItem>
                        <NavLink href="/components/">Të gjitha biletat</NavLink>
                    </NavItem>
                    <NavItem >
                        <LogOutModal></LogOutModal>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
  );
}

export default NavBarr;