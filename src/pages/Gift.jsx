
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Recommand from "../components/recommand";
import giftbox from "../images/home/box.jpg";
import {useCart} from "./CartContext";
import boxinside from "../images/home/boxinside.svg"

export default function Giftbox() {
  const { addToCart } = useCart(); 
  const productData = {
    id: "gift-09",
    name: "ギフトセット(３ヶ月１回特別)",
    price: 3000,
    image: giftbox
  };
  const handleAdd = () => {
    addToCart(productData);
  };

  return (
    <div>
      <Header />
      <section className="home" id="home">
        <div className="key-virtual-product container">
          <img src={giftbox} alt="" className="kvimg" />
          <div className="kv-left">
            <div className="key-virtual-text">
              <h1>{productData.name}</h1>
              <p lang="en">Gift Box</p>
              <h1 lang="en">¥{productData.price} <span>（税込）</span></h1>
              <p className="notice">※一セットの価格です。</p>
              <button className="btn" onClick={handleAdd}>
          カートに入れる<span>▶</span>
        </button>
            </div>
          </div>
        </div>
      </section>
      <section className="product-information container">
        <h2>ギフトボックスの内容</h2>
        <h4>３ヶ月一回の特別なギフトです。自分の大切な人への贈り物としてピッタリ</h4>
        <img src={boxinside} alt="" className="boxinside" />
        <p className="context">人気の瀬戸内レモンケーキを始め焼き菓子の詰め合わせセットです。プレゼントや子供とおやつ時間に是非！</p>
        <p className="notice">※申し訳ありませんが、北海道、沖縄は＋500円　お願いいたします</p>
      </section>
      <Recommand/>
      <Footer />
    </div>
  );
}
  