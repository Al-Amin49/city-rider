import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import {Navbar,Nav, Container} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
// import logo from '../../img/logo.png'
const Header = () => {
    const history = useHistory();
    const handleLogin = () => {
        history.push('/login')
    }
    return (
        <div>
            {/* <nav>
              <h1 className="logo">City Rider</h1>
           <Link to="/home">Home</Link>
           <Link to="/destination">Destination</Link>
           <Link to="/blog">Blog</Link>
           <Link to="/contact">Contact</Link>
                
           <button className="login-header ">Login</button>
            </nav> */}

<Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">City Rider</Navbar.Brand>
    <Nav className="float-right">
      {/* <Nav.Link><Link to="/home">Home</Link> </Nav.Link>
      <Nav.Link><Link to="/destination">Destination</Link> </Nav.Link>
      <Nav.Link><Link to="/blog">Blog</Link> </Nav.Link>
      <Nav.Link><Link to="/contact">Contact</Link> </Nav.Link> */}
         <Nav.Link as={Link} to="/home" >Home</Nav.Link>
         <Nav.Link as={Link} to="/destination" >Destination</Nav.Link>
         <Nav.Link as={Link} to="/blog" >Blog</Nav.Link>
         <Nav.Link as={Link} to="/contact" >Contact</Nav.Link>

      <button className="btn-login" onClick={handleLogin}>Login</button>
      {/* <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link> */}
    </Nav>
    </Container>
  </Navbar>
            
        </div>
    );
};

export default Header;