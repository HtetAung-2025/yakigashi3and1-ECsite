import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'
import logo from '../images/logo.svg'
import { NavHashLink } from 'react-router-hash-link';
function Footer() { 
    return (
        <footer>
        <div className="footer-container container">
            <div className="logosocial">
                <img src={logo} alt="Logo" className='logo'/>
                <div className="social">
                     <a href="#"><i class="ri-instagram-line"></i></a>
                </div>
            </div>
            <div className="links">
                <NavHashLink to="/#home" className='navlink' lang='en'>Home</NavHashLink>
                <NavHashLink to="/#ranking" className='navlink' lang='en'>Rankings</NavHashLink>
                <NavHashLink to="/#ingredients" className='navlink' lang='en'>Ingredients</NavHashLink>
                <NavHashLink to="/#products" className='navlink' lang='en'>Products</NavHashLink>
            </div>
            <div className="links">
                 <NavHashLink to="/#about" className='navlink' lang='en'>About</NavHashLink>
                <NavHashLink to="/#news" className='navlink' lang='en'>News</NavHashLink>
                <Link to="/payment" className='navlink' lang='en'>Payments</Link>
                <Link to="" className='navlink' lang='en'>Delivery</Link>
                 <Link to="/qanda" className='navlink' lang='en'>Fqa</Link>
            </div>
            <a href="" className='navlink topbtn' lang='en' ><i class="ri-arrow-up-circle-fill"></i>Top</a>
        </div>
        <p className='copyright container navlink'>Copyright © yakigashi 3&1 . All rights researved.</p>
        </footer>
    );
}

export default Footer;