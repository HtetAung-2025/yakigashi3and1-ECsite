import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const addToCart = (product) => {
        setCartItems(prev => {
            const isExist = prev.find(item => item.id === product.id);
            if (isExist) {
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
    };

    const updateQuantity = (id, amount) => {
        setCartItems(prev => prev.map(item => 
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeItem,showAlert }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);