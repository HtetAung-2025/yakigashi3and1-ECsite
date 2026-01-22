import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../index.css"
import paymentimg from "../images/home/paymentimg.svg"
import visa from "../images/home/visa.svg"
import jcb from "../images/home/jcb.svg"
import amax from "../images/home/amax.svg"
import yakigashitext from '../images/home/yakigashitext.jpg'
export default function Payment() {
  return (
    <div>
      <Header />
      <section className="home" id="home">
        <div className="key-virtual container">
          <div className="kv-left">
            <div className="key-virtual-text">
              <h1>お支払方法</h1>
              <h1>代引きもできる</h1>
              <h1>焼き菓子 3&1</h1>
            </div>
          </div>
          <img src={paymentimg} alt="" className="kvimg" />
        </div>
      </section>
      <section className="content" id="content">
        <div className="content-container container">
          <div className="heading">
            <h1 lang="en">payments</h1>
            <p>お支払い方法について</p>
          </div>
        </div>
      </section>

      <section className="detailsbox container">
        <h2>各種素材特徴</h2>
        <p className="paragraph">
          焼き菓子３＆１焼き菓子専門店 いもまる 公式オンラインショップでは以下のお支払い方法が利用できます。 </p>
        <p className="paragraph">引き渡しは注文確定後5営業日以内に発送、配送業者・追跡番号など</p>

        <ul>
          <li>銀行振込（注文後7日以内）</li>
          <li>クレジットカード</li>
          <li>コンビニ払い</li>
          <li>代引き</li>
        </ul>
        <h5>【ご利用いただけるクレジットカードの種類】</h5>
        <p className="paragraph">Visa／Mastercard／American Express／JCB</p>
        <p className="paragraph"> 当店のWebサイトでは、SSLというセキュリティーシステムを利用しております。</p>
        <p className="paragraph">お客様の大切なクレジットカード情報はすべて、暗号化されて送信されます。</p>
        <h5>【ご注意ください】</h5>
        <p className="paragraph">※ 返品・交換・キャンセルに関する事項　例: お客様都合による返品は原則不可、食品のため注文後のキャンセルは不可など </p>
        <p className="paragraph">※不良品・欠陥品の対応　例: 商品到着後3日以内にご連絡いただいた場合に限り、交換または返金対応など </p>
        <p className="paragraph"> ※クレジットカードにてお支払いの場合、ご注文時にWebサイト上でお客様のカードの承認を取らせていただきます。</p>
        <p className="paragraph"> この承認が得られませんと、カードのご利用およびご注文は確定いたしませんのでお気を付けください。</p>
        <div className="creditcards">
          <img src={jcb} alt="" />
          <img src={visa} alt="" />
          <img src={amax} alt="" />
        </div>
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