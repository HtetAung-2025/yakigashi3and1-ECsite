import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../index.css";
import kvimg from "../images/ingredients/kvimg.svg";
import contentimg from "../images/ingredients/contentimg.svg";
import lemon from '../images/home/lemon.jpg'
import cane from '../images/home/cane.jpg'
import egg from '../images/home/eggs.jpg'
import butter from '../images/home/butter.jpg'
import flavour from '../images/home/flavour.jpg'
import yakigashitext from '../images/home/yakigashitext.jpg'
export default function Ingredients() {
  return (
    <>
      <Header />

      <section className="home" id="home">
        <div className="key-virtual container">
          <div className="kv-left">
            <div className="key-virtual-text">
              <h1>３＆１のこだわり素材</h1>
              <h1>３＆１の自慢のオリジナル</h1>
              <h1>焼き菓子</h1>
            </div>
          </div>
          <img src={kvimg} alt="" className="kvimg" />
        </div>
      </section>

      <section className="content" id="content">
        <div className="content-container container">
          <div className="heading">
            <h1 lang="en">Ingredients</h1>
            <p>素材のこだわり</p>
          </div>

          <div className="home-content">
            <div className="paragraph">
              <p>
                私たちは、「おいしさ」と「安心」を大切に素材を選んでいます。
                岡崎の新鮮な卵は、濃厚でコクのある味わいが魅力です。
                瀬戸内の太陽と海風を受けて育ったレモンは、自然の力がぎゅっと詰まっています。
                特に大三島の無農薬レモンは、皮ごと安心して使えるほど良質です。
                国産小麦や旬の果実など、自然の恵みを活かし、
                素材と真摯に向き合いながらお菓子をつくっています。
              </p>
            </div>

            <img src={contentimg} alt="" />
          </div>
        </div>
      </section>

      <section className="detailsbox container">
        <h2>各種素材特徴</h2>
        <div className="card">
            <div className="left">
                <h3>１。岡崎ランニング</h3>
            <p className="paragraph">
                ビタミンB群・たんぱく質・鉄分が含まれ、成長期の子どもの栄養補給にも役立ちます。「岡崎のランニングエッグ」は愛知県岡崎市で、産卵後３日以内のものだけを販売しています。安心安全なこだわりのエサせで飼育した美味しくて栄養たっぷりの新鮮な卵です。安心の食を追求し、濃厚な黄身と深いコクが特徴です。
            </p>
            </div>
            <img src={egg} alt="" />
        </div>
        <div className="card">
            <div className="left">
                <h3>2。瀬戸内無農薬レモン</h3>
            <p className="paragraph">
                ビタミンCがたっぷり。ポリフェノールや食物繊維もまるごと摂取できます。瀬戸内の大三島で育てられた無農薬レモンは、豊かな自然環境で丁寧に栽培され、防腐剤やワックスを一切使用していません。爽やかな酸味と香りが特徴で、皮まで安心して使えるぇもんです。
            </p>
            </div>
            <img src={lemon} alt="" />
        </div>
        <div className="card">
            <div className="left">
                <h3>３。安心の国産麦</h3>
            <p className="paragraph">
                私たちのお菓子に使う小麦は、すべて国産の安心できる麦です。国内の契約農家が大切に育てた小麦を使用し、農薬の使用をできるだけ抑え、丁寧に管理された畑で育てられています。さらに、残留農薬や放射能の検査など、厳しい品質チェックを通過した原料だけを使用。小麦本来の香りとやさしい甘みが感じられる素材で、子どもから大人まで安心して食べられるお菓子づくりを心がけています。
            </p>
            </div>
            <img src={flavour} alt="" />
        </div>
        <div className="card">
            <div className="left">
                <h3>４。優しいきび砂糖</h3>
            <p className="paragraph">
                南の陽ざしをたっぷり浴びて育ったさとうきびから作られる、きび砂糖。精製をおさえているため、ミネラルやコクがほどよく残り、まろやかでやさしい甘みが広がります。白砂糖にはない自然の風味が、素材の味をそっと引き立て、お菓子にやさしいぬくもりを添えてくれます。
            </p>
            </div>
            <img src={cane} alt="" />
        </div>
        <div className="card">
            <div className="left">
                <h3>5。美味しさ北海道バター</h3>
            <p className="paragraph">
                豊かな自然と澄んだ空気に包まれた北海道で育った牛のミルクから生まれる、北海道バター。しっかりとしたコクと深い香りがあり、焼き菓子に豊かな風味とまろやかさを与えます。素材の味を引き立てながら、ひとくちごとに“おいしい幸せ”を感じられる、信頼の品質です。
            </p>
            </div>
            <img src={butter} alt="" />
        </div>
        <div className="toProduct">
            <p>こだわりの詰まったスイーツの紹介は商品情報をご覧ください！</p>
        </div>
      </section>
<img src={yakigashitext} alt="" className="textimg fadeLoop" />
      <Footer />
    </>
  );
}