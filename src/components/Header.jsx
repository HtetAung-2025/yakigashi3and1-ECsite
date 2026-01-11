import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg'
import 'remixicon/fonts/remixicon.css'
import '../index.css'
import { useCart } from "../pages/CartContext"; 
import { NavHashLink } from 'react-router-hash-link';

function Header() {
    const { cartItems,showAlert } = useCart(); 
    const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <header>
            {showAlert && (
                <div className="cart-alert">
                    <i className="ri-checkbox-circle-line"></i>
                    カートに追加されました！
                </div>
            )}
            <div className="nav container">
                <a href="#" className="logo"><img src={logo} alt="Logo" /></a>
                <div className="navbar">
                    <NavHashLink to="/#home" className="navlink" lang='en'>Home</NavHashLink>
                    <NavHashLink to="/#ranking" className="navlink" lang='en'>Rankings</NavHashLink>
                    <NavHashLink to="/#ingredients" className="navlink" lang='en'>Ingredients</NavHashLink>
                    <NavHashLink to="/#products" className="navlink" lang='en'>Products</NavHashLink>
                    <NavHashLink to="/#news" className="navlink" lang='en'>News</NavHashLink>
                    <NavHashLink to="/#about" className="navlink" lang='en'>About</NavHashLink>
                </div>
                
                <Link to={"/cart"}>
                    <i className="ri-shopping-bag-line" id="cart-icon">
                        {totalCount > 0 && (
                            <span id="cart-count">{totalCount}</span>
                        )}
                    </i>
                </Link>

                <div className="menu" id="menu-icon">
                    <i className="ri-menu-line"></i>
                </div>
            </div>
        </header>
    );
}

export default Header;