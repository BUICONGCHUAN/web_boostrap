import React from 'react'
import '../styles/Footer.css'
export default function Footer() {
  return (
    <div className='Footer'>
      <div class="container">
      <hr/>

        <div class="row">
          <div class="col-md-4  ">
            <div class="col logo-footer  ">
              <img style={{width:'150px',height:'45px'}} src={`${require("../img/logo-footer.png")}`}/>
              <img src={`${require("../img/dmca_protected_16_120.png")}`} />
              <img style={{width:'150px',height:'45px'}} src={`${require("../img/img-congthuong.png")}`}/> 
            </div>
            <div class="col-md-auto pt-3" style={{fontSize:'14px'}}>
              Công ty Cổ phần Dự Kim với số đăng ký kinh doanh: 0105777650
            </div>
            <div class="col-md-auto pt-3" style={{fontSize:'14px'}}>
              <span class="address fw-bold">Địa chỉ đăng ký:</span> Tổ dân phố Tháp, P.Đại Mỗ, Q.Nam Từ Liêm, TP.Hà Nội, Việt Nam
            </div>
            <div class="col-md-auto pt-3" style={{fontSize:'14px'}}>
              <span class="address fw-bold">Số điện thoại:</span> 039 351 3334
            </div>
            <div class="col-md-auto pt-3 logo-link row">
              <div class="col-md-auto pt-2" style={{fontSize:'14px'}}>
                <img src="https://pubcdn.ivymoda.com/ivy2/images/ic_fb.svg"/>
              </div>
              <div class="col-md-auto pt-2" style={{fontSize:'14px'}}>
                <img  src="https://pubcdn.ivymoda.com/ivy2/images/ic_gg.svg"/>
              </div>
              <div class="col-md-auto pt-2" style={{fontSize:'14px'}}>
                <img style={{height:'28px'}} src="https://pubcdn.ivymoda.com/ivy2/images/ic_instagram.svg"/>
              </div>
              <div class="col-md-auto pt-2" style={{fontSize:'14px'}}>
                <img style={{height:'27px'}} src="https://pubcdn.ivymoda.com/ivy2/images/ic_pinterest.svg"/>
              </div>
              <div class="col-md-auto pt-2" style={{fontSize:'14px'}}>
                <img src="https://pubcdn.ivymoda.com/ivy2/images/ic_ytb.svg"/>
              </div>
            </div>
          </div>
          <div class="col-md-2 pt-1 ps-5">
            <div class="col " >
              <h1 class="title_footer">Giới thiệu</h1>
            </div>
            <div class="col-md-auto pt-3" style={{fontSize:'14px'}}>
               Về IVY moda
            </div>
            <div class="col-md-auto pt-3" style={{fontSize:'14px'}}>
                Tuyển dụng
            </div>
            <div class="col-md-auto pt-3" style={{fontSize:'14px'}}>
               Hệ thống cửa hàng
            </div>
          </div>
          <div class="col-md-2 pt-1 ps-4">
            <div class="col " >
              <h1 class="title_footer">Dịch vụ khách hàng</h1>
            </div>
            <div class="col-md-auto pt-3" style={{fontSize:'14px'}}>
               Chính sách điều khoản
            </div>
            <div class="col-md-auto pt-3" style={{fontSize:'14px'}}>
               Hướng dẫn mua hàng
            </div>
            <div class="col-md-auto pt-3" style={{fontSize:'14px'}}>
               Chính sách thanh toán
            </div>
            <div class="col-md-auto pt-3" style={{fontSize:'14px'}}>
               Chính sách đổi trả
            </div>
            <div class="col-md-auto pt-3" style={{fontSize:'14px'}}>
               Chính sách bảo hành
            </div>
            <div class="col-md-auto pt-3" style={{fontSize:'14px'}}>
               Chính sách giao nhận vận chuyển
            </div>
          </div>
          <div class="col-md-1 pt-1 ps-4">
            <div class="col " >
              <h1 class="title_footer">Liên hệ</h1>
            </div>
            <div class="col-md-auto pt-3" style={{fontSize:'14px'}}>
               Hotline
            </div>
            <div class="col-md-auto pt-3" style={{fontSize:'14px'}}>
               Email
            </div>
            <div class="col-md-auto pt-3" style={{fontSize:'14px'}}>
               Live Chat
            </div>
            <div class="col-md-auto pt-3" style={{fontSize:'14px'}}>
                Messenger
            </div>
            <div class="col-md-auto pt-3" style={{fontSize:'14px'}}>
               Liên hệ
            </div>
          </div>
          <div class="col md-4 pt-1">
            <div class="col contact_email">
              <div class="col-md-auto pt-3 ps-4" >
                <h1 class="title_footer">Nhận thông tin các <br/>
                chương trình của IVY moda</h1>
                  <div class="col-md-auto pt-3">
                    <div class="group d-flex">
                      <input  type="text" class="input" placeholder='Nhập email'/>
                      <button class="btn btn-outline-dark" type="submit" >Đăng ký</button>
                    </div>                    
                  </div>
              </div>
            </div>
            <h1 class="title_footer pt-4"> Download App</h1>
            <div class="col-md-auto pt-3 d-flex">
              <div class="col-md-auto pt-2" style={{fontSize:'14px'}}>
                <img style={{width:'150px',height:'45px'}} src={`${require("../img/appstore.png")}`}/>
              </div>
              <div class="col-md-auto pt-2" style={{fontSize:'14px'}}>
                <img style={{width:'150px',height:'45px',paddingLeft:'20px'}} src={`${require("../img/googleplay.png")}`}/>
              </div>
            </div>
          </div>
      </div>
      <hr/>
    </div>
      <div class="text_footer text-center ">
      ©IVYmoda All rights reserved
      </div>
    </div>
  )
}
