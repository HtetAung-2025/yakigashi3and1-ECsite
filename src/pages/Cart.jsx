import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "./CartContext";
import 'remixicon/fonts/remixicon.css'
import '../index.css'
import { Link } from "react-router-dom";
export default function Cart() {
  const { cartItems, updateQuantity, removeItem } = useCart();
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div>
      <Header />
      <div className="container carttitle">
        <h1>ショッピングカート (Cart)</h1>

        {cartItems.length === 0 ? (
          <p>カートに入れた商品がありません。</p>
        ) : (
          <div className="cart-list">
            {cartItems.map((item) => (
              <div key={item.id} className="show-products">
                <img src={item.image} alt={item.name} />
                <div style={{ flex: 1 }}>
                  <h3>{item.name}</h3>
                  <p className="price">{item.price} ¥</p>


                  <div className="add-minus">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
                <button onClick={() => removeItem(item.id)} className="delete">
                  <i class="ri-delete-bin-6-line"></i>
                  削除
                </button>
              </div>
            ))}

            <div className="totalprice">
              <h2>合計金額： {totalPrice} ¥</h2>
              <Link to="#" className="btn">購入手続きへ<span>▶</span></Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}