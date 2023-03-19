import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import '../styles/Home.css'
import '../styles/Product.css'
import { products } from '../fakeData'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Product() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const callApi = async () => {
      const result = await axios.get('http://localhost:3000/product')
      console.log(result.data)
      setProductList(result.data)
    }
    callApi()
  }, [])

  return (
    
    <div>
        <Header/>
        <section className='product'>
            <div class="container ">
                <div class="title_product col ">
                    <p> Trang chủ -<span> Áo</span> - <span>Áo thun</span> </p>
                </div>
            </div>
            
            <div className="container">
              <div className="row ">
                
                <div className="option_product col-3 ">
                  <ul>
                    <li class="item-side item-side-size d-flex justify-content-between">
                      <p class="item-side-size-title">Size</p>
                      <span>+</span>
                    </li>
                    <li class="item-side item-side-color d-flex justify-content-between">
                      <p class="item-side-color-title">Màu sắc</p>
                      <span>+</span>
                    </li>
                    <li class="item-side item-side-price d-flex justify-content-between">
                      <p class="item-side-price-title">Mức giá</p>
                      <span>+</span>
                    </li>
                    <li class="item-side item-side-discount d-flex justify-content-between">
                      <p class="item-side-discount-title">Mức chiết khấu</p>
                      <span>+</span>
                    </li>
                    <li class="item-side item-side d-flex justify-content-between">
                      <p class="item-side-title">Nâng cao</p>
                      <span>+</span>
                    </li>
                  </ul>
                  <div class="product-filter d-flex justify-content-around">
                    <button class="btn-filter" >BỎ LỌC</button>
                    <button class="btn-filter">LỌC</button>
                  </div>
                </div>
                  
                <div className="inf_product col-9 ">
                  <div class="title-main d-flex justify-content-between pt-3">
                    <h1 class="title_main fs-4"> QUẦN ÁO NỮ</h1>
                    <div class="title-option">
                      <select>
                        <option>Sắp xếp theo</option>
                        <option>Mặc định</option>
                        <option>Mới nhất</option>
                        <option>Được mua nhiều nhất</option>
                        <option>Được yêu thích nhât</option>
                        <option>Giá:Thấp đến cao</option>
                        <option>Giá:Cao đến thấp</option>
                      </select>
                    </div>
                  </div>
                  <div class="list_product">
                    <div class="row pt-3 abc">

                      {productList.map( e => ( 
                        <div class="col-3 ">
                        <div class="product ">
                        <Link to='/detail'>
                          <div class="product_img">
                            <img class='anh_1' src={require(`../img/${e.img}`)} alt="" />
                            <img class='anh_2' src={require(`../img/${e.img2}`)} alt="" />
                          </div>    
                        </Link>
                        
                          <div class="info_product pt-3 ">
                              <div class=" color_product ">
                              <img class='color_2' src={require(`../color/${e.color?.color1}`)} alt=""/>
                              <img class='color_2' src={require(`../color/${e.color?.color2}`)} alt=""/>
                              <img class='color_2' src={require(`../color/${e.color?.color3}`)} alt=""/>
                              </div>
                            <h3 class="text_product pt-2 mb-3">{e.name}</h3>
                            <div class="price_product d-flex justify-content-between">
                              <div class="price fw-bold">{e.price}.000đ<span>1.990.000đ</span></div>
                              <button class="add_card"><i class="fa-solid fa-bag-shopping"></i></button>
                            </div>
                          </div>
                        </div>
                      </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}
