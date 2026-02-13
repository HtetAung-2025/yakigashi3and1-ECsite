
import React from "react";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Recommand from "../components/recommand";
import lemoncake from "../images/home/lemoncake.jpg";
import { useCart } from "../pages/CartContext"; 

export default function Lemoncake() {
  const { addToCart } = useCart();
  const productData = {
    id: "lemon-cake-01",
    name: "瀬戸内レモンケーキ",
    price: 350,
    image: lemoncake
  };
  const handleAdd = () => {
    addToCart(productData);
  };

  return (
    <div>
      <Header />
      <section className="home" id="home">
        <div className="key-virtual-product container">
          <img src={lemoncake} alt="" className="kvimg" />
          <div className="kv-left">
            <div className="key-virtual-text">
              <h1>{productData.name}</h1>
              <p lang="en">organic setouchi lemon cake</p>
              <h1 lang="en">¥{productData.price} <span>（税込）</span></h1>
              <p className="notice">※一個の価格です。</p>
              <button className="btn" onClick={handleAdd}>
          カートに入れる<span>▶</span>
        </button>
            </div>
          </div>
        </div>
      </section>
      <section className="product-information container">
        <h2>商品説明</h2>
        <h4>瀬戸内レモンピールイりのレモン型のレモンケーキホワイトチョコトッピング</h4>
        <div className="info-sentence">
          <p>商品名</p>
          <p>無農薬瀬戸内レモンケーキ(Organic Setouchi Lemon Cake)</p>
        </div>
        <div className="info-sentence">
          <p>名称</p>
          <p>焼き菓子</p>
        </div>
        <div className="info-sentence">
          <p>原材料名</p>
          <p>小麦粉（国内製造）、バター（国内製造）、卵（愛知県産）,、きび砂糖、レモンピール、ホワイトチョコ、レモン、洋酒、ベーキンパウダー（一部に小麦。卵。乳成分を含む）</p>
        </div>
        <div className="info-sentence">
          <p>内容量</p>
          <p>１個</p>
        </div>
        <div className="info-sentence">
          <p>賞味期限</p>
          <p>2025.11.5</p>
        </div>
        <div className="info-sentence">
          <p>保存方法</p>
          <p>高温多湿、直射日光を避けてください。</p>
        </div>
        <div className="info-sentence">
          <p>製造者</p>
          <p>（有）橋本造園,
            愛知県富川市宿町水入48番地</p>
        </div>
        <div className="info-sentence">
          <p>連絡先</p>
          <p>（有）橋本造園,
            焼き菓子　3&1　平松美佳</p>
        </div>
      </section>
      <Recommand />
      <Footer />
    </div>
  );
}
