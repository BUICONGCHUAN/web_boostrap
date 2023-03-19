import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import '../styles/Detail.css'

export default function () {
  return (
    <div>
        <Header/>
          <div class="container">
            <div class="row">
              <div class="detail-img col-7 d-flex">
                <div class="row">
                  <div class="detail-img-big col-8 ">
                    <img src={`${require("../img/sp1.jpg")}`}style={{width:'100%' }}/>
                  </div>
                  <div class="detail-img-small col-3 text-center">
                    <a><i class="fa-solid fa-chevron-up"></i></a>
                    <img src={`${require("../img/sp1.jpg")}`}style={{width:'100%' }}/>
                    <img src={`${require("../img/sp1.jpg")}`}style={{width:'100%' }}/>
                    <img src={`${require("../img/sp1.jpg")}`}style={{width:'100%' }}/>
                    <a><i class="fa-solid fa-chevron-down "></i></a>
                  </div>
                </div>
              </div>
              <div class="detail-info col-5">
                <div class="detail-info-title">
                  <h1>SET ÁO VÀ CHÂN VÁY CHERISH</h1>
                </div>
                <div class="detail-info-title-code d-flex">
                  <p>SKU: 57T0231</p>
                  <div class="detail-info-rating ">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <p> (O đánh giá)</p>
                </div>
                <div class="detail-info-price d-lg-inline-flex  ">
                  621.000đ <span>1.380.000đ</span>
                  <div class="detail-info-sale fs-6 fw-bold text-center ">
                    -55%
                  </div>
                </div>
                <div class="detail-info-color">
                  <p> Màu sắc: Kẻ Đen</p>
                  <span>
                    <img src={`${require("../img/k49.png")}`}></img>
                  </span>
                </div>
                <div class="detail-info-size pt-4 d-flex">
                  <label>
                    <input type="radio" name='size' value="s"></input>
                    <span class="text-uppercase">S</span>
                  </label>
                  <label>
                    <input type="radio" name='size' value="s"></input>
                    <span class="text-uppercase">M</span>
                  </label>
                  <label>
                    <input type="radio" name='size' value="s"></input>
                    <span class="text-uppercase">L</span>
                  </label>
                  <label>
                    <input type="radio" name='size' value="s"></input>
                    <span class="text-uppercase">XL</span>
                  </label>
                  <label>
                    <input type="radio" name='size' value="s"></input>
                    <span class="text-uppercase">XL</span>
                  </label>
                </div>
                <div class="detail-info-quantity pt-4">
                  <p>Số lượng :</p>
                  <div class="detail-info-quantity-input">
                    <input type="hidden"></input>
                    <input type="hidden"></input>
                    <input type="number"></input>
                    <div class="detail-info-quantity-increase">+</div>
                    <div class="detail-info-quantity-decrease">-</div>
                  </div>
                </div>
                <div class="detail-info-add  pt-4 ">
                  <button class="btn-add" >Thêm vào giỏ</button>
                  <button class="btn-buy">Mua hàng</button>
                  <button class="btn-tym"><i class="fa-regular fa-heart"></i></button>
                </div>
              </div>
            </div>
          </div>
        <Footer/>
    </div>
  )
}
