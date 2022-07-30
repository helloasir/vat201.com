import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';




function Footer() {
  return (
    <div className="fixed-bottom">  
    <Navbar bg="primary" expand="lg" className='container'>
 <Container>
         <Navbar.Collapse id="basic-navbar-nav">
          Footer
        </Navbar.Collapse>
        </Container>
    </Navbar>
</div>

  );
}

export default Footer;