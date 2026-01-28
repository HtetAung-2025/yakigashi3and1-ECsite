import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";
import Footer from "../components/Footer";
import registerimg from "../images/home/register.png"
import yakigashitext from '../images/home/yakigashitext.jpg'
export function Register() {
    const [comfirmMessage, setComfirmMessage] = useState(false);
    const handleComfirm = () => {
        setComfirmMessage(true);
        setTimeout(() => {
            setComfirmMessage(false);
        }, 4000);
    }
    return (
        <>
            <Header />
            {comfirmMessage && (
                <div className="order-success-msg">
                    <i className="ri-checkbox-circle-fill"></i>
                    ご注文が確定しました！
                </div>
            )}
            <main>
                <section className="home" id="home">
                    <div className="key-virtual container">
                        <div className="kv-left">
                            <div className="key-virtual-text">
                                <h1>お問い合わせ</h1>
                                <h1>よくある質問など。。。</h1>
                                <h1>焼菓子 3&1</h1>
                            </div>
                        </div>
                        <img src={registerimg} alt="" className="kvimg" />
                    </div>
                </section>
                <section className="content" id="content">
                    <div className="content-container container">
                        <div className="heading">
                            <h1 lang="en" id="register">Register</h1>
                            <p>購入手続き</p>
                        </div>
                    </div>
                </section>
                <section className="detailsbox container">
                    <div className="form">
                        <div className="formgroup">
                            <p className="formleftText">ご連絡先<span>必項</span></p>
                            <input type="email" name="mail" id="mail" placeholder="メールアドレス" className="email" />
                        </div>
                        <div className="formgroup">
                            <p className="formleftText">ご届け先<span>必項</span></p>
                            <input type="email" name="mail" id="mail" placeholder="東京都、新宿区　４-3-〇〇ビル" className="address" />
                        </div>
                        <div className="formgroup">
                            <p className="formleftText">お名前<span>必項</span></p>
                            <div className="formname">
                                <input type="text" className="Fname" placeholder="姓" />
                                <input type="text" className="Fname" placeholder="名" />
                            </div>
                        </div>

                        <div className="formgroup">
                            <p className="formleftText">電話番号<span>必項</span></p>
                            <input type="email" name="mail" id="mail" placeholder="例：030　3333　3333　" className="phone" />
                        </div>

                        <div className="formgroup">
                            <p className="formleftText">配送方法<span>必項</span></p>
                            <select className="kinds">
                                <option value="" enable >選択してください</option>
                                <option value="1">常温</option>
                                <option value="2">クール便</option>
                            </select>
                        </div>
                        <div className="formgroup">
                            <p className="formleftText">お支払い方法<span>必項</span></p>
                            <select className="kinds">
                                <option value="" enable >選択してください</option>
                                <option value="1">銀行振込（注文後7日以内）</option>
                                <option value="2">クレジットカード</option>
                                <option value="3">コンビニ払い</option>
                                <option value="4">代引き</option>
                            </select>
                        </div>
                        <div className="formgroup">
                            <button type="submit" onClick={handleComfirm}>注文を確定する</button>
                        </div>
                    </div>
                </section>
            </main>
            <div className="textimg-wrapper">
                <div className="textimg-track">
                    <img src={yakigashitext} alt="Text Image 1" className="textimg" />
                    <img src={yakigashitext} alt="Text Image 2" className="textimg" />
                </div>
            </div>
            <Footer />
        </>
    )
}