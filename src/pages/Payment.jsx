import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../index.css"
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
                <img src="" alt="" className="kvimg" />
              </div>
            </section>
      <Footer />
    </div>
        )
    }