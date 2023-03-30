import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../component/Footer'
import Header from '../component/Header'
import '../styles/Cart.css'
//import { getImagePath } from '../untils'
export default function () {
    const listTaskStore = useSelector((state) => state.product.productList);
    console.log('aaaa',listTaskStore)
  return (
    <div>
        <Header />
        <div class="container">
            <div class="row">
                <div class="col-8 cart-info ">
                    <h1>Giỏ hàng của bạn <span> <b>1</b> sản phẩm</span></h1>
                    <div class="row title-cart-info">
                        <div class="col-5">
                            TÊN SẢN PHẨM
                        </div>
                        <div class="col-2">
                            CHIẾT KHẤU
                        </div>
                        <div style={{paddingLeft:'1.5rem'}} class="col">
                            SỐ LƯỢNG
                        </div>
                        <div class="col">
                            TỔNG TIỀN
                        </div>
                    </div>
                    <hr/>
                    {listTaskStore.map((item)=>{
                       
                    return(

                        <div key={item?.id} class="row cart-info-list pt-3">
                            <div class="col-2 cart-info-list-img">
                                <img class='img-product' src={require(`../img/${item.img}`)} alt=""/>
                            </div>
                            <div class="col-3">
                                <p> Đầm lụa xòe phối khuy</p>
                                <div class="color-size ">
                                    <p>Màu sắc:<span>Vàng hoa</span></p>
                                    <p>Size:<span>L</span></p>
                                </div>
                            </div>
                            <div class="col-2">
                               <p>{item.price}.000đ</p>
                            </div>
                            <div class="col">
                                <div class="detail-info-quantity-input">
                                        <input type="hidden"></input>
                                        <input type="hidden"></input>
                                        <input type="number"></input>
                                        <div class="detail-info-quantity-increase">+</div>
                                        <div class="detail-info-quantity-decrease">-</div>
                                    </div>
                            </div>
                            <div class="col cart-info-list-price d-flex justify-content-around">
                                <p>1.450.000đ</p>                            
                                <a><i class="fa-solid fa-trash-can"></i></a>
                            </div>
                        </div>                       
                    )
                    })}                  
                </div>               
                <div class="col-4 ">
                    <div class="cart-summary  ">
                        <div class='cart-summary-total '>
                            <div class='cart-summary-overview container pt-3'>
                            <h1> Tổng tiền giỏ hàng</h1>
                            <div class='cart-summary-overview-item d-flex justify-content-between'>
                                <p>Tổng sản phẩm</p>
                                <p>1</p>
                            </div>
                            <div class='cart-summary-overview-item d-flex justify-content-between'>
                                <p>Tổng tiền hàng</p>
                                <p class='total-disount'>990.000đ</p>
                            </div>
                            <div class='cart-summary-overview-item d-flex justify-content-between'>
                                <p>Thành tiền</p>
                                <p class='total-disount fw-bold'>990.000đ</p>
                            </div>
                            <div class='cart-summary-overview-item d-flex justify-content-between'>
                                <p>Tạm tính</p>
                                <p class='total-disount fw-bold'>990.000đ</p>
                            </div>
                            <div class="cart-summary-overview-note">
                                <div class="inner-note  ">
                                    <div class="left-inner-note d-flex "> 
                                        <span><i class="fa-solid fa-circle-exclamation"></i></span>
                                        <div class="content-inner-note px-3">
                                            <p>Miễn <b>đổi trả</b> đối với sản phẩm đồng giá / sale trên 50%</p>
                                        </div>
                                    </div>
                                    <div class="left-inner-note-check d-flex">
                                        <span><i class="fa-solid fa-circle-check"></i></span> 
                                        <div class="content-inner-note-check px-3">
                                            <p>Đơn hàng của bạn được Miễn phí ship</p>    
                                        </div> 
                                    </div>
                                    <hr/>     
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="cart-summary-button">
                        <button class="btn btn-outline-dark " type="submit" >Đặt hàng</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
