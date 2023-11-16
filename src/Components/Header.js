import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  const allUsers= useSelector((state)=>state.user.users)

  return (
    <div>

<Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home">
           <Link to={'/'}  style={{textDecoration:'none'}}>
            
              <img
                alt=""
                src="https://i.postimg.cc/SNBWMmBG/photo-1511367461989-f85a21fda167-q-80-w-1000-auto-format-fit-crop-ixlib-rb-4-0.jpg"
                width="100"
                height="100"
                className="d-inline-block img align-top rounded-pill"
              />{' '}
            
           </Link>
           
          </Navbar.Brand>
          <Nav className="me-auto">
       


          <Link to={"/"} style={{textDecoration:'none'}}><Navbar.Brand  className='text-white  fs-6'>Profk</Navbar.Brand></Link>
         <Link to={"/read"} style={{textDecoration:'none'}}> <Navbar.Brand  className='text-white  fs-6'>Employees({allUsers.length}) </Navbar.Brand></Link>
            
          </Nav>
          
        </Container>
      </Navbar>



    </div>
  )
}

export default Header