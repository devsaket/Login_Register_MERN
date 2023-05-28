import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import Logo from '../../logo.svg'

import './style.scss'

const Home = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={Logo} alt={Logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/" className="text-white">Home</Nav.Link>
                            <Nav.Link href="/" className="text-white">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/login" className="text-white">Login</Nav.Link>
                            <Nav.Link href="/signup" className="text-white">Sign up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Home