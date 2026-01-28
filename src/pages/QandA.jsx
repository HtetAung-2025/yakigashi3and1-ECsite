import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import yakigashitext from '../images/home/yakigashitext.jpg'
import faq from "../images/home/faq.png"
export default
  function QandA() {

  return (
    <div>
      <Header />
      <section className="home" id="home">
        <div className="key-virtual container">
          <div className="kv-left">
            <div className="key-virtual-text">
              <h1>お問い合わせ</h1>
              <h1>よくある質問など。。。</h1>
              <h1>焼菓子 3&1</h1>
            </div>
          </div>
          <img src={faq} alt="" className="kvimg" />
        </div>
      </section>
      <section className="content" id="content">
        <div className="content-container container">
          <div className="heading">
            <h1 lang="en">Contact</h1>
            <p>お問い合わせ</p>
          </div>
        </div>
      </section>
      <section className="detailsbox container">
        <ul>
          <li>内容によりましては、お返事に数日頂戴する場合や、ご返信できかねる場合もございます。あらかじめご了承ください。</li>
          <li>任意の項目につきましても、差し支えない場合はなるべく記入いただけますと幸いです。</li>
          <li>弊社よりお客様へお送りいたしましたお返事のメールの転載、二次利用はご遠慮くださいますようお願いいたします。</li>
          <li>弊社では頂戴した内容のお返事はパソコンから送信しております。迷惑メールサービス設定をされている場合あらかじめ「yakigashi3&1@gmail.com」から受信ができるように設定をお願いいたします。</li>
        </ul>
        <div className="form">
          <div className="formgroup">
            <p className="formleftText">お問い合わせ項目<span>必項</span></p>
            <select className="kinds">
              <option value="" enable >選択してください</option>
              <option value="1">選択肢1</option>
              <option value="2">選択肢2</option>
            </select>
          </div>
          <div className="formgroup">
            <p className="formleftText">お問い合わせ内容<span>必項</span></p>
            <textarea name="claim" id="claim" rows={5}></textarea>
          </div>
          <div className="formgroup">
            <p className="formleftText">返信のご希望<span>必項</span></p>
            <div className="radioselect">
              <label className="paragraph">
                <input type="radio" name="delivery" value="希望する" />
                希望する
              </label>

              <label className="paragraph">
                <input type="radio" name="delivery" value="希望しない" />
                希望しない
              </label>
            </div>
          </div>
          <div className="formgroup">
            <p className="formleftText">お名前<span>必項</span></p>
            <div className="formname">
              <input type="text" className="Fname" placeholder="姓" />
              <input type="text" className="Fname" placeholder="名" />
            </div>
          </div>
          <div className="formgroup">
            <p className="formleftText">メールアドレス<span>必項</span></p>
            <input type="email" name="mail" id="mail" placeholder="メールアドレス" className="email" />
          </div>
          <div className="formgroup">
            <p className="formleftText">電話番号</p>
            <input type="email" name="mail" id="mail" placeholder="例：030　3333　3333　" className="phone" />
          </div>
          <div className="formgroup">
            <p className="formleftText">ご住所</p>
            <input type="email" name="mail" id="mail" placeholder="例：〇〇区。。。" className="address" />
          </div>
          <div className="formgroup">
            <p className="formleftText">性別</p>
            <select className="kinds">
              <option value="" enable >選択してください</option>
              <option value="1">男子</option>
              <option value="2">女子</option>
              <option value="3">回答しない</option>
            </select>
          </div>
          <div className="formgroup">
            <p className="formleftText">年齢</p>
            <select className="kinds">
              <option value="" enable >選択してください</option>
              <option value="1">20代</option>
              <option value="2">30代</option>
              <option value="3">40〜60歳</option>
            </select>
          </div>
          <div className="formgroup">
            <button type="submit">送信する</button>
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