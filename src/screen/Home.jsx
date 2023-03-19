import Footer from '../component/Footer';
import Header from '../component/Header';
import '../styles/Home.css';
function Home() {
  return (
    
    <div className="Home ">
      <Header/>
      {/*  sologan */}
        <div class="container text-center pt-4" >
            <div class="row fw-bold ">
                <div class="col pt-2" style={{
                    color:'white',
                    backgroundColor:'#d73831',
                    height:'40px',
                    fontSize:'15px'
                }}>
                    FREE SHIP ĐƠN HÀNG TỪ 2 TRIỆU
                </div>
                <div class="col pt-2"style={{
                    color:'white',
                    backgroundColor:'#dc633a',
                    height:'40px',
                    fontSize:'15px'
                }}>
                    BẢO HÀNH TRỌN ĐỜI
                </div>
                <div class="col pt-2"style={{
                    color:'white',
                    backgroundColor:'#ac2f33',
                    height:'40px',
                    fontSize:'15px'
                }}>
                    CHÍNH SÁCH THẺ THÀNH VIÊN
                </div>
            </div>
        </div>
        {/* slide */}
        <div class='container'>
          <div class='row'>
            <div class='slide col slide-img pt-4 '>
              <img src={`${require("../img/slide.jpg")}`}style={{width:'100%' }}/>
              {/* <img src={`${require("../img/slide.jpg")}`}style={{width:'100%' }}/> */}

            </div>
          </div>
        </div>
        <section>
          {/* best seller 1 */}
          <div class="container pt-5 ">
            <h1 class="seller text-center fw-bold ">BEST SELLER</h1>
            <div class="product_seller text-center row ">
              <div class="title_seller text-decoration-underline fw-bold col-2 "> IVY moda</div>
              <div class="title_seller col-1"> IVY men</div>
              <div class="title_seller col-2"> IVY kids</div>
            </div>
          </div>
          <div class="container pt-5">
            <div class="row">
              <div class="col-3">
                <div class="product">
                  <div class="product_img">
                    <img class='anh_1' src={`${require("../img/sp1.1.jpg")}`} alt="" />
                    <img class='anh_2' src={`${require("../img/sp1.jpg")}`} alt="" />
                  </div>
                  
                  <div class="info_product pt-3 ">
                    <div class=" color_product ">
                      <img class='color_1' src={`${require("../img/color1.png")}`} alt=""/>
                      <img class='color_2' src={`${require("../img/color2.png")}`} alt=""/>
                      <img class='color_3' src={`${require("../img/color3.png")}`} alt=""/>
                    </div>
                    <h3 class="text_product pt-3 mb-3">Eser Set - Set Áo Lụa Và Chân Váy Kèm Đai</h3>
                    <div class="price_product d-flex justify-content-between">
                      <div class="price fw-bold">950.000đ <span>1.990.000đ</span></div>
                      <button class="add_card"><i class="fa-solid fa-bag-shopping"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="product">
                  <div class="product_img">
                    <img class='anh_1' src={`${require("../img/sp1.1.jpg")}`} alt="" />
                    <img class='anh_2' src={`${require("../img/sp1.jpg")}`} alt="" />
                  </div>
                  
                  <div class="info_product pt-3 ">
                    <div class=" color_product ">
                      <img class='color_1' src={`${require("../img/color1.png")}`} alt=""/>
                      <img class='color_2' src={`${require("../img/color2.png")}`} alt=""/>
                      <img class='color_3' src={`${require("../img/color3.png")}`} alt=""/>
                    </div>
                    <h3 class="text_product pt-3 mb-3">Eser Set - Set Áo Lụa Và Chân Váy Kèm Đai</h3>
                    <div class="price_product d-flex justify-content-between">
                      <div class="price fw-bold">950.000đ <span>1.990.000đ</span></div>
                      <button class="add_card"><i class="fa-solid fa-bag-shopping"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="product">
                  <div class="product_img">
                    <img class='anh_1' src={`${require("../img/sp1.1.jpg")}`} alt="" />
                    <img class='anh_2' src={`${require("../img/sp1.jpg")}`} alt="" />
                  </div>
                  
                  <div class="info_product pt-3 ">
                    <div class=" color_product ">
                      <img class='color_1' src={`${require("../img/color1.png")}`} alt=""/>
                      <img class='color_2' src={`${require("../img/color2.png")}`} alt=""/>
                      <img class='color_3' src={`${require("../img/color3.png")}`} alt=""/>
                    </div>
                    <h3 class="text_product pt-3 mb-3">Eser Set - Set Áo Lụa Và Chân Váy Kèm Đai</h3>
                    <div class="price_product d-flex justify-content-between">
                      <div class="price fw-bold">950.000đ <span>1.990.000đ</span></div>
                      <button class="add_card"><i class="fa-solid fa-bag-shopping"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="product">
                  <div class="product_img">
                    <img class='anh_1' src={`${require("../img/sp1.1.jpg")}`} alt="" />
                    <img class='anh_2' src={`${require("../img/sp1.jpg")}`} alt="" />
                  </div>
                  
                  <div class="info_product pt-3 ">
                    <div class=" color_product ">
                      <img class='color_1' src={`${require("../img/color1.png")}`} alt=""/>
                      <img class='color_2' src={`${require("../img/color2.png")}`} alt=""/>
                      <img class='color_3' src={`${require("../img/color3.png")}`} alt=""/>
                    </div>
                    <h3 class="text_product pt-3 mb-3">Eser Set - Set Áo Lụa Và Chân Váy Kèm Đai</h3>
                    <div class="price_product d-flex justify-content-between">
                      <div class="price fw-bold">950.000đ <span>1.990.000đ</span></div>
                      <button class="add_card"><i class="fa-solid fa-bag-shopping"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container select_all pt-5">
            <div class="row">
              <div class="col">
                <button class="btn btn-outline-dark" type="submit" >Xem tất cả</button>
              </div>
            </div>
          </div>
          {/* seller 2 */}
          <div class="container pt-5 ">
            <h1 class="seller text-center fw-bold text-danger ">Flash Sale 20h-9h</h1>
          </div>
          <div class="container pt-5">
            <div class="row">
              <div class="col-3">
                <div class="product">
                  <div class="product_img">
                    <img class='anh_1' src={`${require("../img/sp1.1.jpg")}`} alt="" />
                    <img class='anh_2' src={`${require("../img/sp1.jpg")}`} alt="" />
                  </div>
                  
                  <div class="info_product pt-3 ">
                    <div class=" color_product ">
                      <img class='color_1' src={`${require("../img/color1.png")}`} alt=""/>
                      <img class='color_2' src={`${require("../img/color2.png")}`} alt=""/>
                      <img class='color_3' src={`${require("../img/color3.png")}`} alt=""/>
                    </div>
                    <h3 class="text_product pt-3 mb-3">Eser Set - Set Áo Lụa Và Chân Váy Kèm Đai</h3>
                    <div class="price_product d-flex justify-content-between">
                      <div class="price fw-bold">950.000đ <span>1.990.000đ</span></div>
                      <button class="add_card"><i class="fa-solid fa-bag-shopping"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="product">
                  <div class="product_img">
                    <img class='anh_1' src={`${require("../img/sp1.1.jpg")}`} alt="" />
                    <img class='anh_2' src={`${require("../img/sp1.jpg")}`} alt="" />
                  </div>
                  
                  <div class="info_product pt-3 ">
                    <div class=" color_product ">
                      <img class='color_1' src={`${require("../img/color1.png")}`} alt=""/>
                      <img class='color_2' src={`${require("../img/color2.png")}`} alt=""/>
                      <img class='color_3' src={`${require("../img/color3.png")}`} alt=""/>
                    </div>
                    <h3 class="text_product pt-3 mb-3">Eser Set - Set Áo Lụa Và Chân Váy Kèm Đai</h3>
                    <div class="price_product d-flex justify-content-between">
                      <div class="price fw-bold">950.000đ <span>1.990.000đ</span></div>
                      <button class="add_card"><i class="fa-solid fa-bag-shopping"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="product">
                  <div class="product_img">
                    <img class='anh_1' src={`${require("../img/sp1.1.jpg")}`} alt="" />
                    <img class='anh_2' src={`${require("../img/sp1.jpg")}`} alt="" />
                  </div>
                  
                  <div class="info_product pt-3 ">
                    <div class=" color_product ">
                      <img class='color_1' src={`${require("../img/color1.png")}`} alt=""/>
                      <img class='color_2' src={`${require("../img/color2.png")}`} alt=""/>
                      <img class='color_3' src={`${require("../img/color3.png")}`} alt=""/>
                    </div>
                    <h3 class="text_product pt-3 mb-3">Eser Set - Set Áo Lụa Và Chân Váy Kèm Đai</h3>
                    <div class="price_product d-flex justify-content-between">
                      <div class="price fw-bold">950.000đ <span>1.990.000đ</span></div>
                      <button class="add_card"><i class="fa-solid fa-bag-shopping"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="product">
                  <div class="product_img">
                    <img class='anh_1' src={`${require("../img/sp1.1.jpg")}`} alt="" />
                    <img class='anh_2' src={`${require("../img/sp1.jpg")}`} alt="" />
                  </div>
                  
                  <div class="info_product pt-3 ">
                    <div class=" color_product ">
                      <img class='color_1' src={`${require("../img/color1.png")}`} alt=""/>
                      <img class='color_2' src={`${require("../img/color2.png")}`} alt=""/>
                      <img class='color_3' src={`${require("../img/color3.png")}`} alt=""/>
                    </div>
                    <h3 class="text_product pt-3 mb-3">Eser Set - Set Áo Lụa Và Chân Váy Kèm Đai</h3>
                    <div class="price_product d-flex justify-content-between">
                      <div class="price fw-bold">950.000đ <span>1.990.000đ</span></div>
                      <button class="add_card"><i class="fa-solid fa-bag-shopping"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container select_all pt-5">
            <div class="row">
              <div class="col">
                <button class="btn btn-outline-dark" type="submit" >Xem tất cả</button>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
    </div>
  );               
}

export default Home;