import React from 'react';
import './Footer.css'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
	return (
	  <div className='footer'>
			<footer>
				<nav  className='footer-container'>
					<div>Help</div>
					<div><Link to='/'>Home</Link></div>
					<div>Info</div>
      </nav>
    </footer>
	  </div>
    
  );
}

export default Footer;


// import React from "react";
// import {Box,Container,Row,Column,FooterLink,Heading,} from "./FooterStyles";
// import { Link } from "react-router-dom";
// import iconH from './Images/home.svg'

// const Footer = () => {
// return (
// 	<Box>
//         <Row>
// 			<Column>
// 				<img scr={iconH} alt='home' />
// 		</Column>
// 		<Column>
		
// 		</Column>
// 		</Row>
// 	</Box>
// );
// };
// export default Footer;
