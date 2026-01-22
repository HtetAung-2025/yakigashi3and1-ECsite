import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import kvimg from "../images/home/kvimg1.jpg"
import lemoncake from "../images/products/lemoncake.jpg"
import whitechoco from "../images/products/whitechoco.jpg"
import lemongalet from "../images/products/lemongalet.jpg"
import nutcake from "../images/products/nutcake.jpg"
import cookies from "../images/products/cookies.jpg"
import florentin from "../images/products/florentin.jpg"
import vanila from "../images/products/vanila.jpg"
import ichigo from "../images/products/ichigo.jpg"
import giftbox from "../images/products/products.jpg"
import yakigashitext from '../images/home/yakigashitext.jpg'
import "../index.css"
export default
    function Product() {

    return (
        <div>
            <Header />
            <section className="home" id="home">
                <div className="key-virtual container">
                    <div className="kv-left">
                        <div className="key-virtual-text">
                            <h1>３＆１の商品一覧</h1>
                            <h1>焼き菓子３＆１の自慢ケーキ</h1>
                        </div>
                    </div>
                    <img src={kvimg} alt="" className="kvimg" />
                </div>
            </section>
            <div className="products-items container">
                <div className="heading">
                    <h1 lang="en">Products</h1>
                    <p>商品一覧</p>
                </div>
            </div>
            <div className="products-container container">
                <div className="product-items">
                    <div className="product-item">
                        <Link to={"/lemoncake"}><img src={lemoncake} alt="" /></Link>
                        <Link to={"/lemoncake"} className="product-name">瀬戸内レモンケーキ<span>▶</span></Link>
                    </div>
                    <div className="product-item">
                        <Link to={"/whitechoco"}><img src={whitechoco} alt="" /></Link>
                        <Link to={"/whitechoco"} className="product-name">ホワイトチョコレモンケーキ<span>▶</span></Link>
                    </div>
                    <div className="product-item">
                        <Link to={"/lemongalet"}><img src={lemongalet} alt="" /></Link>
                        <Link to={"/lemongalet"} className="product-name">レモンガレットキ<span>▶</span></Link>
                    </div>
                    <div className="product-item">
                        <Link to={"/nutcake"}><img src={nutcake} alt="" /></Link>
                        <Link to={"/nutcake"} className="product-name">チョコナッツケーキ<span>▶</span></Link>
                    </div>
                    <div className="product-item">
                        <Link to={"/cookies"}><img src={cookies} alt="" /></Link>
                        <Link to={"/cookies"} className="product-name">クッキー<span>▶</span></Link>
                    </div>
                    <div className="product-item">
                        <Link to={"/florentin"}><img src={florentin} alt="" /></Link>
                        <Link to={"/florentin"} className="product-name">フロレンティ<span>▶</span></Link>
                    </div>
                    <div className="product-item">
                        <Link to={"/vanila"}><img src={vanila} alt="" /></Link>
                        <Link to={"/vanila"} className="product-name">ブールドネージュ（バニラ）<span>▶</span></Link>
                    </div>
                    <div className="product-item">
                        <Link to={"/ichigo"}> <img src={ichigo} alt="" /></Link>
                        <Link to={"/ichigo"} className="product-name">ブールドネージュ（いちご）<span>▶</span></Link>
                    </div>
                    <div className="product-item">
                        <Link to={"/giftbox"}><img src={giftbox} alt="" /></Link>
                        <Link to={"/giftbox"} className="product-name">ギフトボックス<span>▶</span></Link>
                    </div>

                </div>
            </div>
            <section className="toIngredients container">
                <div className="heading">
                    <h1 lang="en">Ingredients</h1>
                    <p>こだわった素材について<br />
                        素材にこだわって手作り感ある焼き菓子３＆１</p>
                </div>
                <Link to={"/ingredients"} className="btn">素材のこだわり<span>▶</span></Link>
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