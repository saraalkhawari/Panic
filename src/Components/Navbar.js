import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './Images/brain.svg';
import { Button } from './Button';
import './Navbar.css';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true); 

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false); 

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const toggleOffcanvas = () => {
        setShow(!show);
      };



    
  return (
      <>
          <nav className="nav-bar">
              <div className="navbar-container">
                  <div onClick={handleShow}>
                      <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                  </div>
                  <div>
                  <Link to="/" className="navbar-title" onClick={closeMobileMenu}>
                    أداة فرز اضطراب الهلع
                  </Link>
                  </div>
                  <div>
                  <img src={logo} alt="Logo"  className='logo'/>
                  </div>
              </div>
           
          </nav>
          
      </>
  )
}

export default Navbar


//side-bar code ===>

{/*
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div>
*/}


    //const showButton = () => {
      //  if (window.innerWidth <= 960) { setButton(false); } else { setButton(true); }
    //};
//window.addEventListener('resize',showButton)
//    useEffect(() => {
 //   showButton ()
//},[])


 {/* <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                <Button className= 'btn--start'>Start</Button>
                </li>
                <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                اختبار فرز اضطراب الهلع 
                </Link>
                </li>
                <li className='nav-item'>
                <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                عن اضطراب الهلع
                </Link>
                </li>
                <li className='nav-item'>
                <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                اعرف اكثر عن الدراسة
                </Link>
                </li>
                <li className='nav-item'>
                <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                المراجع
                </Link>
                </li>
                <li className='nav-item'>
                <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                احصل على مساعدة
                </Link>
                </li>
                <li className='nav-item'>
                <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                القائمين على البرنامج
                </Link>
                </li>
            </ul > */}






 