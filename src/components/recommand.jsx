import React from "react"
import lemoncake from "../images/home/lemoncake.jpg"
import whitechoco from '../images/home/whitechoco.jpg'
import lemongalet from '../images/home/lemongalet.jpg'
import cookie from '../images/home/cookie.jpg'
import florentin from '../images/home/florentin.jpg'
import giftbox from '../images/home/box.jpg'
import yakigashitext from '../images/home/yakigashitext.jpg'
import '../index.css'
import { Link } from "react-router-dom"
export default function Recommand() {
    return (
        <>
            <div className="recommand-products container">
                <h2>他の商品を見る</h2>
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
                        <Link to={"/cookies"}><img src={cookie} alt="" /></Link>
                        <Link to={"/cookies"} className="product-name">クッキー<span>▶</span></Link>
                    </div>
                    <div className="product-item">
                        <Link to={"/florentin"}><img src={florentin} alt="" /></Link>
                        <Link to={"/florentin"} className="product-name">フロレンティ<span>▶</span></Link>
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
        </>
    )
}