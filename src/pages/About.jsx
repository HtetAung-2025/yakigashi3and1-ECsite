import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../index.css"
import shop from "../images/home/shop.jpg"
import aboutimg from "../images/home/aboutimg.svg"
import shopmap from "../images/home/shopmap.svg"
import textimg from '../images/home/imagetext.jpg'
import reviewimg from "../images/home/reviewimg.svg"
import yakigashitext from '../images/home/yakigashitext.jpg'
import { NavHashLink } from "react-router-hash-link";
export default
    function About() {

    return (
        <div>
            <Header />
            <section className="home" id="home">
                <div className="key-virtual container">
                    <div className="kv-left">
                        <div className="key-virtual-text">
                            <h1>店舗情報</h1>
                            <h1>焼き菓子３＆１</h1>
                        </div>
                    </div>
                    <img src={shop} alt="" className="kvimg" />
                </div>
            </section>
            <section className="content" id="content">
                <div className="aboutcontent-container container">
                    <div className="heading">
                        <h1 lang="en">About</h1>
                        <p>店舗について</p>
                    </div>

                    <div className="home-content">
                        <div className="parabtn">
                            <div className="paragraph">
                                <p>
                                    上2人が小さい頃、やんちゃな男の子2人を毎日朝から公園に連れて行っていました。孤独と疲労の毎日でしたが、いろんな公園へ行き、帰りに近くのパン屋やお菓子屋さんを見つけて買って帰り、2人がお昼寝したときに食べることが幸せでした。そんな過去の自分のような人にお菓子を届けたいと思いました。そんな想いから、３＆１はスタートしました。「おいしい」と「安心」を両立させるため、地元の素材や季節の恵みを活し、どんな世代にもやさしい焼菓子づくりを心がけています。
                                </p>
                            </div>
                            <div className="twobtn">
                                <NavHashLink to="#access" className="btn">店舗アクセス<span>▶</span></NavHashLink>
                                <NavHashLink to="#review" className="btn">顧客の声<span>▶</span></NavHashLink>
                            </div>
                        </div>

                        <img src={aboutimg} alt="" />
                    </div>
                </div>
            </section>
            <section className="news aboutbg" id="news">
                <div className="news-container container">
                    <div className="heading">
                        <h1 lang="en">News</h1>
                        <p>新着情報</p>
                    </div>
                    <div className="new-line">
                        <p className="date">2025.10.11
                            <br />
                            【10時〜16時】モンステラコーヒーさん。この日は早めオープンです！</p>
                    </div>
                    <div className="new-line">
                        <p className="date">2025.10.15
                            <br />
                            【11時半〜16時】bench_sharegarden,　豊川市宿町水入48番地!</p>
                    </div>
                    <div className="new-line">
                        <p className="date">.2025.10.29
                            <br />
                            【11時半〜16時】benchラスト出店!</p>
                    </div>
                </div>
            </section>
            <section className="access" id="access">
                <div className="access-container container">
                    <div className="smallcontainer">
                        <div className="access-left">
                            <div className="heading">
                                <h1 lang="en">Access</h1>
                                <p>店舗アクセス</p>
                            </div>
                            <div className="accesstext">
                                <p>やってみたい！を叶える〜レンタルキッチン</p>
                                <p lang="en">bench （橋本造園敷地内）</p>
                                <p>愛知県豊川市宿町水入48番地（名鉄の伊な奈駅から徒歩15分）</p>
                                <p>※駐車場有</p>
                                <p>メールアドレス：　yakigashi3and1@gmail.com</p>
                                <p>電話番号：０９０−１２３４−５６７８</p>
                            </div>
                        </div>
                        <img src={shopmap} alt="" />
                    </div>
                   <a href="https://share.google/wCaMVEQG32OLhbYt6" className="btn"> 店舗の地図を見る<span>▶</span></a>
                </div>
            </section>
            <div className="textimg-wrapper">
                <div className="textimg-track">
                    <img src={textimg} alt="Text Image 1" className="textimg" />
                    <img src={textimg} alt="Text Image 2" className="textimg" />
                </div>
            </div>
            <section className="reviews" id="reviews">
                <div className="news-container container">
                    <div className="heading">
                        <h1 lang="en">Reviews</h1>
                        <p>顧客の声</p>
                    </div>
                    <div className="review" id="review">
                        <img src={reviewimg} alt="" />
                        <p className="paragraph">私にとって頑張った時、とっておきのご褒美はやっぱり３＆１のおやつ！甘すぎないちょうどいいおやつに、エナジーチャージ！されて、「よ〜し、また頑張ろう！」と明るく優しい気持ちに戻って来れる！子供達の「一口ちょうだい！」「もう一口！」がとまらなくて全部食べられちゃう子供（笑）季節にぴったり色んな味がうれしい！私の元気の原です。（３０代の女性）</p>
                    </div>
                    <div className="toProduct">
                       <p><NavHashLink smooth to="/#products" >こだわりの詰まったスイーツの紹介は商品情報をご覧ください！</NavHashLink></p>
                    </div>
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
