import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';





function Footer() {
  return (
    <div className="fixed-bottom">  
    <Navbar bg="primary" expand="lg" className='container'>
 <Container>
         <Navbar.Collapse id="basic-navbar-nav">
          
          
            Above VAT Calculator for reference purpose only . You are using this website with your own risk. We are not responsible any loses.
          
          <br></br>
         Made with love in UAE By Helloasir . 
          
        </Navbar.Collapse>
        </Container>
    </Navbar>
</div>

  );
}

export default Footer;