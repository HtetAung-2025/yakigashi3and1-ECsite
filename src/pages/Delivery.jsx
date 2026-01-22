import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import deliveryimg from "../images/home/delivery.png"
import yakigashitext from '../images/home/yakigashitext.jpg'
export default
  function Delivery() {

  return (
    <div>
      <Header />
      <section className="home" id="home">
        <div className="key-virtual container">
          <div className="kv-left">
            <div className="key-virtual-text">
              <h1>配送方法について</h1>
              <h1>常温、クール便</h1>
              <h1>焼き菓子 3&1</h1>
            </div>
          </div>
          <img src={deliveryimg} alt="" className="kvimg" />
        </div>
      </section>
      <section className="content" id="content">
        <div className="content-container container">
          <div className="heading">
            <h1 lang="en">delivery</h1>
            <p>配送方法について</p>
          </div>
        </div>
      </section>
      <section className="detailsbox container">
        <h2>配送業者</h2>
        <ul>
          <li>ヤマト運輸</li>
        </ul>
        <p className="paragraph">ご注文から発送までに最短で５営業日いただいております。</p>
        <p className="paragraph">※平日発送</p>
        <h5>ご指定がある場合</h5>
        <p className="paragraph">到着を希望される日の5日前までにご注文ください</p>
        <h5>特にご指定がない場合</h5>
        <p className="paragraph">ご注文確認後、最短3営業日に発送いたします。</p>
        <p className="paragraph">※通常配送とクール便（冷凍）、クール便（冷蔵）を一緒にご注文の場合は、別々に配送料金を申し受けます。</p>
      </section>
      <div className="textimg-wrapper">
        <div className="textimg-track">
          <img src={yakigashitext} alt="Text Image 1" className="textimg" />
          <img src={yakigashitext} alt="Text Image 2" className="textimg" />
        </div>
      </div>
      <Footer />
    </div>
  )
}