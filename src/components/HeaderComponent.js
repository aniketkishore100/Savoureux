import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, NavItem, Collapse, Button, Modal, ModalHeader, ModalBody, FormGroup,Form, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })

    }

    handleLogin(event){
        this.toggleModal()
        alert(' Username: ' + this.username.value + " Password : " + this.password.value +  " Remember: " + this.remember.checked);
        event.preventDefault()
    }
    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container" >
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand href="/" className="mr-auto">
                            <img height="30" width="41" src="assets/images/logo.png" alt="Ristorante Con Fusion" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home"><span><i className="fa fa-home"></i></span>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus"><span><i className="fa fa-info"></i></span>About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu"><span><i className="fa fa-list"></i></span>Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus"><span><i className="fa fa-address-card"></i></span>Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className='fa fa-sign-in'></span>Log In</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor='username'>Username</Label>
                                <Input name='username' type='text' id='username' innerRef={(input)=> this.username = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='password'>Password</Label>
                                <Input type='password' id='password' name='password' innerRef = {(input)=>this.password = input}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type='checkbox' name='remember' innerRef={(input)=>this.remember = input}/>
                                    Remember Me
                                </Label>
                            </FormGroup>
                            <Button type='submit' value='submit' color='primary'>Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

export default Header