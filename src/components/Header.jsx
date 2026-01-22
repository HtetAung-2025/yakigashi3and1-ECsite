import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg'
import 'remixicon/fonts/remixicon.css'
import '../index.css'
import { useCart } from "../pages/CartContext";
import { NavHashLink } from 'react-router-hash-link';

function Header() {
    const { cartItems, showAlert } = useCart();
    const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const [isActive, setIsActive] = useState(false);
    const toggleMenu = () => setIsActive(!isActive);
    const closeMenu = () => setIsActive(false);
    return (
        <header>
            {showAlert && (
                <div className="cart-alert">
                    <i className="ri-checkbox-circle-line"></i>
                    カートに追加されました！
                </div>
            )}
            <div className="nav container">
                <NavHashLink smooth to="/#home" className="logo"><img src={logo} alt="Logo" /></NavHashLink>
                <div className={`navbar ${isActive ? "active" : ""}`}>
                    <NavHashLink smooth to="/#home" className="navlink" onClick={closeMenu} lang='en'>Home</NavHashLink>
                    <NavHashLink smooth to="/#ranking" className="navlink" onClick={closeMenu} lang='en'>Rankings</NavHashLink>
                    <NavHashLink smooth to="/#ingredients" className="navlink" onClick={closeMenu} lang='en'>Ingredients</NavHashLink>
                    <NavHashLink smooth to="/#products" className="navlink" onClick={closeMenu} lang='en'>Products</NavHashLink>
                    <NavHashLink smooth to="/#news" className="navlink" onClick={closeMenu} lang='en'>News</NavHashLink>
                    <NavHashLink smooth to="/#about" className="navlink" onClick={closeMenu} lang='en'>About</NavHashLink>
                    <nav className="otherlink">
                        <Link to="/delivery" className="navlink" onClick={closeMenu} lang='en'>Delivery</Link>
                        <Link to="/payment" className="navlink" onClick={closeMenu} lang='en'>Payment</Link>
                        <Link to="/qanda" className="navlink" onClick={closeMenu} lang='en'>FAQ</Link>
                    </nav>
                </div>


                <Link to={"/cart"}>
                    <i className="ri-shopping-bag-line" id="cart-icon">
                        {totalCount > 0 && (
                            <span id="cart-count">{totalCount}</span>
                        )}
                    </i>
                </Link>
                <div className="menu" id="menu-icon" onClick={toggleMenu}>
                    <i className={isActive ? "ri-close-fill" : "ri-menu-line"}></i>
                </div>
            </div>
        </header>
    );
}

export default Header;