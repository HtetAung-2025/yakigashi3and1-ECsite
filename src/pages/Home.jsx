import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import kvimg from '../images/home/kvimg.svg'
import rank1img from '../images/home/rank1.jpg'
import rank2img from '../images/home/rank2.jpg'
import rank3img from '../images/home/rank3.jpg'
import lemon from '../images/home/lemon.jpg'
import cane from '../images/home/cane.jpg'
import egg from '../images/home/eggs.jpg'
import butter from '../images/home/butter.jpg'
import flavour from '../images/home/flavour.jpg'
import lemoncake from '../images/home/lemoncake.jpg'
import whitechoco from '../images/home/whitechoco.jpg'
import lemongalet from '../images/home/lemongalet.jpg'
import cookie from '../images/home/cookie.jpg'
import florentin from '../images/home/florentin.jpg'
import giftbox from '../images/home/box.jpg'
import textimg from '../images/home/imagetext.jpg'
import aboutrightimg from '../images/home/aboutrightimg.svg'
import story from '../images/home/story.svg'
import yakigashitext from '../images/home/yakigashitext.jpg'
import '../index.css'
function Home() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const targetId = hash.replace('#', '');
            const element = document.getElementById(targetId);

            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, [hash]);
    return (
        <div>
            <Header />
            <section className="home" id="home">
                <div className="key-virtual container">
                    <div className="kv-left">
                        <div className="key-virtual-text">
                            <h1>素材にこだわった焼き菓子で、</h1>
                            <p>親子のおやつ時間をもっとしあわせに</p>
                        </div>
                        <Link to={"/products"} className="btn">商品一覧を見る<span>▶</span></Link>
                    </div>
                    <img src={kvimg} alt="" className="kvimg" />
                </div>
            </section>
            <section className="ranking" id="ranking">
                <div className="ranking-container container">
                    <div className="heading">
                        <h1 lang="en">Rankings</h1>
                        <p>ランキング</p>
                    </div>
                    <div className="rank-img">
                        <div className="rank-item rank1">
                            <Link to={"/lemoncake"}><img src={rank1img} alt="" /></Link>
                        </div>
                        <div className="rank-item rank2">
                            <Link to={"/whitechoco"}><img src={rank2img} alt="" /></Link>
                        </div>
                        <div className="rank-item rank3">
                            <Link to={"/lemongalet"}><img src={rank3img} alt="" /></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content" id="content">
                <div className="content-container container">
                    <div className="heading">
                        <h1 lang="en">Contents</h1>
                        <p>コンテンツ</p>
                    </div>
                    <h2 className="subheading">【安心感 】【やさしい味わい】【心をつなぐ】</h2>
                    <div className="paragraph">
                        <p>３＆１は、選び抜いた素材を使い、ひとつひとつ心を込めて焼き上げたお菓子を通して、“安心して食べられる幸せ”と“贈る喜び”をお届けしています。
                            大切にしているのは、ふっと気持ちがほどけるような、やさしく上品な甘さと、自然の恵みが感じられる素朴な香り。
                            小さなお子さまにも安心して食べていただけるよう、余計なものはできるだけ加えず、素材本来のやさしさをそのまま閉じ込めています。</p>
                    </div>
                    <section className="ingredients" id="ingredients">
                        <img src={lemon} alt="" />
                        <img src={cane} alt="" />
                        <img src={egg} alt="" />
                        <img src={butter} alt="" />
                        <img src={flavour} alt="" />
                    </section>
                    <Link to={"/ingredients"} className="btn">素材のこだわり<span>▶</span></Link>
                </div>
            </section>
            <section className="products" id="products">
                <div className="products-container container">
                    <div className="title-btn">
                        <div className="title">
                            <div className="heading">
                                <h1 lang="en">Products</h1>
                                <p>商品一覧</p>
                            </div>
                            <div className="paragraph">
                                <p>焼き菓子３＆１が自信を持ってお届けする焼き菓子各種をご紹介します</p>
                            </div>
                        </div>
                        <Link to={"/products"} className="btn">商品一覧を見る<span>▶</span></Link>
                    </div>
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
                <section className="news" id="news">
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
                    <div className="textimg-wrapper">
                        <div className="textimg-track">
                            <img src={textimg} alt="Text Image 1" className="textimg" />
                            <img src={textimg} alt="Text Image 2" className="textimg" />
                        </div>
                    </div>
                </section>
            </section>
            <section className="about" id="about">
                <div className="about-container container">
                    <div className="about-left">
                        <div className="heading">
                            <h1 lang="en">About Us</h1>
                            <p>私たちについて</p>
                        </div>
                        <div className="paragraph">
                            <p>愛知県豊川市のbenchさんにつき２回営業＋マルシェ出店しています。</p>
                        </div>
                        <Link to={"/about"} className="btn">店舗情報を見る<span>▶</span></Link>
                    </div>
                    <div className="about-right">
                        <img src={aboutrightimg} alt="" />
                    </div>
                </div>
            </section>
            <section className="story" id="story">
                <div className="story-container container">
                    <div className="heading">
                        <h1 lang="en">Eating Episodes</h1>
                        <p>お菓子を食べるシーン</p>
                    </div>
                    <img src={story} alt="" />
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
    );
}

export default Home;